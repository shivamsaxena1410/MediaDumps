import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/Features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'videos','gifs']
    const dispatch= useDispatch();

    const activeTab = useSelector((state) => state.search.activeTab);
    
  return (
    <div className='flex justify-center gap-5 '>
        {tabs.map(function (elem,idx){
            return (
                <button
                    className={`${(activeTab==elem?'bg-(--primary)':'bg-(--secondary)')} hover:bg-(--accent) transition active:scale-95 text-(--text) font-bold py-2 px-4 rounded m-4 cursor-pointer`}
                    key={idx} 
                    onClick={()=>{
                        dispatch(setActiveTab(elem))
                    }}
            >
            {elem}
            </button>
        )}
            
        )}
    </div>
  )
}

export default Tabs
