import React, { useRef } from 'react'
import lang from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, API_OPTIONS } from '../utils/constants';
import { addGptMovie } from '../utils/gptSlice';

const SearchBar = () => {
    const searchText=useRef(null);
    const language=useSelector(store=>store.config.lang)
    const dispatch=useDispatch();
    const genAI = new GoogleGenerativeAI(API_KEY);
    const fetchMovies= async (movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
        const json=await data.json()
        return json.results
    }
    async function runGemini() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Act as a movie Recommendation system and suggest some movie for the query";
  const propmt2="only give me names and that of five movies,comma separated"

  const result = await model.generateContent(prompt+searchText.current.value+propmt2);
 
  const gptMovies=result.response.text().split(",")
  const promiseArray=gptMovies.map(movie=>fetchMovies(movie))
  const tmdbResults=await Promise.all(promiseArray)
  console.log(tmdbResults)
  dispatch(addGptMovie({movieNames:gptMovies,movieResult:tmdbResults}))
  
}

    const handleSearch=async ()=>{
         runGemini();
    }
  return (
    <div className='pt-[45%] md:pt-[10%]  flex justify-center'>
        <form className=' bg-black  grid grid-cols-12 w-full md:w-1/2' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className=' p-4 m-4 bg-white col-span-9' placeholder={lang[language].gptSearchPlaceholder}/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleSearch}>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default SearchBar