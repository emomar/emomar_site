// import { HighTechDigitalWorldBackground } from "../assets";

const HeroSection = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div className="max-w-screen-lg left-1/2 -translate-x-1/2 absolute top-0 w-full h-full flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="3000"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 underline  underline-offset-4 decoration-wavy decoration-primary animate-wiggle"
          >
            EMOMAR
          </h1>
          <p
            data-aos="fade-zoom-out"
            data-aos-duration="3000"
            className="text-lg md:text-xl lg:text-2xl mb-8"
          >
            Plus de solutions
          </p>

          <div className="flex flex-col lg:flex-row justify-between max-w-screen-xl mt-10 items-center gap-4 lg:gap-16">
            <p
              data-aos="zoom-out-right"
              data-aos-duration="1500"
              className="text-xl md:text-2xl lg:text-4xl mb-8 w-full px-4 md:px-0 md:w-1/2"
            >
              Expertise en Solutions de Sécurité pour Systèmes d&apos;Entreprise
            </p>
            <div
              className="px-4 md:px-0 md:w-1/3 flex flex-col space-y-4"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
            >
              <button className="px-4 relative flex rounded-full h-[50px] items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full">
                <a
                  href="/solutions-securite"
                  className="text-sm sm:text-base relative z-10 w-full"
                >
                  Solutions de Securite
                </a>
              </button>
              <button className="px-4 relative flex rounded-full h-[50px] items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full">
                <a
                  href="/solutions-technology"
                  className="text-sm sm:text-base relative z-10 w-full"
                >
                  Solutions de la technologie I.T
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
