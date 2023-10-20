import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [cookies, ,] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState("");
  const { username: routeUsername } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      let userID = window.localStorage.getItem("userID");
      let storedUsername = window.localStorage.getItem("username");
      const targetUsername = routeUsername || storedUsername;

      if (typeof userID !== "undefined" && userID !== null) {
        console.log("?");
      } else {
        navigate("/");
      }

      try {
        const response = await axios.get(
          `http://localhost:3001/auth/profile/${targetUsername}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.access_token}`,
            },
          }
        );

        console.log(response.data);
        if (response.data && response.data.user) {
          setUsername(response.data.user.username);
          setBio(response.data.user?.bio);

          const profilePictureId = response.data.user?.profilePicture;
          if (profilePictureId) {
            const profilePictureUrl = `http://localhost:3001/post/get/${profilePictureId}`;
            setProfilePicture(profilePictureUrl);
          } else {
            const defaultImageResponse = await axios.get(
              "http://localhost:3001/post/get/6480e77f1e54ef642e2278da"
            );
            setProfilePicture(defaultImageResponse.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [cookies.access_token, navigate, routeUsername, username, bio]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = window.localStorage.getItem("userID");
        const response = await axios.get(
          `http://localhost:3001/category/categories/${userID}`
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  let storedUsername = window.localStorage.getItem("username");

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-between lg:w-7/12 w-11/12 sm:pt-20 pt-10 pb-10 sm:px-12">
          <div>
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
          </div>
          <div className="flex flex-col space-y-4 ml-5">
            {username === storedUsername && (
              <Link
                to={`/home/edit-profile/${storedUsername}`}
                className="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded sm:text-lg text-xs text-center"
              >
                Edit profile
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:w-7/12 w-11/12 space-y-3">
          <h5 className="text-xl m-3  pl-10 font-semibold ">{username}</h5>
          <p>{bio}</p>
        </div>
      </div>

      <div className="flex justify-center pt-5">
        <div className="grid grid-cols-3 sm:gap-3 gap-1 lg:w-7/12 w-11/12">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
