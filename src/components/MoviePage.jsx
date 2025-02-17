import { Pagination } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard'
import { getRequest } from '../service/getRequest'
import { API_KEY } from '../hooks/getEnv'

const MoviePage = ({URL}) => {
    const data = getRequest(`${URL}?language=en-US&page=1&key=${API_KEY}`)
  return (
    <div className='flex flex-col  items-center gap-2 px-10'>
      <div className='flex flex-wrap items-center mt-5 gap-2'>
      {data?.results?.map((item, index)=> <MovieCard key={index} item={item}/>)}
      </div>
      <Pagination count={10} color="primary" />
    </div>
  )
}

export default MoviePage
