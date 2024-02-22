/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import { Logo4 } from "../assets";
import { useNavigate } from "react-router-dom";

const NavbarMobile = ({ links, activeLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden z-50">
      <button onClick={toggleMenu} className="fixed top-6 right-6 z-50">
        {isOpen ? (
          <HiX className="h-6 w-6 text-primary" />
        ) : (
          <HiMenu className="h-6 w-6 text-primary" />
        )}
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full h-full bg-black/20 transition-all duration-500 ease-in-out z-40`}
        onClick={toggleMenu}
      >
        <div
          className={`w-full sm:w-2/3 ml-auto bg-white h-full flex transition-all duration-1000 ease-out relative ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Logo */}
          {isOpen && (
            <div className="fixed top-4 left-4 z-50">
              <img src={Logo4} alt="Logo" className={`h-10 rounded-sm`} />
            </div>
          )}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <ul className="flex flex-col items-center space-y-4">
              {links.map((link) => (
                <li className="relative" key={link.id}>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    duration={500}
                    to={link.id}
                    onClick={() => {
                      if (location.pathname !== "/") {
                        navigate("/", { state: { scrollTarget: link.path } });
                      }
                      toggleMenu();
                    }}
                    className={`hover:cursor-pointer py-3 before:absolute before:content-[''] before:top-0 before:right-0 before:h-[3px] before:w-0 hover:before:w-full before:bg-primary after:bg-primary after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full before:transition-all before:duration-700 after:transition-all after:duration-700 text-primary ${
                      activeLink === link.id ? "before:w-full after:w-full" : ""
                    }`}
                  >
                    {link.text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <LanguageSwitcher inMobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
