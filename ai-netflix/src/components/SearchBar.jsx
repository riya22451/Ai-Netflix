import React from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
const SearchBar = () => {
    const language=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input type="text" className='p-4 m-4 bg-white col-span-9' placeholder={lang[language].gptSearchPlaceholder}/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default SearchBar