import React from 'react'
import { ListOfGifs } from '../components/ListOfGifs'
import { Loading } from '../components/Loading'
import { useGetGifs } from '../hooks/useGetGifs'

export const SearchResults = ({params}) => {
  
  const {keyword} = params

  /* const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    getGifs(keyword).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])
 */

  const {gifs, loading} = useGetGifs({keyword})
  return (
    <>
      {
        loading
          ? 
            <Loading/>
          :
            <ListOfGifs gifs={gifs}/>
      }
    </>
  )

}
