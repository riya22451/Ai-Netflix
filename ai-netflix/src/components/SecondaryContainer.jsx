import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlaying)
     const movies1=useSelector((store)=>store.movies?.popular)
     const movies2=useSelector((store)=>store.movies?.trending)
     console.log(movies2)
  return (
    <div className= 'bg-black'>
        <div className=' mt-0 md:-mt-52 relative z-20 '>
        <MovieList movies={movies} title={"Now Playing"}/>
        <MovieList movies={movies1} title={"Trending"}/>
        <MovieList movies={movies2} title={"Popular Movies"}/>
        <MovieList movies={movies} title={"Upcoming"}/>
        </div>
    </div>
  )
}

export default SecondaryContainer