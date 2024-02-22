import { Logo4 } from "../assets";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center bg- z-50 h-screen w-full">
      <div className="bg-no-repeat bg-gradient-to-b from-fuchsia-800/80 via-rose-500 to-orange-500 bg-center bg-contain w-full h-screen flex items-center justify-center">
        <img
          src={Logo4}
          alt="Logo Emomar"
          className="object-cover animate-ping w-[50%] h-auto"
        />
      </div>
    </div>
  );
};

export default Preloader;
