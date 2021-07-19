import React from 'react'
import { Gif } from './Gif';

export const ListOfGifs = ({gifs}) => {

  return (
    <>
      {
        gifs.map(({title, url, id}) => <Gif title={title} url={url} key={id} id={id}/>)
      }
    </>
  )

}
