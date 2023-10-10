import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row items-center justify-center bg-gray-900">        
      </div>
      <div className="bg-gray-800 p-20" >
     

      <Outlet  /></div>
      <Footer></Footer>
    </>
  );
}

export default App;
