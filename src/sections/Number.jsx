import { FaUsers, FaBriefcase, FaUsersCog } from "react-icons/fa";
import { NumberPart } from "../components";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Number = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn && (
        <div className="w-full py-10 bg-transparent">
          <div className="text-primary max-w-screen-lg mx-auto px-5">
            <h1
              data-aos="zoom-in-down"
              data-oas-duration="800"
              className="relative text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6 text-center text-primary before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-[4px] before:w-[50px] before:bg-primary pb-3"
            >
              Emomar en Nombre
            </h1>
            <div
              data-aos="zoom-in-down"
              data-oas-duration="800"
              data-aos-delay="600"
              className="justify-center bg-black py-10 sm:py-16 md:py-20 rounded-3xl grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-transparent"
            >
              <NumberPart
                number={350}
                title="Clients Satisfaits 🎉"
                icon={<FaUsers />}
              />
              <NumberPart
                number={250}
                title="Projets Réalisés 💼"
                icon={<FaBriefcase />}
                delay={1}
              />
              <NumberPart
                number={250}
                title="Équipiers Dévoués 🤝"
                icon={<FaUsersCog />}
                delay={2}
              />
            </div>
          </div>
        </div>
      )}
    </ScrollTrigger>
  );
};

export default Number;
