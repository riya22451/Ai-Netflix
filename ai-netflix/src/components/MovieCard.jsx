import React from 'react'
import { IMAGE_BASE_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className=' w-36 md:w-52 pr-4'>
        <img  src={IMAGE_BASE_URL+posterPath} alt="movie"/>
    </div>
  )
}

export default MovieCard