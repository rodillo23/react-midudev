import React from 'react'
import {Link} from 'wouter'

export const Home = () => {
  return (
    <div>
      <Link to='/search/got'>Game of Thrones</Link>
      <Link to='/search/vikings'>Vikingos</Link>
      <Link to='/search/narcos'>Narcos</Link>
    </div>
  )
}
