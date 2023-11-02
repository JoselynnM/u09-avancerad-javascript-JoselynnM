import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
      <div className="bg-[url('/images/roadsss.jpg')] p-20 w-full h-200 md:h-150 lg:h-144 bg-cover bg-center">
        <Nav></Nav>

        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
