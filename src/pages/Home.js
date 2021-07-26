import React, {useState} from 'react'
import {Link} from 'wouter'
import useLocation from 'wouter/use-location'
import { ListOfGifs } from '../components/ListOfGifs'
import { Loading } from '../components/Loading'
import { TrendingSearches } from '../components/TrendingSearches'
import { useGetGifs } from '../hooks/useGetGifs'
import { getTrending } from '../services/getTrending'
import './Home.css'

const pupulares = ['Game of Thrones', 'Vikingos', 'Narcos', 'Walking Dead', 'Breaking bad']

export const Home = () => {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

//////////////////////////////////////////////////////
  /*const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    getGifs('popular').then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])*/

  const {loading, gifs} = useGetGifs()

///////////////////////////////////////////////////////
  const handleChange = e =>{
    setKeyword(e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  getTrending()

  return (
    <div className="popular-gifs"> 
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} placeholder="Busca aqui un gif"/>
      </form>

      <h2>Última búsqueda</h2>
      {
        loading
          ? 
            <Loading/>
          :
            <ListOfGifs gifs={gifs}/>
      }

      <TrendingSearches/>

      
    </div>
  )
}
