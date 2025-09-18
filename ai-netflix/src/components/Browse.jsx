import React, {  useEffect } from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying.js'
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';
import usePopular from '../hooks/usePopular.js';
import useTrending from '../hooks/useTrending.js';

const Browse = () => {
 useNowPlaying();
 console.log("popular")
  usePopular();
  console.log('trending');
  useTrending
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse