import { useSelector } from "react-redux";

const Final = () => {
  const count = useSelector((state) => state.counter.value);
  // const count = 88

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 text-white text-lg">
      Your name is Sofia aged {count} has been added to student system.You can
      now leave.
    </div>
  );
};
export default Final;
