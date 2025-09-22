import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './MovieSuggestions'

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'> 
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg" alt="background"/>
        </div>
       <SearchBar/>
       <MovieSuggestions/>
    </div>
  )
}

export default GptSearch