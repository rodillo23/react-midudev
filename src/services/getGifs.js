import {API_URL, API_KEY} from './settings'

export const getGifs = async(keyword)=>{
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  const response = await fetch(apiURL)
  const json = await response.json()
  const {data} = json 
        
  const gifs = data.map(image => {
    const {images, title, id} = image
    const {url} = images.downsized_medium
    return {url, title, id}
  })
  
  return(gifs);
}      