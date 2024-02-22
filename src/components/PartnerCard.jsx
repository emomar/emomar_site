/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PartnerCard = ({ card }) => {
  const formattedDescription = card?.description
    ? card?.description
        .replace(/\n/g, "<br>")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
    : "";

  return (
    <div
      data-aos="zoom-in-down"
      data-oas-duration="600"
      key={card.id}
      className="group relative h-[430px] w-[330px] sm:h-[450px] sm:w-[400px] md:h-[550px] md:w-[550px] bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 mx-8 p-4 text-xs sm:text-base md:text-lg font-black uppercase text-center text-white backdrop-blur-lg">
          {card.title}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
          className="bg-gradient-to-br from-white/20 to-white/0 flex md:hidden md:group-hover:flex mx-8 p-1 text-sm text-justify text-white backdrop-blur-lg h-[300px] overflow-y-scroll sm:overflow-hidden"
        ></p>
      </div>
    </div>
  );
};

export default PartnerCard;
