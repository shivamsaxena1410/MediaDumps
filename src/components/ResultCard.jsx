import { BookmarkPlus, BookmarkCheck, Download } from 'lucide-react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem ,removeItem, addToast, removeToast} from '../redux/Features/collectionSlice'
import { useSelector } from 'react-redux'
const ResultCard = (props) => {

  const dispatch = useDispatch();

  const handleDownload = async () => {
    try {
      const response = await axios.get(props.item.src, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(response.data);

      const a = document.createElement("a");
      a.href = url;
      if (props.item.type === 'photo') {
        a.download = `${props.item.title || "image"}.jpg`;
      }
      if (props.item.type === 'video') {
        a.download = `${props.item.title || "video"}.mp4`;
      }
      if (props.item.type === 'gif') {
        a.download = `${props.item.title || "gif"}.gif`;
      }

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const collection = useSelector(state => state.collection.items);

  const bookmarked = collection.some(item => item.id === props.item.id);

  const handleBookmark = () => {
    if (bookmarked) {
      dispatch(removeItem(props.item.id));
      dispatch(removeToast());
    }
    else {
      dispatch(addItem(props.item));
      dispatch(addToast());
    }

  };
  return (
    <div className='flex flex-col relative  h-80 w-80 cursor-pointer hover:scale-105 transition-transform duration-150 rounded-2xl shadow-2xl overflow-hidden'>
      <a href={props.item.url} target="_blank" rel="noopener noreferrer" cursor="pointer" className='h-full w-full flex items-center justify-center'>
        {props.item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={props.item.src} alt="" /> : ''}
        {props.item.type === 'video' ? <video className='h-full w-full object-cover object-center' src={props.item.src} autoPlay loop muted alt={props.item.title} ></video> : ''}
        {props.item.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={props.item.src} alt="" /> : ''}
      </a>
      <div id="title-bottom" className=' absolute bottom-0  min-h-14 w-full  px-3 py-2 text-(--text) '>
        <h2 className='text-sm-100 font-semibold capitalize'>{props.item.title}</h2>
      </div>

      <div >
        <button
          onClick={handleBookmark}
          className={`absolute top-1 right-12 rounded-full p-1 transition duration-150 cursor-pointer
          ${bookmarked ? "bg-(--accent)" : "bg-transparent hover:bg-(--accent)"}
            }`}
        >
          {bookmarked ?  <BookmarkCheck size={30} /> : <BookmarkPlus size={30} />}

        </button>

        <button
          onClick={handleDownload}
          className="absolute top-1 right-3 rounded-full p-1 bg-transparent hover:bg-(--accent) transition duration-150 cursor-pointer"
        >
          <Download size={28} />
        </button>
      </div>

    </div>
  )
}

export default ResultCard
