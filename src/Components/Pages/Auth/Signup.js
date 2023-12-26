import React from "react";
import {
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import Loading from "./Loading";

const Signup = () => {
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const fname = data.fname;
    const lname = data.lname;
    const name = fname + " " + lname;
    // await sendEmailVerification();
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: name });
  };
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // const [token] = useToken(user || guser);
  // console.log(token);

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  let errormessage;
  if (error) {
    errormessage = error?.message;
    toast(errormessage);
  }

  return (
    <div>
      <div className=" lg:flex justify-center  items-center   bg-[url('https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg')]">
        <div className="lg:w-1/2 xl:max-w-screen-sm mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            Create New Account
          </h2>
          <div className="mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:flex  gap-4 justify-between items-center max-w-full">
                <div className="mb-4">
                  <div className="text-sm font-bold text-gray-700 tracking-wide text-left">
                    First Name
                  </div>
                  <input
                    {...register("fname", {
                      required: {
                        value: true,
                        message: "First Name is required",
                      },
                    })}
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder=""
                  />
                  <label className="label">
                    {errors.fname?.type === "required" && (
                      <span className="label-text-alt  text-red-500">
                        {errors.fname.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-bold text-gray-700 tracking-wide text-left ">
                    Last Name
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder=""
                    {...register("lname", {
                      required: {
                        value: true,
                        message: "Last Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.lname?.type === "required" && (
                      <span className="label-text-alt  text-red-500">
                        {errors.lname.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-bold text-gray-700 tracking-wide text-left">
                  Email Address
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder=""
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please Enter Valid Email", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt  text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt  text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="Enter your password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: "At least one Capital and One number ",
                    },
                  })}
                />{" "}
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt  text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/* <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Confirm Password
                                    </div>
                                   
                                </div>
                                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Confirm Password"/>
                            </div> */}
              <div className="mt-10">
                <button
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
