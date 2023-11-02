import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
    <nav className="flex items-center justify-end mt-5">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className={`focus:outline-none w-10 h-0 flex items-center justify-center text-white hover:text-orange-200 transition-all transform ${
            isOpen ? "rotate-180 -translate-y-2" : "rotate-0 translate-y-0"
          } absolute top-0 right-0 md:right-4 lg:right-6 lg:-translate-y-2`}
        >
          {isOpen ? (
            <IoIosCloseCircleOutline size={26} /> // Ajusta el tamaño del icono aquí (ejemplo: size={24})
          ) : (
            <CgMenuGridR size={26} /> // Ajusta el tamaño del icono aquí (ejemplo: size={24})
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
                className="text-lg block px-4 py-2 hover:bg-orange-300 hover:text-white transition-all"
                onClick={toggleMenu}
              >
                Logga in
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                className="text-lg block px-4 py-2 hover:bg-orange-300 hover:text-white transition-all"
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
