// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture.jsx'
import Final from './Final.jsx';
import Overview from '../widgets/overview.jsx';
import CustomMessage from './customMesage.jsx';
import Age from './age.jsx'

const botName = "Despacito Service";

const config = {

  initialMessages: [createChatBotMessage(`Hello, welcome, how can I help you?`,
  {
    withAvatar: true,
    delay: 400,
    widget: "overview"
  }),
],
  botName: botName,
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
    age: (props) => <Age {...props} />,
    final: (props) => <Final {...props} />,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'final',
      widgetFunc: (props) => <Final {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#53c9c4',
    },
    chatButton: {
      backgroundColor: '#b86dc9',
    },
  },
};

export default config;