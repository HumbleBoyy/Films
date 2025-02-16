import React from 'react'
import { getRequest } from '../service/getRequest'
import { API_KEY } from '../hooks/getEnv'

const NowPlaying = () => {
  const nowPlaying = getRequest(`/now_playing?language=en-US&page=1&key=${API_KEY}`)
  console.log(nowPlaying)
  return (
    <div>
      NowPlaying
    </div>
  )
}

export default NowPlaying
