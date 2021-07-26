import React, { useEffect, useState } from 'react'
import { getTrending } from '../services/getTrending'
import { Category } from './Category'

export const TrendingSearches = () => {
  
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrending().then(setTrends)
  }, [])
  
  return (
    <Category name="Tendencias" options={trends}/>
  )
}
