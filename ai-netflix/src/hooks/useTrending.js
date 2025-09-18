import { addPopular, addTrending } from "../utils/moviesSlice.js";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
const useTrending = () => {
 
  const dispatch=useDispatch();
 
  const getTrending=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?&page=1',API_OPTIONS)
    const jsonData=await data.json();
   console.log(jsonData.results)
    dispatch(addTrending(jsonData.results))
  }
    useEffect(()=>{
   getTrending()
  },[])
  
}

export default useTrending