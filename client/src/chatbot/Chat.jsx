import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import MessageParser from "./messageParsers.jsx";
import ActionProvider from "./actionProvider.jsx";
import { useSelector } from "react-redux";
import Final from "./Final.jsx";
import config from "./config.jsx";
import "react-chatbot-kit/build/main.css";

function UserProfile() {
  const page3 = useSelector((state) => state.counter.page3);

  const [enroll, setEnroll] = useState(false);

  function handleChange() {
    setEnroll(true);
  }
  return (
    <>
      {enroll ? (
        page3 ? (
          <Final />
        ) : (
          <div className="text-center bg-gray-700 min-h-screen  flex justify-center items-center">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center h-screen  bg-[url('/images/roadbg.webp')] text-white">
          <h2 className="mb-8 text-2xl font-bold"> Questions?</h2>
          <button
            className="py-3 px-5 border-separate rounded-2xl bg-white text-black"
            onClick={handleChange}
          >
            Chat with me!
          </button>
        </div>
      )}
    </>
  );
}

export default UserProfile;
