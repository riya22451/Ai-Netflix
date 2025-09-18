import { addPopular } from "../utils/moviesSlice.js";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
const usePopular = () => {
 
  const dispatch=useDispatch();
 
  const getPopular=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1',API_OPTIONS)
    const jsonData=await data.json();
   console.log(jsonData.results)
    dispatch(addPopular(jsonData.results))
  }
    useEffect(()=>{
   getPopular()
  },[])
  
}

export default usePopular