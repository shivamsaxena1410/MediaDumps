import {fetchPhotos, fetchVideos, fetchGif} from '../api/mediaApi'
import {setResults, setLoading, setError} from '../redux/Features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
import Loader from './Loader'

const ResultGrid = () => {

    const {query, activeTab, results, loading, error} = useSelector((store) => store.search);   
    
    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            try {
            dispatch(setLoading());
            if (!query.trim()) return dispatch(setError('Search Something...'));
            let data = [] ;
            if(activeTab === 'photos'){
                let response = await fetchPhotos(query)
                data = response.results.map((item)=>({
                    id:item.id,
                    type:'photo',
                    title:item.alt_description || 'Photo',
                    thumbnail:item.user.profile_image.small,
                    src:item.urls.small,
                    url:item.links.html
                }))
            }

            
            if(activeTab === 'videos'){
                let response = await fetchVideos(query)
                data = response.videos.map((item)=>({
                    id:item.id,
                    type:'video',
                    title:item.user.name || 'Video',
                    thumbnail:item.image,
                    src:item.video_files[0].link,
                    url:item.url
                }))
            }  
            if(activeTab === 'gifs'){
                let response = await fetchGif(query)
                data = response.data.map((item)=>({
                    id:item.id,
                    type:item.type,
                    title:item.title || 'gif',
                    thumbnail:item.file.hd.jpg.url,
                    src:item.file.hd.gif.url,
                    url:item.file.hd.gif.url
                }))
            }
            dispatch(setResults(data));
            console.log(data)
            } catch (err) {
                dispatch(setError(err.message));
            }
        }
        getData()
    }, [query, dispatch, activeTab])

    if(error){
        return <div className='text-center text-red-500 text-2xl mt-10'>{error}</div>
    }
    if(loading){
        return <Loader />
    }

  return (
    <div className='flex flex-wrap h-full justify-center  gap-8 px-10 py-10 overflow-hidden bg-(--bg) '>
        {results.map((item, idx)=> {
            return <div key={idx} >
                
                    <ResultCard item ={item} />

            </div>
        })} 
    </div>
  )
}

export default ResultGrid
