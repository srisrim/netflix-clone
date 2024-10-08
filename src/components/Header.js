import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase.config';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });

    return () => unsubscribe();
  }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className='flex justify-between items-center right-nav-items px-8'>
          <img className='w-12 h-12 mr-2' alt='userIcon' src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Header