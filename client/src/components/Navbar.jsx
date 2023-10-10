import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import {AiOutlineCar} from "react-icons/ai";
import {BiBook} from "react-icons/bi"
import {MdOutlineQuiz} from "react-icons/md"
import {AiFillWechat} from "react-icons/ai"
import {RiLogoutBoxLine} from "react-icons/ri"
import {RiLogoutBoxRLine} from "react-icons/ri"


function Navbar() {
  let profileUrl = window.localStorage.getItem("username");
  const [cookies, , removeCookies] = useCookies(["access_token"]);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      let userID = window.localStorage.getItem("userID");
      let username = window.localStorage.getItem("username");

      if (typeof userID !== "undefined" && userID !== null) {
        console.log("?");
      } else {
        navigate("/");
      }

      try {
        const response = await axios.get(
          `http://localhost:3001/auth/profile/${username}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.access_token}`,
            },
          }
        );

        console.log(response.data);
        if (
          response.data &&
          response.data.user &&
          response.data.user.username !== undefined
        ) {
          setUsername(response.data.user.username);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [cookies.access_token, navigate]);

  const logout = () => {
    removeCookies("access_token");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");

    navigate("/");
  };


  return (
    <>
      
{/* Navbar to Desktop  */}
     <div className="xl:flex xl:flex-wrap bg-slate-50 xl:w-full h-screen">
        <div className="w-2/12 bg-[#0e0e0e] rounded p-4 shadow-lg max-xl:hidden z-10">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <div>
              <h4 className="font-bold text-xl text-white capitalize font-serif tracking-wide">
                Welcome{" "}
                {username}{" "}
              </h4>
            </div>
          </div>
          <ul className="space-y-2 text-lg">
    
            <li>
              <Link
                to=""
                className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
              >
                <AiOutlineCar  className="text-white w-6 h-6"/>
                <p className="font-serif text-white">Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="search"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
              >
                <BiBook className="text-white w-6 h-6"/>
                <p className="font-serif text-white">Book</p>
              </Link>
            </li>
            <li>
              <Link
                to="home-page"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
              >
                <MdOutlineQuiz className="text-white w-6 h-6" />
                <p className="font-serif text-white">Traffic signal</p>
              </Link>
            </li>
           <li>
              <Link
                to={`profile/${profileUrl}`}
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline">
                <AiFillWechat className="text-white w-7 h-7"/>
                <p className="font-serif text-white">Chat</p>
              </Link>
            </li>
            </ul>

          <div className="absolute bottom-5 space-y-2 text-lg">
            <button
              onClick={logout}
              className=" font-serif text-white flex items-center space-x-3  p-2 rounded-md font-medium hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
            >
             <RiLogoutBoxLine className="text-white w-6 h-6" />

              Logout
            </button>
          </div>
        </div>

        <div className="xl:w-9/12 xl:h-screen xl:overflow-y-auto pb-20 bg-slate-50">
          <div className="bg-slate-50">
            <Outlet />
          </div>
        </div>
      </div> 

      {/* Navbar to Phone */}

      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#0e0e0e] shadow-lg xl:hidden">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto text-center text-xs">
          <Link
            to=""
            className="flex flex-col items-center text-gray-700 p-2 rounded-md font-medium  hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
          >
          <AiOutlineCar  className="text-white w-6 h-6"/>
            <p className="font-serif text-sm text-white" >Home</p>
             </Link>
             
             <Link
            to="search"
            className="flex flex-col items-center text-gray-700 p-2 rounded-md font-medium  hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
          >
           <BiBook className="text-white w-6 h-6"/>
            <p  className="font-serif text-sm text-white" >Books</p>
          </Link>
          <Link
            to="home-page"
            className="flex flex-col items-center p-2 rounded-md font-medium  hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
          >
          <MdOutlineQuiz className="text-white w-6 h-6" />

            <p className="font-serif text-sm text-white">Traffic signal</p>
          </Link>
          <Link
            to={`profile/${profileUrl}`}
            className="flex flex-col items-center  p-2 rounded-md font-medium  hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
          >
          <AiFillWechat className="text-white w-7 h-7"/>

            <p className="font-serif text-sm text-white">Chat</p>
          </Link>
          <button
            onClick={logout}
            className="flex flex-col items-center text-white p-2 rounded-md font-serif text-sm  hover:bg-blue-200 focus:bg-blue-200 focus:shadow-outline"
          >
         <RiLogoutBoxRLine  className="text-white w-7 h-7"/>

            Log Out
          </button>

          
        </div>
      </div>
    </>
  );
}

export default Navbar;
