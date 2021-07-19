import React, { useState } from 'react'
import {Link} from 'wouter'
import useLocation from 'wouter/use-location'
import './Home.css'

const pupulares = ['Game of Thrones', 'Vikingos', 'Narcos', 'Walking Dead']

export const Home = () => {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleChange = e =>{
    setKeyword(e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  return (
    <div className="popular-gifs"> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} placeholder="Busca aqui un gif"/>
      </form>

      <h3>Los gifs mas populares</h3>
      <ul>
        {
          pupulares.map (popular => {
            return (
              <li key={popular}>
                <Link href={`/search/${popular}`}>Gifs de {popular}</Link>
              </li>
            ) 
          })
        }
      </ul>

      
    </div>
  )
}
