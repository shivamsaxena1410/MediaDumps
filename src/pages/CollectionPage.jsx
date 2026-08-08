import { useSelector } from 'react-redux';
import ResultCard from '../components/ResultCard';
import { useDispatch } from 'react-redux';
import { clearCollection , allClearToast} from '../redux/Features/collectionSlice';

const CollectionPage = () => {

  const collectionItems = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAllCollection = () => {
    dispatch(allClearToast());
    dispatch(clearCollection());
  }

  return (
    <div className='w-full min-h-screen text-(--text) bg-(--bg)'>
      <div className="flex flex-wrap gap-5 p-5 justify-between items-center sticky top-0 z-50 bg-(--bg) border-b border-(--primary) shadow-[inset_0_-15px_25px_rgba(260,250,250,0.18)]">
        <h2 className='text-xl font-bold text-center text-(--primary) '>
          My Collection
        </h2>
        <button 
        className='bg-(--extra) text-(--text)  font-semibold hover:bg-(--accent) active:scale-95 cursor-pointer transition-colors duration-300 py-2 px-4 rounded-md'
        onClick={clearAllCollection}
        >
          Clear Collection
        </button>
      </div>
      <div className='flex flex-wrap h-full justify-start  gap-8 px-10 py-10 overflow-hidden bg-(--bg) '>
        {collectionItems.map((item) => {
          return <ResultCard key={item.id} item={item} />;
        })}
      </div>

    </div>

  )
}

export default CollectionPage