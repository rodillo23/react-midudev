import React, {useState} from 'react'
import {Link} from 'wouter'
import useLocation from 'wouter/use-location'
import { ListOfGifs } from '../components/ListOfGifs'
import { Loading } from '../components/Loading'
import { useGetGifs } from '../hooks/useGetGifs'
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

  const {loading, gifs} = useGetGifs({keyword:'android'})

///////////////////////////////////////////////////////
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

      <h2>Última búsqueda</h2>
      {
        loading
          ? 
            <Loading/>
          :
            <ListOfGifs gifs={gifs}/>
      }

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
