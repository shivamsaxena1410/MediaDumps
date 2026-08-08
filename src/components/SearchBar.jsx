import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/Features/searchSlice'



const SearchBar = () => {
    const dispatch = useDispatch();

    const submithandler = (e) => {
        e.preventDefault() 
        dispatch(setQuery(searchTerm));
        console.log(searchTerm, "searched")
    }
    

    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='flex flex-wrap gap-5 p-10 justify-center items-center'>
    
        <form 
            onSubmit={(e) => submithandler(e)} 
            className='flex gap-5 px-5 py-2 rounded w-full items-center'>
        <input
            
            type='text'
            placeholder='Search Anything...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=' w-full bg-(--secondary) text-(--text) rounded px-4 py-2 placeholder:text-white/60 border border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--accent)'
        />
        <button
            className='bg-(--primary) hover:bg-(--primary) px-4 py-2 active:scale-95 outline-none cursor-pointer text-(--text) font-bold rounded transition-transform duration-150'
        >
            Search
        </button>
        </form>
       
    </div>
  )
}

export default SearchBar
