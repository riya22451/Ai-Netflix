import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieSuggestions = () => {
    const gpt=useSelector(store=>store.gpt)
    const {movieNames,gptMovies}=gpt
    if(!movieNames){
        return null;
    }

  return (
    <div className='p-4 m-4 bg-black/90 text-white'>

   {movieNames.map((movie,index)=> <MovieList key={movie} title={movie} movies={gptMovies[index]}/>)}
    </div>
  )
}

export default MovieSuggestions