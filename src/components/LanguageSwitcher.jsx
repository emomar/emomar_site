/* eslint-disable react/prop-types */
import { useState } from "react";
// import useLanguageSwitcher from "../../hooks/useLanguageSwitcher";
// import { Language } from "../../context/LanguageSwitcherContext";
import { SiGoogletranslate } from "react-icons/si";
import OutsideClickHandler from "../utils/OutsideClickHandler";
import { getLanguages } from "../utils/languages";
// import OutsideClickHandler from "../../utils/OutsideClickHandler";

const LanguageSwitcher = ({ isScrolled, inMobile }) => {
  //   const { language, toggleLanguage } = useLanguageSwitcher();
  const [selected, setSelected] = useState("fr");
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const handleToggle = (selectedLanguage) => {
    if (selectedLanguage !== selected) {
      setSelected(selectedLanguage);
    }
    setIsSwitcherOpen(false);
  };

  //   useEffect(() => {
  //     toggleLanguage(selected);
  //   }, [selected, toggleLanguage]);

  const languages = getLanguages();

  const handleSwitcherClick = () => {
    setIsSwitcherOpen((prev) => !prev);
  };

  const SwitcherDropDown = () => {
    return (
      <ul
        className={`mt-5 p-0 absolute ${
          inMobile ? "left-1/2 -translate-x-1/2" : "right-0"
        } min-w-[110px] border-r-1 shadow z-20 rounded-md ${
          isScrolled
            ? "text-primary bg-white/90 hover:text-white"
            : "text-white hover:text-primary"
        }`}
      >
        {languages.map((language) => (
          <li
            key={language.code}
            onClick={() => handleToggle(language.code)}
            className="flex px-3 py-2 cursor-pointer hover:bg-accent-1 hover:first:rounded-t-lg hover:last:rounded-b-lg first:border-b"
          >
            <img
              src={language.flag}
              alt={`${language.name} Flag`}
              width="24px"
            />
            <button
              className={`block font-normal bg-transparent ml-2 ${
                inMobile
                  ? "text-primary hover:text-secondary"
                  : isScrolled
                  ? "text-primary hover:text-secondary"
                  : "text-white hover:text-primary"
              }`}
            >
              {language.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`relative ${inMobile ? "pt-5" : ""}`}>
      <div
        className={`flex cursor-pointer items-center justify-center 
        ${
          inMobile ? "text-primary" : isScrolled ? "text-primary" : "text-white"
        }
        `}
      >
        <div
          onClick={handleSwitcherClick}
          className="p-0 text-accent-2 relative"
        >
          <SiGoogletranslate size={20} />
          <span className="absolute bottom-[-15px] right-0 text-xs font-bold">
            {selected}
          </span>
        </div>
      </div>
      {isSwitcherOpen && (
        <OutsideClickHandler onOutsideClick={handleSwitcherClick}>
          <SwitcherDropDown />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default LanguageSwitcher;
