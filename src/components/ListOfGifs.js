import React, {useEffect, useState} from 'react'
import { getGifs } from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGifs = ({keyword}) => {
  
  const [gifs, setGifs] = useState([])

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
