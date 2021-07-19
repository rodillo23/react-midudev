import React from 'react'
import { ListOfGifs } from '../components/ListOfGifs'

export const SearchResults = ({params}) => {
  console.log(params.keyword);
  return (
    <>
      <ListOfGifs keyword={params.keyword}/>
    </>
  )

}
