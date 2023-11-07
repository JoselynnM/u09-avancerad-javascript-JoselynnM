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
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    } else {
      setProfilePicture("");
    }
  };

  const handleUpdateProfile = () => {
    axios
      .put(
        `http://localhost:3001/auth/profile/${userID}`,
        { bio, username, password, profilePicture },
        {
          headers: {
            Authorization: `Bearer ${cookies.access_token}`,
          },
        }
      )
      .then((response) => {
        console.log("Profile updated successfully");
        window.localStorage.setItem("username", username);
        console.log("username " + response.data.username);

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
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg text-gray-700 max-w-md w-full">
      <h1 className="text-2xl font-bold text-center text-teal-600 mb-6">
        Edit Your Profile
      </h1>
      <div className="flex justify-center">
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
      <div className="mb-4">
        <label htmlFor="profilePicture" className="block text-sm text-gray-500">
          Upload Profile Picture
        </label>
        <input
          type="file"
          id="profilePicture"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="bg-gray-100 border-2 border-gray-400 text-gray-700 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm text-gray-500">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 border-2 border-gray-400 text-gray-700 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm text-gray-500">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 border-2 border-gray-400 text-gray-700 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-sm text-gray-500">
          Bio
        </label>
        <textarea
          id="bio"
          placeholder="Tell us about yourself"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="bg-gray-100 border-2 border-gray-400 text-gray-700 p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="w-full bg-teal-600 text-white text-sm font-medium py-2 rounded hover:bg-teal-700"
      >
        SAVE
      </button>
    </div>
  </div>
  
  );
};

export default EditProfile;
