import Options from "./options.jsx";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Got it",
      handler: props.actionProvider.handleGot,
      id: 1,
    },
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
