import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Logo4 } from "../assets";
import { Link as ScrollLink } from "react-scroll";
import NavbarMobile from "./NavbarMobile";
import links from "../utils/navigation";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const location = useLocation();

  // Attach scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: 0,
        presentation: document.getElementById("presentation")?.offsetTop || 0,
        "services-solutions":
          document.getElementById("services-solutions")?.offsetTop || 0,
        partnerships: document.getElementById("partnerships")?.offsetTop || 0,
        team: document.getElementById("team")?.offsetTop || 0,
        contact: document.getElementById("contact")?.offsetTop || 0,
      };

      // Navbar
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrolling event
      const scrollPositionBody = window.scrollY + windowHeight / 2.5;

      let active = "home";
      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (scrollPositionBody > offset) {
          active = section;
        }
      }

      setActiveLink(active);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    const { state } = location;

    if (state && state?.scrollTarget) {
      const element = document.getElementById(state?.scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location, windowHeight]);

  return (
    <>
      <nav
        data-aos="fade-up"
        className={`fixed top-0 left-0 w-full flex justify-between gap-6 items-center py-4 px-6 z-50 transition-all text-primary duration-300 ${
          isScrolled ? "bg-white/90 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo4}
            alt="Logo"
            className={`h-10 rounded-sm cursor-pointer ${
              !isScrolled ? "bg-secondary/10" : ""
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveLink("home");
            }}
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center justify-center space-x-6 text-xs md:text-sm lg:text-base flex-wrap gap-4">
          {links.map((link) => (
            <li className="relative" key={link.id}>
              <ScrollLink
                smooth
                spy={true}
                duration={500}
                to={link.id}
                className={`hover:cursor-pointer py-2 before:absolute before:content-[''] before:top-0 before:right-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-primary after:bg-primary after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full before:transition-all before:duration-700 after:transition-all after:duration-700
                
                ${
                  isScrolled || activeLink === link.id
                    ? "text-primary"
                    : "text-white hover:text-primary"
                } ${activeLink === link.id ? "before:w-full after:w-full" : ""}
                `}
              >
                {link.text}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="hidden lg:flex">
          <LanguageSwitcher isScrolled={isScrolled} />
        </div>
      </nav>
      {/* Mobile Navbar */}
      <NavbarMobile links={links} activeLink={activeLink} />
    </>
  );
};

export default Navbar;
