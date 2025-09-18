import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/moviesSlice';
import useTrailer from '../hooks/useTrailer';
const VideoBackground = ({movieId}) => {
   
useTrailer(movieId);
    const selector=useSelector((store)=>store.movies?.trailer);
  return (
    <div>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+selector?.key+"?&autoplay=1&mute=1&loop=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground