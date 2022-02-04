import React from "react";
import "./AboutPage.css";

import Banner from "../components/Common/Banner";
import Collapsible from "../components/Common/Collapsible";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Banner />
      <div className="about-page__content">
        <Collapsible title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapsible>
        <Collapsible title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapsible>
        <Collapsible title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Collapsible>
        <Collapsible title="Responsabilité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapsible>
      </div>
    </div>
  );
};

export default AboutPage;
