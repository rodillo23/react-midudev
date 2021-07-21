import React from 'react'
import { Link } from 'wouter'
import './Gifs.css'

export const Gif = ({url, title, id}) => {
  return (
    <Link to={`gif/${id}`} className="card">
      <img loading='lazy' src={url} width="300" alt={title}/>
      <p>{title}</p>
    </Link>
  )
}
