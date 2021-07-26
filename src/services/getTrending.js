import {API_URL, API_KEY} from './settings'

export const getTrending = async()=>{
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  const response = await fetch(apiURL)
  const json = await response.json()
  const {data} = json 
  return(data);
}      