import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from './Loading';


const Sociallogin = () => {
  const [user] = useAuthState(auth)


  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, usergoogle, loading, error] = useSignInWithGoogle(auth);



  if (user) {


    navigate(from, { replace: true })
  }
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <button onClick={() => signInWithGoogle()}  className="px-4 md:px-12 py-4 bg-white border border-gray-1 rounded-xl shadow-md hover:bg-gray-1 focus:ring-2 focus:ring-gray-200 text-lg"><span className="inline-block before:content-google-icon before:mr-4 before:align-middle font-medium text-subheading-gray hover:text-black flex items-center gap-3"> <img src="google.png" className='w-9' alt="" /> Sign in with Google</span></button>
    </div>
  );
};

export default Sociallogin;