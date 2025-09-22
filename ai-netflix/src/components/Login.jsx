import React, { useRef, useState} from 'react'
import Header from './Header'
import { validData } from '../utils/validForm.js';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
      const navigate=useNavigate();
    const [signIn,setSignIn]=useState(true);
    const [Error,setError]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const handle=()=>{
        setSignIn(!signIn)
    }
    const handleClick=()=>{
    const message=validData(email.current.value,password.current.value)
       setError(message)
 if(message!==null){
    return;
 }
       //Sign In /Sign Up
     if(!signIn){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
      
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage)
    // ..
  });

     }
     else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage)
  });
     }
    }
  return (
    <div>
        <Header/>
        <div className='absolute'> 
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg" alt="background"/>
        </div>
        <form className='p-12 bg-black/70 absolute  w-3/12 mt-36 mx-auto left-0 right-0 text-white flex flex-col' onSubmit={(e)=>e.preventDefault()}> 
        <h1 className='font-bold text-3xl my-4 '>{signIn ? "Sign In" : "Sign Up"}</h1>
            
            {signIn ? null : <input type="text" placeholder="Username" className='p-4 my-4 border border-gray-50 w-full'/>}
            <input type="text" ref={email} placeholder="Email Address" className='p-4 my-4 border border-gray-50 w-full'/>
              <input type="password" ref={password} placeholder="Password" className='p-4 my-4  border border-gray-50 w-full'/>
              <p className='text-red-700 font-bold py-2'>{Error}</p>
              <button className='bg-red-600 p-4 m-2 rounded-sm my-4 w-full' onClick={handleClick}>{signIn ? "Sign In" : "Sign Up"}</button>
              <p>{signIn?"New to Netflix ? ":"Already Registered ? "}<span className='font-bold hover:underline cursor-pointer' onClick={handle} >{signIn?"Sign up now.":"Sign In"}</span></p>
        </form>

    </div>
  )
}

export default Login