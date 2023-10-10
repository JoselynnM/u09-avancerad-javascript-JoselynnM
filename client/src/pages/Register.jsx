import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const Notify = () => {
    toast("Registered Successfully!");
  };

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        email: emailRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      Notify();
      emailRef.current.value = "";
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.log(error);
      console.log("Could not register");
      toast("Email or username already used, choose another one!");
    }
  };

  return (
    <div className="min-h-scren flex flex-col mx-10 mt-8">

    <div className="relative w-[480px] h-[520px] bg-gray-600 rounded-lg overflow-hidden">
    <div className="absolute w-[480px] h-[520px] bg-gradient-to-r from-blue-500 via-blue-900 
      to-transparent -top-[50%] -left-[50%]
      animate-spin-slow origin-bottom-right"></div>         
        <div className="absolute w-[480px] h-[520px] bg-gradient-to-r from-blue-500 via-blue-900 
      to-transparent -top-[50%] -left-[50%]
      animate-spin-delay origin-bottom-right"></div>
        <div className="absolute inset-1 bg-gray-100 rounded-lg z-10 p-5">
            <form onSubmit={onRegister}>
            <h1 className="text-xl font-semibold text-black text-center">
              Register
            </h1>
            <div className="relative flex flex-col mt-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  className="relative z-10 border-0 border-b-2 border-black 
                  h-10 bg-transparent text-black
                  outline-none px-2 peer"                  
                  placeholder=""
                />
                 <i className="bg-blue-200 rounded w-full bottom-0 
            left-0 absolute h-10 -z-10 duration-200 origin-bottom 
            ransform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]" />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm
              duration-200 transform -translate-y-8 scale-75
              top-3 left-0 -z-10 origin-[0]
              peer-focus:left-0 
              peer-focus:text-blue-200 text-blue-200
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-placeholder-shown:text-black
              peer-focus:scale-75
              peer-focus:-translate-y-8"
            >
             Email
            </label>
              </div>

              <div className="relative flex flex-col mt-10">
                <input
                  type="text"
                  id="username"
                  ref={usernameRef}
                  className="relative z-10 border-0 border-b-2 border-black 
                  h-10 bg-transparent text-black
                  outline-none px-2 peer"                   
                  placeholder=""
                />
                 <i className="bg-blue-200 rounded w-full bottom-0 
            left-0 absolute h-10 -z-10 duration-200 origin-bottom 
            ransform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]" />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm
              duration-200 transform -translate-y-8 scale-75
              top-3 left-0 -z-10 origin-[0]
              peer-focus:left-0 
              peer-focus:text-blue-200 text-blue-200
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-placeholder-shown:text-black
              peer-focus:scale-75
              peer-focus:-translate-y-8"
            >
              Username
            </label>
            </div>

              <div className="relative flex flex-col mt-10">
                <input
                  type="password"
                  id="password"
                  ref={passwordRef}
                  className="relative z-10 border-0 border-b-2 border-black 
                  h-10 bg-transparent text-black
                  outline-none px-2 peer"                 
                     placeholder=""
                />
           <i className="bg-blue-200 rounded w-full bottom-0 
            left-0 absolute h-10 -z-10 duration-200 origin-bottom 
            ransform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]" />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm
              duration-200 transform -translate-y-8 scale-75
              top-3 left-0 -z-10 origin-[0]
              peer-focus:left-0 
              peer-focus:text-blue-200 text-blue-200
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-placeholder-shown:text-black
              peer-focus:scale-75
              peer-focus:-translate-y-8"
            >
              Password
            </label>
                
        </div>

              <button
              type="submit"
              className="py-3 mt-20 text-black bg-blue-400
              w-full rounded hover:bg-blue-900
              hover-scale-105 duration-300"
              >
                Create an account
              </button>
              <p className="text-sm font-light  dark:text-gray-400 mt-5">
                Already have an account? <br />
                <Link
                  to={"/login"}
                  className="font-medium text-red-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
     
  );
};

export default Register;
