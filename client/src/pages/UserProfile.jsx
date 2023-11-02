import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [cookies, ,] = useCookies(["access_token"]);
  const [profilePicture, setProfilePicture] = useState("");
  const { username: routeUsername } = useParams();
  const navigate = useNavigate();

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
              "http://localhost:3001/post/get/https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
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

  let storedUsername = window.localStorage.getItem("username");

  return (
    <>
      <div className="flex flex-col items-center sm:pt-10 pt-4">
        <div className="w-24 h-24 relative mx-auto mb-4">
          {!profilePicture ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt="Profile Image"
            />
          ) : (
            <img
              className="w-full h-full object-cover rounded-full"
              src={profilePicture}
              alt="Profile Image"
            />
          )}
        </div>
        <div className="text-center">
          {username === storedUsername && (
            <Link
              to={`/home/edit-profile/${storedUsername}`}
              className="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Edit Profile
            </Link>
          )}
        </div>

        <div className="text-center ">
          <h5 className="text-xl font-semibold mt-3">{username}</h5>
          <p className="text-gray-600">{bio}</p>
        </div>

        <div className="flex flex-col justify-evenly  items-center shadow-xl rounded-lg w-[600px] m-20 gap- p-9 bg-white">
          <h1 className="text-4xl font-bold">Quiz Results</h1>

          <table className="w-full mt-5">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                  Answer
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                  Correct answer
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                  Your answer
                </th>
              </tr>
            </thead>
            {/* <tbody className='divide-y divide-gray-200'>
          {results.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className='px-6 py-4 whitespace-nowrap'>{result.question}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{result.correctAnswer}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{result.yourAnswer}</td>
            </tr>
          ))}
        </tbody> */}
          </table>

          <button
            className="border px-5 py-2 mt-5 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900"
            // onClick={onReset}
          >
            Try again
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
