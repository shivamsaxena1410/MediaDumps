import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_API;
const KLIPY_KEY = import.meta.env.VITE_KLIPY_API;

export async function fetchPhotos(query,page=1,per_page=20) {
   const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
   })
   
   return  response.data;
}  

export async function fetchVideos(query,page=1,per_page=20) {
   const response = await axios.get(`https://api.pexels.com/v1/videos/search`, {
    params: {query,page,per_page},
    headers:{Authorization:PEXELS_KEY}
   })
   
   return  response.data;
} 

export async function fetchGif(q,page=1,per_page=20) {
   const response = await axios.get(`https://api.klipy.com/api/v1/${KLIPY_KEY}/gifs/search`, {
    params: {q,page,per_page},
    headers:{Authorization:`Client-ID ${KLIPY_KEY}`}
   })
   
   return  response.data.data;
} 