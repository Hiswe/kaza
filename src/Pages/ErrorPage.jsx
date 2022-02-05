import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__code">404</div>
      <div className="error-page__text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className="error-page__link" to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};
export default ErrorPage;
