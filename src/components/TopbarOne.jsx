import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopbarOne = () => {
  return (
    <div className="bg-secondary relative flex justify-center">
      <div className="container max-w-screen-lg">
        <div className="flex items-center justify-between py-4 px-0">
          <ul className="flex items-center m-0">
            <li className="flex items-center text-sm leading-[1.2em] text-[#b7b7b7] group">
              <FaEnvelope className="transition-all duration-500 group-hover:text-primary" />
              <a
                href="mailto:emomar@emomar.net"
                className="transition-all duration-500 bg-gradient-to-r from-inherit to-inherit group-hover:text-primary"
              >
                emomar@emomar.net
              </a>
            </li>
            <li className="topbar-one__info__item flex items-center text-sm">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps"
                className="transition-all duration-500 hover:text-blue-600"
              >
                27, Dhaka London City, LOT
              </a>
            </li>
          </ul>
          <ul className="flex items-center m-0">
            <li className="text-sm">
              <a
                href="login.html"
                className="transition-all duration-500 hover:text-blue-600"
              >
                Login
              </a>
            </li>
            <li className="text-sm">
              <a
                href="contact.html"
                className="transition-all duration-500 hover:text-blue-600"
              >
                Register
              </a>
            </li>
            <li className="text-sm">
              <a
                href="services.html"
                className="transition-all duration-500 hover:text-blue-600"
              >
                Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopbarOne;
