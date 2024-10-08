import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate'
import { auth } from '../utils/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_ICON } from '../utils/constant';

const Login = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLogin = () => {
    setLogin(!isLoggedIn);
  }
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const msg = validateData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (isLoggedIn) {
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        navigate('/browse')
      }).catch((error) => {
        const errorMessage = error.message;
      });
    } else {
      // signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: 'Sri', photoURL: USER_ICON
        }).then(() => {
          // Profile updated!
        }).catch((error) => {
          // An error occurred
        });
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }

  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1>{isLoggedIn ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <input ref={email} type="email" id="email" name="email" className="mt-1 mb-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            <input ref={password} type="password" id="password" name="password" className="mt-1 mb-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>

          <p className='text-red-500'>{errorMessage}</p>

          <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
            onClick={handleButtonClick}>
            {isLoggedIn ? 'Sign Up' : 'Sign In'}
          </button>

          <p onClick={toggleLogin}>{isLoggedIn ? "Already registered? - Sign in" : "New user - sign up"}</p>
        </form>
        </div>
      </div>

    </div>
  )
}

export default Login