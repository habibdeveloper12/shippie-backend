import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from './Loading';
import Sociallogin from "./Sociallogin"
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
const Login = () => {
    const navigate = useNavigate();
  const location = useLocation()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth)

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user2,
    loading2,
    error2,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignin = async (event) => {
    event.preventDefault()
    await signInWithEmailAndPassword(email, password)

  }

  if (error2) {
    toast(error2.message)
  }




  if (sending) {
    toast("check your email")
  }

  if (loading2) {
    return <Loading></Loading>
  }





  let from = location.state?.from?.pathname || "/";


  if (user) {
    navigate(from, { replace: true })
  }
  return (
    <div className='lg:flex justify-center items-center'>
     <div className="lg:w-1/2 xl:max-w-screen-sm mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                  <div className='flex justify-start items-start my-5'>
                  <Sociallogin/>
                  </div>
                    <div className="mt-12">
                        <form onSubmit={handleSignin}>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide text-left">Email Address</div>
                                <input onBlur={(e) => setEmail(e.target.value)} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder=""/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <a onClick={async () => {
                  await sendPasswordResetEmail(email);
                }} className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <input onBlur={(e) => setPassword(e.target.value)} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password"/>
                            </div>
                            <div className="mt-10">
                                <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ?<Link className="cursor-pointer text-indigo-600 hover:text-indigo-800" to={"/signup"}> Sign Up</Link>
                        </div>
                    </div>
                </div>
           
    </div>
    
  );
};

export default Login;