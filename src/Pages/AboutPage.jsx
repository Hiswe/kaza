import React from "react";
import "./AboutPage.scss";

import { Banner, Collapsible } from "../components";

const infos = [
  {
    title: "Fiabilité",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Responsabilité",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-banner">
        <Banner text={""} />
      </div>
      <div className="about-collapsible">
        {infos.map((info, index) => (
          <Collapsible
            title={info.title}
            description={info.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
