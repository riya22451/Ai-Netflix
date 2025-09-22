import React from 'react'
import {  signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeUser,addUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { changeLanguage } from '../utils/configSlice.js';
const Header = () => {
   const dispatch=useDispatch();
  const Navigate=useNavigate();
  const view=useSelector(store=>store.gpt.showGptSearch)
  const user=useSelector((store)=>store.user)
  
  const handleSignOut=()=>{
   signOut(auth).then(() => {
   
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  Navigate('/Error')
});

  }
  useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email}=user
     dispatch(addUser({
      uid:uid,
      email:email
     }))
   Navigate('/browse')
    // ...
  } else {
    dispatch(removeUser())
    Navigate('/')
  }
});
return ()=>unsubscribe();
    },[])
    const handleGpt=()=>{
      dispatch(toggleGptSearchView())
    }
    const handleLang=(e)=>{
       dispatch(changeLanguage(e.target.value))
    }
  return (
   <div className='absolute w-screen py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row justify-between px-8'>
    <img className='w-52 mx-auto md:mx-0' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix"/>
    {user && 
    <div className='flex items-center '>
      {view? <select className='text-white h-10 w-32 text-center rounded-sm m-2 border border-white' onChange={handleLang}>
        <option className="bg-black text-white" value="en">English</option>
         <option className="bg-black text-white" value="hindi">Hindi</option>
          <option className="bg-black text-white" value="spanish">Spanish</option>
      </select> : null}
      
      <button className='bg-red-600 text-white h-12 w-24 mx-2  my-4 rounded-xl font-bold' onClick={handleGpt}>{view ? "Home" :"AI Search"}</button>
      <button className='bg-red-600 text-white h-12 w-24  my-4 rounded-xl font-bold' onClick={handleSignOut}>Sign Out</button>
      </div>}
   </div>
  )
}

export default Header