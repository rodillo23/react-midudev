const api_key = 'ciYj5gEtmIln7s9bGcIw7QR9qsrOy0DQ'

export const getGifs = async(keyword)=>{
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  console.log(`******${keyword}******`);
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