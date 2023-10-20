import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [cookies] = useCookies(["access_token"]);
  const userID = window.localStorage.getItem("userID");
  const navigate = useNavigate();
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleUpdateProfile = () => {
    axios.put(
      `http://localhost:3001/auth/profile/${userID}`,
      { bio, username, password, profilePicture },
      {
        headers: {
          Authorization: `Bearer ${cookies.access_token}`,
        },
      }
    );
    console
      .log("hello")
      .then((response) => {
        window.localStorage.setItem("username", username);
        console.log("username " + response.data.username);

        console.log(response.data.message);
        setUsername(username);
        setBio(bio);
        setPassword("");
        navigate(`/home/profile/${username}`);
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center">
            EDIT PROFILE
          </h1>
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
          <div>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
            />
          </div>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
            />
          </div>
          <div>
            <input
              type="text"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
            />
          </div>
          <div>
            <textarea
              type="text"
              id="bio"
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-gray-50 border-2 border-gray-900 text-gray-900 sm:text-sm rounded-3xl block w-full p-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
