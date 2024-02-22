import { AvatarEmomar } from "../assets";

/* eslint-disable react/prop-types */
const TeamMember = ({ name, role, description, avatarSrc, delay }) => (
  <div
    data-aos="zoom-out-down"
    data-oas-duration="600"
    data-aos-delay={delay ? delay : "600"}
    className="items-center rounded-lg shadow-2xl sm:flex bg-secondary"
  >
    <img
      className="w-full sm:w-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
      src={AvatarEmomar}
      alt={`${name} Avatar`}
    />
    <div className="px-5">
      <h3 className="text-xl font-bold tracking-tight text-primary">{name}</h3>
      <span className="text-white">{role}</span>
      <p className="mt-3 mb-4 font-light text-white">
        {description ? description : "Lorem Ipsum Description Personne"}
      </p>
    </div>
  </div>
);

export default TeamMember;
