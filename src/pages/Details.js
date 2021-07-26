import React, {useContext} from 'react'
import { Gif } from '../components/Gif'
import GifsContext from '../context/GifsContext'

export const Details = ({params}) => {
  
  const {gifs} = useContext(GifsContext)
  
  const gif = gifs.find(singleGif => singleGif.id === params.id)
  console.log(gif);
  return (
    <div>
      <Gif url={gif.url} title={gif.title}/>
    </div>
  )
}
