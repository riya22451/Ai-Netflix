import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'
const useTrailer = (movieId) => {
   
  const dispatch=useDispatch();

 
    const getMovieVideo=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const jsonData=await data.json();
       
        const trailerData=jsonData.results.filter((video)=>video.name==="Official Trailer");
        const trailer=trailerData.length==0 ? jsonData.results[0]:trailerData[0];
          dispatch(addTrailer(trailer))
        
      
    }
      
    useEffect(()=>{
     
        getMovieVideo();
      
        
    },[])
}

export default useTrailer