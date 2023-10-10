import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkHover = (index, isHovered) => {
    const spanElements = document.getElementsByClassName("nav-span");
    if (isHovered) {
      spanElements[index].classList.add(
        "w-5",
        "transition-all",
        "duration-300"
      );
    } else {
      spanElements[index].classList.remove("w-5");
    }
  };

  return (
<nav className="flex items-center justify-end mt-10 mr-10">
  <div className="relative">
    <button
      onClick={toggleMenu}
      className={`focus:outline-none w-10 h-10 flex items-center justify-center text-blue-500 hover:text-white transition-all transform ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
    <div
      className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all ${
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
    >
      <ul className="py-2">
        <li>
          <Link
            to={"/"}
            className="text-lg block px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
            onClick={toggleMenu}
          >
            Logga in
          </Link>
        </li>
        <li>
          <Link
            to={"/register"}
            className="text-lg block px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
            onClick={toggleMenu}
          >
            Bli medlem
          </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>






  

  );
};

export default Nav;
