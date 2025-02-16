import React from 'react'
import { getRequest } from '../service/getRequest'
import { API_KEY } from '../hooks/getEnv'

const NowPlaying = () => {
  const nowPlaying = getRequest(`/now_playing?language=en-US&page=1&key=${API_KEY}`)
  return (
    <div>
      {nowPlaying?.results?.map(item => (
        <h2 key={item.id}>{item.original_title}</h2>
      ))}
    </div>
  )
}

export default NowPlaying
