import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux'
import { removeUser,addUser } from '../utils/userSlice'
const Body = () => {
  const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    
  return (
    <div>
     <RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body