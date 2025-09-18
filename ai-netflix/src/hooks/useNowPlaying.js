import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addNowPlaying } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'
import { useSelector } from 'react-redux'
const useNowPlaying = () => {
     const selector=useSelector((store)=>store.movies?.trailer)
  const dispatch=useDispatch();
  useEffect(()=>{
  getNowPlaying()
  },[])
  const getNowPlaying=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
    const jsonData=await data.json();
   
    dispatch(addNowPlaying(jsonData.results))
  }

}

export default useNowPlaying