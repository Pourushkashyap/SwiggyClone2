
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { validdata } from '../utils/validate'; 
import { auth } from '../utils/firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
function Signin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [message,setmessage] = useState(null);
   const name = useRef(null);
   const email = useRef(null);
   const password = useRef(null);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const hanldebutton = (e) => {
    e.preventDefault();
    e.preventDefault();
   
    let message ="";
    if(!isSignUp){
      if(email.current && password.current ){
      message = validdata(email.current.value,password.current.value);
      if(!message){
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(error.message);
  });
      }
      else{
        message(message);
      }
    }
    
  }
  else{
    if(email.current && password.current && name.current.value ){
      message = validdata(email.current.value,password.current.value,name.current.value)
      if(!message){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(error.message);
    // ..
  });
      }
    }
  }

    setmessage(message)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        <form className="space-y-6">
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
              ref={name}
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            ref={email}
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            ref={password}
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <p className='py-2 text-red-500 text-lg font-bold'>{message}</p>
          <button
          onClick={hanldebutton}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="font-medium text-orange-600 hover:text-orange-500"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signin;
