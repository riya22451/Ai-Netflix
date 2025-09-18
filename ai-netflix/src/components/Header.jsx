import React from 'react'
import {  signOut } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeUser,addUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
const Header = () => {
   const dispatch=useDispatch();
  const Navigate=useNavigate();
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
  return (
   <div className='absolute w-screen py-2 bg-gradient-to-b from-black z-30 flex justify-between px-8'>
    <img className='w-52' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix"/>
    {user && <button className='bg-red-600 text-white h-12 w-24  my-4 rounded-xl font-bold' onClick={handleSignOut}>Sign Out</button>}
   </div>
  )
}

export default Header