import React, {  useEffect } from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying.js'
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';

const Browse = () => {
 useNowPlaying();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse