import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineCar } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineQuiz } from "react-icons/md";
import { BsChatRightDots } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

function Navbar() {
  let profileUrl = window.localStorage.getItem("username");
  const [cookies, , removeCookies] = useCookies(["access_token"]);
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

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
          setProfilePicture(response.data.user?.profilePicture);
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
        <div className="w-2/12 bg-white rounded p-4 shadow-lg max-xl:hidden z-10">
          <div className="flex items-center space-x-4 p-2 mb-5">
            {!profilePicture ? (
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="Profile Image"
              />
            ) : (
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={profilePicture}
                alt="Profile Image"
              />
            )}
            <div>
              <h4 className="font-bold  text-teal-600 text-xl capitalize font-serif hover:font-serif tracking-wide">
                Welcome {username}{" "}
              </h4>
            </div>
          </div>
          <ul className="space-y-2 text-lg">
            <li>
              <Link
                to={`profile/${profileUrl}`}
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"
                    />
                  </svg>
                </span>
                <p>Profile</p>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <AiOutlineCar className="text-black w-7  hover:w-8 h-8" />
                <p className="font-serif text-black ">Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="books"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <BiBook className="text-black w-7  hover:w-8 h-8" />
                <p className="font-serif text-black">Book</p>
              </Link>
            </li>
            <li>
              <Link
                to="category-list"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <MdOutlineQuiz className="text-black w-7  hover:w-8 h-8" />
                <p className="font-serif text-black">Quiz</p>
              </Link>
            </li>
            <li>
              <Link
                to={"chat"}
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <BsChatRightDots className="text-black w-7 hover:w-8 h-8" />
                <p className="font-serif text-black">Chat</p>
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-7 space-y-2  text-lg">
            <button
              onClick={logout}
              className=" font-serif text-black flex items-center space-x-3  p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <RiLogoutBoxLine className="text-black w-7 hover:w-8 h-8" />
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

      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white shadow-lg xl:hidden">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto text-center text-xs">
      
              <Link
                to={`profile/${profileUrl}`}
                className="flex flex-col items-center text-gray-700 p-2 rounded-md font-medium  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                >
                <span className="text-black w-7  hover:w-8 h-8" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"
                    />
                  </svg>
                </span>
                <p className="font-serif text-sm text-black">Profil</p>

              </Link>
          
          <Link
            to=""
            className="flex flex-col items-center text-gray-700 p-2 rounded-md font-medium  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <AiOutlineCar className="text-black w-7  hover:w-8 h-8" />
            <p className="font-serif text-sm text-black">Home</p>
          </Link>

          <Link
            to="books"
            className="flex flex-col items-center text-gray-700 p-2 rounded-md font-medium  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <BiBook className="text-black w-7  hover:w-8 h-8" />
            <p className="font-serif text-sm text-black">Books</p>
          </Link>
          <Link
            to="category-list"
            className="flex flex-col items-center p-2 rounded-md font-medium  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <MdOutlineQuiz className="text-black w-7  hover:w-8 h-8" />

            <p className="font-serif text-sm text-black">Quiz</p>
          </Link>
          <Link
            to={"chat"}
            className="flex flex-col items-center  p-2 rounded-md font-medium  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <BsChatRightDots className="text-black w-7  hover:w-8 h-8" />

            <p className="font-serif text-sm text-black">Chat</p>
          </Link>
          <button
            onClick={logout}
            className="flex flex-col items-center text-black p-2 rounded-md font-serif text-sm  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
          >
            <RiLogoutBoxRLine className="text-black w-7  hover:w-8 h-8" />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
