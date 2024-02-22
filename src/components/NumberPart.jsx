import CountUp from "react-countup";

// eslint-disable-next-line react/prop-types
const NumberPart = ({ number, title, icon, delay }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mr-2">
          {icon}
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <CountUp start={0} end={number} duration={3} delay={delay} />+
        </div>
      </div>
      <div className="text-center font-semibold">{title}</div>
    </div>
  );
};

export default NumberPart;
