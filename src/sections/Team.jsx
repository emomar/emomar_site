import { TeamMember } from "../components";
import teamMembers from "../utils/teamMembers";

const Team = () => {
  return (
    <section className="bg-[#23153C] pt-20 overflow-hidden" id="team">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h1
            data-aos="zoom-in-down"
            data-oas-duration="600"
            className="relative text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6 text-center text-primary before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-[4px] before:w-[50px] before:bg-primary pb-3"
          >
            Equipe EMOMAR
          </h1>
          <p
            data-aos="zoom-out-up"
            data-oas-duration="600"
            data-aos-delay="600"
            className="font-light text-white lg:mb-16 sm:text-xl"
          >
            Notre équipe dévouée et expérimentée chez EMOMAR est prête à relever
            tous les défis. Sous la direction du Directeur Général Modibo
            Mariko, nous offrons des solutions techniques de pointe dans divers
            domaines tels que le génie électrique, climatique, automatique et
            les nouvelles technologies.
          </p>
        </div>
        <div
          data-aos="zoom-out-down"
          data-oas-duration="600"
          className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 max-w-screen-lg mx-auto"
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
