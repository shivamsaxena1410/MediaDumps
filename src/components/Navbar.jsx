import { Search } from 'lucide-react';
import { Link ,useLocation} from 'react-router-dom'
const Navbar = () => {

    const location = useLocation();
    let activeTab = location.pathname;

    return (
        <div className='flex flex-wrap gap-5 p-5 justify-center items-center top-0 bg-(--bg) sticky z-50 shadow-md border-b border-(--primary)'>
            <div className=' font-bold text-(--accent) justify-between flex w-full'>
                <Link to="/" className='text-3xl flex gap-2 items-center'>
                    <Search size={30} />
                    Media Dumpster
                </Link>
                <div className='flex gap-5 mr-10'>
                    <Link to="/HomePage" className={`${activeTab === '/' || activeTab === '/HomePage' ? 'bg-(--primary)' : 'bg-(--secondary)'} hover:bg-(--secondary) p-2 active:scale-95 outline-none cursor-pointer text-(--text) font-bold rounded transition-transform duration-150`}>
                        Search
                    </Link>
                    <Link to="/collection" className={`${activeTab === '/collection' ? 'bg-(--primary)' : 'bg-(--secondary)'} hover:bg-(--secondary) p-2 active:scale-95 outline-none cursor-pointer text-(--text) font-bold rounded transition-transform duration-150`}>

                        Go to Collection
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar