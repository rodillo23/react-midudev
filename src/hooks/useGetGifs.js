import { useEffect, useContext, useState } from 'react'
import { getGifs } from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export const useGetGifs = ({keyword}={keyword:null}) => {
  
  const {gifs, setGifs} = useContext(GifsContext)

  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'panda'
    
    getGifs(keywordToUse).then(gifs => {
      localStorage.setItem('lastKeyword', keywordToUse)
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])
  
  return {gifs, loading}
}
