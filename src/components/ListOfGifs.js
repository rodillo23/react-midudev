import React, {useEffect, useState} from 'react'
import { getGifs } from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGifs = ({params}) => {
  const [gifs, setGifs] = useState([])

  const {keyword} = params

  useEffect(()=>{
    getGifs(keyword).then(gifs => setGifs(gifs))  
  }, [keyword])

  return (
    <>
      {
        gifs.map(({title, url, id}) => <Gif title={title} url={url} key={id} id={id}/>)
      }
    </>
  )

}
