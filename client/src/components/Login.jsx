import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ , setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const Notify = () => {
    toast("Wrong email or password.");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userID", response.data.userID);

        const userID = window.localStorage.getItem('userID');
        const username = response.data.user.username;

        window.localStorage.setItem("username", username);
        console.log("username " + response.data.username);

        if (userID !== 'undefined') {
          navigate('/home');
          
        } else {
          navigate("/");
          Notify();
        }
      } else {
        console.log("Login failed");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  

  return (
   
  <div className="min-h-scren flex flex-col p-40 mx-20 -mt-5  ">
    
    <div className="relative w-[480px] h-[520px] bg-white rounded-lg overflow-hidden">
      <div className="absolute w-[480px] h-[520px] bg-gradient-to-r from-orange-500 via-orange-400 
      to-transparent -top-[50%] -left-[50%]
      animate-spin-slow origin-bottom-right"></div>
         <div className="absolute w-[480px] h-[520px] bg-gradient-to-r from-orange-500 via-orange-400 
      to-transparent -top-[50%] -left-[50%]
      animate-spin-delay origin-bottom-right"></div>
      <div className="absolute inset-1 bg-gray-100 rounded-lg z-10 p-5">
        <form onSubmit={onSubmit}>
        <h2 className="text-xl font-semibold font-serif  text-black text-center">
          Sign in
        </h2> 
          <div className="relative flex flex-col mt-10">
            <input
              type="email"
              name="email"
              id="email"
              autoFocus 
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative z-10 border-0 border-b-2 border-slate-500
              h-10 bg-transparent text-black 
              outline-none px-2 peer" 
            />
            <i className="bg-orange-100 rounded w-full bottom-0 
            left-0 absolute h-10 -z-10 duration-200 origin-bottom 
            ransform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]" />
            <label
              htmlFor="email"
              className="peer-focus:font-medium font-serif  absolute text-sm
              duration-200 transform -translate-y-8 scale-75
              top-3 left-0 -z-10 origin-[0]
              peer-focus:left-0 
              peer-focus:text-slate-500 text-gr-200
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-placeholder-shown:text-slate-700
              peer-focus:scale-75
              peer-focus:-translate-y-8"
            >
              Enter Email
            </label>
          </div>

          <div className="relative flex flex-col mt-20">
          <input
              type="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative z-10 border-0 border-b-2 border-slate-500
              h-10 bg-transparent text-black
              outline-none px-2 peer"            />
          <i className="bg-orange-100 rounded w-full bottom-0 
            left-0 absolute h-10 -z-10 duration-200 origin-bottom 
            ransform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]" />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm
              duration-200 transform -translate-y-8 scale-75
              top-3 left-0 -z-10 origin-[0]
              peer-focus:left-0  font-serif 
              peer-focus:text-slate-500 text-gr-200
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-placeholder-shown:text-slate-700
              peer-focus:scale-75
              peer-focus:-translate-y-8"
            >
              Enter Password
            </label>
          </div>
          
          <button
            type="submit"
            className="py-3 mt-20 text-black bg-slate-300
            w-full rounded hover:bg-orange-300  hover:text-white
            hover-scale-105 duration-300 font-serif "
          >
            Login
          </button>
          <ToastContainer />
        </form>
        </div>
    </div>
  </div>

  );
};

export default Login;
