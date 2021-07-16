import React from 'react'
import './Gifs.css'

export const Gif = ({url, title, id}) => {
  return (
    <a href={`/${id}`} className="card">
      <img src={url} width="300" alt={title}/>
      <p>{title}</p>
    </a>
  )
}
