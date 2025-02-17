import { Pagination } from '@mui/material'
import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { getRequest } from '../service/getRequest'
import { API_KEY } from '../hooks/getEnv'

const MoviePage = ({URL}) => {
  const [page, setPage] = useState(1)
    const data = getRequest(`${URL}?language=en-US&page=${page}&key=${API_KEY}`, page)
  return (
    <div className='flex  flex-col  items-center gap-2'>
      <div className='flex flex-wrap justify-center mt-5 gap-2'>
      {data?.results?.map((item, index)=> <MovieCard key={index} item={item}/>)}
      </div>
      <Pagination onChange={(a,b) => setPage(b)} count={data?.total_pages} color="primary" />
    </div>
  )
}

export default MoviePage
