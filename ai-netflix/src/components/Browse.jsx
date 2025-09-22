import React, {  useEffect } from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying.js'
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';
import usePopular from '../hooks/usePopular.js';
import useTrending from '../hooks/useTrending.js';
import GptSearch from './GptSearch.jsx';
import { useSelector } from 'react-redux';


const Browse = () => {
  const selector=useSelector(store=>store.gpt.showGptSearch)
 useNowPlaying();
 console.log("popular")
  usePopular();
  console.log('trending');
  useTrending
  return (
    <div>
      <Header/>
    {selector? <GptSearch/> :
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    }
      
       
      
    </div>
  )
}

export default Browse