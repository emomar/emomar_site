const ServicesSection = () => {
  return (
    <div id="services" className="px-6">
      <div className="max-w-screen-lg mx-auto text-white">
        <h2
          data-aos="zoom-in-down"
          data-oas-duration="600"
          data-aos-delay="300"
          className="relative text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-6 text-center text-primary before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-[4px] before:w-[50px] before:bg-primary pb-3"
        >
          Services que EMOMAR offre
        </h2>
        <p
          data-aos="flip-left"
          data-aos-delay="600"
          className="text-sm sm:text-lg mb-2 sm:mb-4 md:mb-6 text-justify"
        >
          EMOMAR afin de pouvoir faire face aux différents défis du
          développement se propose d’offrir des services de qualités grâce à de
          grandes expériences dans les domaines du génie électrique, climatique,
          automatique et des nouvelles technologies de communication.
        </p>
        <p
          data-aos="flip-right"
          data-aos-delay="900"
          className="text-sm sm:text-lg mb-2 sm:mb-4 md:mb-6 text-justify"
        >
          EMOMAR se basant sur les compétences d’une équipe dynamique,
          professionnelle, attentive à vos préoccupations et besoins vous
          accompagne dans la prospection, étude et conception, suivis et
          réalisation de vos projets dans les domaines suivants :
        </p>
        <ul
          data-aos="zoom-in"
          data-aos-delay="1200"
          data-oas-duration="500"
          className="list-disc ml-8 text-sm sm:text-lg mb-2 sm:mb-4 md:mb-6 text-justify"
        >
          <li>
            Sécurisation et la protection périmétrique des sites critiques et
            sensibles (Aéroports, Camps militaires, les entrepôts, sites de
            production, barrages, etc …)
          </li>
          <li>
            Réseaux de communications (voix, données, images, informations
            diverses)
          </li>
          <li>
            Systèmes de sureté (contrôle d’accès, gestion d’alarme, intrusion et
            vidéosurveillance)
          </li>
          <li>
            Systèmes aéroportuaires (différents systèmes de checking,
            d’embarquement, d’affichage et autres)
          </li>
          <li>
            Système de sécurité incendie (prévention, détection et extinction)
          </li>
          <li>
            Système de gestion technique du bâtiment (Building Management
            System)
          </li>
          <li>
            Ascenseurs, escalators, système de parking et de gestion automatisée
            des accès
          </li>
          <li>Génie électrique et génie climatique</li>
          <li>
            Production fourniture et sécurisation de l’énergie propre, stable et
            sécurisée
          </li>
          <li>Formations</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
