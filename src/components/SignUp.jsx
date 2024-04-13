import React, { useState } from "react";
import google from "../assets/google2.png";
import fb from "../assets/fb2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signIn, setSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <div className="flex flex-col py-8 mx-auto w-full ">
        <div className="px-44"></div>
        <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 mb-10">
          {!signIn ? "Create an account" : "Welcome back"}
        </h1>
        <form className="space-y-4 md:space-y-6 " action="#">
          {!signIn && (
            <>
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-100  text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="First Name"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="bg-gray-100  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Last Name"
                  required=""
                />
              </div>
            </>
          )}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-gray-100  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-100  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required=""
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
          <div className="flex items-start">
          {!signIn ? (<>
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4  rounded bg-gray-100 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700"
                required=""
              />
            </div>
              <div className="ml-2 mt-0.5 text-xs mb-20">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  By proceeding, I agree to all{" "}
                  <a
                    className="font-medium text-primary-300 underline"
                    href="#"
                  >
                    T&C
                  </a>{" "}
                  and{" "}
                  <a className="font-medium text-primary-300 underline ">
                    privacy policy
                  </a>
                </label>
              </div>
              </>
            ) : (
              <div className="underline text-xs text-gray-500 -mt-2">Forgot your password?</div>
            )}
          </div>
          {signIn && (
              <div className="py-24"></div>
          )}
          <Link to='/goals'>
          <button
            type="submit"
            className="w-full text-white bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  "
          >
           {!signIn ? "Create an Account" : "Sign In"} 
          </button>
          </Link>
          <div className="flex items-center justify-center ">
            <div className="border-t border-gray-300 flex-grow mr-4"></div>
            <p className="text-gray-600 font-medium mb-1">Or</p>
            <div className="border-t border-gray-300 flex-grow ml-4"></div>
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="border border-gray-300 rounded-md p-1 mr-2 w-10">
              <img src={google} alt="Google" />
            </div>
            <div className="border border-gray-300 rounded-lg p-1 ml-2 w-10">
              <img src={fb} alt="Facebook" />
            </div>
          </div>
          {!signIn ? (<p className="text-xs text-center ">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500 underline"
              onClick={() => setSignIn(true)}
            >
              Login here
            </a>
          </p>):(
          <p className="text-xs text-center underline">
          Don’t have an account yet? {" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500 underline"
              onClick={() => setSignIn(false)}
            >Create an account
            </a>
          </p>)}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
