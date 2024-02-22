import { Logo4 } from "../assets";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Contact } from "../components";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="overflow-hidden" id="footer">
      <Contact />
      <footer
        data-aos="zoom-out-down"
        data-oas-duration="600"
        data-aos-delay="200"
        className="flex flex-col justify-center items-center p-10 bg-[#23153C] space-y-10 overflow-hidden"
      >
        <aside className="grid place-items-center">
          <img
            src={Logo4}
            alt="Logo Emomar"
            className="h-6 md:h-12 w-auto flex items-center justify-center"
          />
          <p className="font-bold text-primary text-base md:text-lg text-center">
            Fournissant des services fiables depuis 2015.
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="/">
              <FaXTwitter
                size={24}
                className="text-primary hover:text-secondary transition-all duration-500"
              />
            </a>
            <a href="/">
              <FaFacebookF
                size={24}
                className="text-primary hover:text-secondary transition-all duration-500"
              />
            </a>
            <a href="/">
              <FaInstagramSquare
                size={24}
                className="text-primary hover:text-secondary transition-all duration-500"
              />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-primary">
            Copyright © 2024 - Tous droits réservés.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
