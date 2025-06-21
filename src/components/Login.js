import React from 'react'
import Header from './Header'
import {useState} from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] =useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);

    }
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg"
        alt="logo"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input 
              type="text" 
              placeholder="Full Name" 
              className="p-4 my-4 w-full bg-gray-700" 
              />}
            <input 
            type="text" 
            placeholder="Email Address"
             className="p-4 my-4 w-full bg-gray-700" 
             />
              
              <input 
              type="password" 
              placeholder="Password" 
              className="p-4 my-4 w-full bg-gray-700" 
              />
              <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}</button>
              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
        </form>
        
        
    </div>
  )
}

export default Login
