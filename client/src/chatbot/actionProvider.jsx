import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import AgeDropdown from './AgeDropdown';
import { useDispatch } from 'react-redux';
import { isPage } from '../redux/counterSlice.jsx';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const dispatch = useDispatch()

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGot = () => {
    const message = createClientMessage('Got it!');
    const botMessage = createChatBotMessage('Enter your Name and age ',);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, botMessage],
    }));
  };
  const showAge = (age) => {
    const botMessage = createClientMessage(age);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, age],
    }));
    handleNumber()
  };
  const handleName = () => {
    const botMessage = createChatBotMessage(<AgeDropdown showAge={showAge}/>,);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNumber = () => {
    const botMessage = createChatBotMessage('Thank you. In a 5 seconds, we will help you');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    setTimeout(() => {
      handleFinal()
    }, 3000);
  };

  const handleFinal = () => {
    dispatch(isPage(true))
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a cars  picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleName,
            handleNumber,
            handleGot,
            showAge,
          },
        });
      })}
    </div>
  )
};

export default ActionProvider;