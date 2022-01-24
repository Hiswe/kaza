import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header-page">
      <Link to="/">
        <img
          className="header-img"
          alt="kasa logo"
          src="./assets/images/NavbarLogo.svg
      "
        ></img>
      </Link>

      <nav className="navbar">
        <Link to="/">Acceuil</Link>
        <Link to="about">A Propos</Link>
      </nav>
    </header>
  );
};
export default Header;
