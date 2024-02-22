import { useEffect } from "react";
import { Element } from "react-scroll";
import {
  Footer,
  Hero,
  Number,
  Partnership,
  Presentation,
  Services,
  Solutions,
  Team,
} from "../sections";

import Net from "vanta/src/vanta.net";
import Globe from "vanta/src/vanta.globe";
import Dots from "vanta/src/vanta.dots";

const Main = () => {
  useEffect(() => {
    Net({
      el: "#partnerships",
    });
    Globe({
      el: "#home",
    });
    Dots({
      el: "#services-solutions",
    });
  }, []);
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="presentation">
        <Presentation />
      </Element>
      <div id="services-solutions" className="overflow-hidden">
        <Element name="solutions">
          <Solutions />
          <Services />
          <Number />
        </Element>
      </div>
      <Element name="partnerships">
        <Partnership />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </>
  );
};

export default Main;
