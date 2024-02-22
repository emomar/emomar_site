import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { PartnerCard } from "../components";
import {
  AMRTP,
  Aeroport,
  AmbassadeGhana,
  BATIMAT,
  BCS,
  BMS,
  BNDA,
  BR3TERRASSE,
  BR5TERRASSE,
  COMATEX,
  EDM,
  ENA,
  EXBHM,
  GAYA,
  INPS,
  MSport,
  Saham,
  UEMOA,
  UnitySegou,
  VIPAeroport,
} from "../assets";

const cards = [
  {
    url: Aeroport,
    title: "NOUVEAU TERMINAL AEROPORT INTERNATIONAL DU MALI",
    description: `
        Réseaux Informatique et Téléphonique : plus de 600 points.
        Interconnexion en Fibres entre les différents Sites de l’Aéroport.
        Système de Sécurité Incendie : plus de 250 points Détection.
        Système de Contrôle d’Accès :  plus de 50 Portes Contrôlées.
        Système de Vidéosurveillance : plus de 95 Caméras.
        Système de Sonorisation : plus de 250 points et de 25 zones.
        Système de Télé Affichage : plus de 30 Ecrans.
        Ensemble des Ascenseurs et Escalators
        Système Automatique de Parking Payant: 3 Entrées, 2 Sorties
        Système de Gestion Aéroportuaire :
           •	16 Comptoirs d’Enregistrement
           •	10 Comptoirs d’Embarquement
        Système de Gestion du Temps: plus de 20 Horloges.
        Système de sécurité des entrées :
           •	2x RAPISCAN 620 XR pour bagage de sécurité
           •	4x RAPISCAN 638 XR pour bagage hors gabarit
           •	4x Portiques de sécurité multizone HI-PE Plus`,
    id: 1,
  },
  {
    url: BMS,
    title: "BANQUE MALIENNE DE SOLIDARITE B.M.S SA ACI 2000 BAMAKO MALI",
    description: `
    Réseaux Informatique et Téléphonique : plus de 800 points
    Système de Sécurité Incendie : plus de 300 points Détection
    Système de Contrôle d’Accès :  plus de 15 Portes Contrôlées
    Système de Alarme Intrusion : Plus de 10 points de Détection
    Système de Vidéosurveillance : plus de 100 Caméras
    Système de sécurité des entrées :
    •	1x XRAY-ZKX6550 pour bagage de sécurité
    •	6x Portique de sécurité multizone HI-PE Plus
    Mise en place installation et sécurisation de la salle serveur avec la mise en place d’énergie stable sécurisée et courant ondulé stable.
    `,
    id: 2,
  },
  {
    url: VIPAeroport,
    title: "PAVILLON V.I.P. AEROPORT BAMAKO SENOU MALI",
    description: `
        Réseaux Informatique et Téléphonique : plus de 80 points
        Système de Sécurité Incendie : plus de 100 points Détection
        Système de Contrôle d’Accès :  plus de 20 Portes Contrôlées
        Système de Alarme Intrusion : Plus de 16 points de Détection
        Système de Vidéosurveillance : plus de 50 Caméras
        Système de Sonorisation   : plus de 100 points  et de 03 zones
        Système de sécurité des entrées :
        •	2x RAPISCAN 620 XR pour bagage de sécurité
        •	2x Portiques de sécurité multizone HI-PE Plus
    `,
    id: 3,
  },
  {
    url: INPS,
    title:
      "PROJET DE CONSTRUCTION D’UN IMMEUBLE DE L’INPS à ACI 2000 BAMAKO MALI",
    description: `
        Réseaux Informatique et Téléphonique : plus de 300 points
        Système de Sécurité Incendie : plus de 350 points Détection
        Système de Contrôle d’Accès : plus de 40 Portes Contrôlées
        Système de Vidéosurveillance : plus de 50 Caméras    
    `,
    id: 4,
  },
  {
    url: AmbassadeGhana,
    title: "AMBASSADE DE GHANA  ACI 2000 BAMAKO MALI",
    description: `
        Réseaux Informatique et Téléphonique : plus de 100 points
        Système de Sécurité Incendie : plus de 80 points Détection
        Système de Contrôle d’Accès :  plus de 10 Portes Contrôlées
        Système de Vidéosurveillance : plus de 16 Caméras
    `,
    id: 5,
  },
  {
    url: Saham,
    title: "PROJET DE CONSTRUCTION D’IMMEUBLE BUREAUX SAHAM MALI A BAMAKO",
    description: `
        Réseaux Informatique et Téléphonique : plus de 200 points
        Système de Sécurité Incendie : plus de 250 points Détection
        Système de Contrôle d’Accès : plus de 20 Portes Contrôlées
        Système de Vidéosurveillance : plus de 70 Caméras
        Système de gestion de temps de travail
    `,
    id: 6,
  },
  {
    url: UnitySegou,
    title: "INSTITUT UNIVERSITAIRE DE FORMATION PROFESSIONEL DE SEGOU",
    description: `
        Réseaux Informatique et Téléphonique : plus de 80 points
        Système de Sécurité Incendie : plus de 150 points Détection
        Système de Contrôle d’Accès :  plus de 50 Portes Contrôlées
    `,
    id: 7,
  },
  {
    url: EDM,
    title:
      "ENERGIE DU MALI–CENTRE NATIONAL DE CONDUITE DES RESEAUX ELECTRIQUES EDM",
    description: `
        Réseaux Informatique et Téléphonique : plus de 100 points
        Système de Sécurité Incendie : plus de 100 points Détection
        Système d’extinction automatique : 2 salles
        Système de Contrôle d’Accès : plus de 10 Portes Contrôlées
        Système de Vidéosurveillance : plus de 10 Caméras
        Mise en place installation et sécurisation de la salle serveur avec la mise en place d’énergie stable sécurisée et courant ondulé stable.
    `,
    id: 8,
  },
  {
    url: ENA,
    title: "ECOLE NATIONALE D'ADMINISTRATION DU MALI KOULOUBA BAMAKO ",
    description: `
        Réseaux Informatique et Téléphonique : plus de 100 points
        Système de Sécurité Incendie : plus de 500 points Détection
        Système de Vidéosurveillance : plus de 5 Caméras
        Système de Audiovisuel et Sonorisation :
        •	Salle Amphi 300 Places
    `,
    id: 9,
  },
  {
    url: EXBHM,
    title: "AGENCE ACI2000 DE LA B.M.S SA (EX-BHM) BAMAKO MALI",
    description: `
        Système de Contrôle d’Accès :  plus de 5 Portes Contrôlées
        Système de Vidéosurveillance : plus de 35 Caméras
    `,
    id: 10,
  },
  {
    url: BATIMAT,
    title: "BATIMAT MALI",
    description: `
        Système de Sécurité Incendie : plus de 60 points Détection
        Système de Vidéosurveillance : plus de 15 Caméras
        Système de Sonorisation   : plus de 20 points et 2 zones    
    `,
    id: 11,
  },
  {
    url: MSport,
    title: "MEDECINE DU SPORT DU MALI",
    description: `
        Réseaux Informatique et Téléphonique : plus de 80 points
        Système de Sécurité Incendie : plus de 150 points Détection
    `,
    id: 12,
  },
  {
    url: COMATEX,
    title:
      "PROJET DE CONSTRUCTION DE LA DIRECTION NATIONALE DE L’URBANISME ET DE L’HABITAT",
    description: `
        Réseaux Informatique et Téléphonique : plus de 300 points
        Système de Sécurité Incendie : plus de 350 points Détection    
    `,
    id: 13,
  },
  {
    url: AMRTP,
    title: "AUTORITE MALIENNE DE REGULATION DES POSTES ET TICS DU MALI(AMRTP)",
    description: `
        Réseaux Informatique et Téléphonique : plus de 300 points
        Système de Sécurité Incendie : plus de 150 points Détection
        Système de Vidéosurveillance : plus de 30 Caméras
        Ensemble des Ascenseurs : plus de 4 Ascenseurs
        Mise en place installation et sécurisation de la salle serveur avec la mise en place d’énergie stable sécurisées et courant ondulé stable.
    `,
    id: 14,
  },
  {
    url: UEMOA,
    title:
      "PROJET DE CONSTRUCTION DU SIEGE DU PARLEMENT DE L’U.E.M.O.A   A  BAMAKO-MALI",
    description: `
        Réseaux Informatique et Téléphonique : plus de 300 points
        Système audio-visuel et Sonorisation : 3 salles
        Système du contrôle d’accès : plus 15 portes
        Système de la vidéo-surveillance : plus 20 caméras
    `,
    id: 15,
  },
  {
    url: GAYA,
    title: "PROJET DE CONSTRUCTION DE L’HOPITAL DE GAYA AU NIGER",
    description: `
        Conception d’un TGBT
        Installation d’un TGBT
    `,
    id: 16,
  },
  {
    url: BR3TERRASSE,
    title: "PROJET DE CONSTRUCTION D'UN IMMEUBLE DE BUREAUX R+3+TERRASSE",
    description: `
        Réseaux Informatique et Téléphonique : plus de 150 points
        Système de Sécurité Incendie : plus de 150 points Détection
        Système du contrôle d’accès : plus de 45 portes
        Système de la vidéo-surveillance : plus 50 caméras
        Système de Alarme Intrusion : 02 points de Détection    
    `,
    id: 17,
  },
  {
    url: BR5TERRASSE,
    title:
      "PROJET CONSTRUCTION D'UN SHOW ROOM SISE A ACI 2000 SOUS-SOL+R+5+TERRASSE",
    description: `
        Système de Sonorisation : plus de 85 points et de 08 zones
    `,
    id: 18,
  },
  {
    url: BNDA,
    title:
      "PROJET D'EXTENSION DU SIEGE DE LA BNDA A HAMDALLAYE ACI 2000 BAMAKO",
    description: `
        Réseaux Informatique et Téléphonique : plus de 1450 points
        Système de Sécurité Incendie : plus de 700 points de Détection
        Système d’interphonie de sécurité : plus de 105 points
        Système d’extinction automatique à gaz : 3 salles
        Système du contrôle d’accès : plus de 70 portes
        Système de la vidéo-surveillance : plus 150 caméras
        Système de Alarme Intrusion : plus de 20 points de Détection
        Système audio-visuel et Sonorisation : 02 Salles
        Système de gestion technique du bâtiment
        Système de sécurité des entrées :
        •	3x XRAY-ZKX6550A pour bagage de sécurité
        •	3x Portique de sécurité multizone HI-PE Plus
        •	3x Barrière automatique
        Mise en place installation et sécurisation de la salle serveur avec la mise en place d’énergie stable sécurisée et courant ondulé stable.    
    `,
    id: 19,
  },
  {
    url: BCS,
    title:
      "PROJET DE CONSTRUCTION DU NOUVEAU SIEGE DE LA BANQUE COMMERCIALE DU SAHEL (BCS - SA) A L’ACI 2000",
    description: `
        Réseaux Informatique et Téléphonique : plus de 1160 points
        Système de Sécurité Incendie : plus de 380 points de Détection
        Système du contrôle d’accès : plus de 40 portes
        Système de la vidéo-surveillance : plus de 45 caméras
        Système de Alarme Intrusion : 21 points de Détection
        Système audio-visuel et Sonorisation : 02 Salles
        Système de gestion technique du bâtiment
        Mise en place installation et sécurisation de la salle serveur avec la mise en place d’énergie stable sécurisée et courant ondulé stable.
    `,
    id: 20,
  },
];

const Partnership = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="pt-20 pb-12 px-6" id="partnerships">
      <div className="mx-auto max-w-screen-lg">
        <h2
          data-aos="zoom-in-down"
          data-oas-duration="600"
          className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-[4px] before:w-[50px] before:bg-primary pb-3"
        >
          Partenaires & Clients
        </h2>
        <section
          ref={targetRef}
          className="h-[300vh]"
          data-aos="zoom-in-down"
          data-oas-duration="600"
        >
          <div className="sticky top-14 flex h-[90vh] items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-2 sm:gap-4">
              {cards.map((card) => {
                return <PartnerCard card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partnership;
