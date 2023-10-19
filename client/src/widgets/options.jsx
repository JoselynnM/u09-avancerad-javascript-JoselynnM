const Options = (props) => {
  return (
    <div className="pb-15">
      <h1 className="text-center text-lg font-normal">{props.title}</h1>
      <div className="flex flex-wrap justify-center">
        {props.options.map((option) => {
          return (
            <div
              className="p-2 px-3 border border-purple-600 rounded-2xl text-blue-500 text-sm m-3 transition duration-500 cursor-pointer option-item hover:shadow-2xl hover:bg-purple-600 hover:text-white"
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
