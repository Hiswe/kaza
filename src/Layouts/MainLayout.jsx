import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import "./MainLayout.css";

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <NavLink to="/">
          <img
            className="header-img"
            alt="kasa logo"
            src="/assets/images/NavbarLogo.svg
        "
          />
        </NavLink>
        <nav className="main-layout__header-navbar">
          <NavLink to="/" className="main-layout__header-link">
            Accueil
          </NavLink>
          <NavLink to="about" className="main-layout__header-link">
            À Propos
          </NavLink>
        </nav>
      </header>
      <main style={{ minHeight: "calc(100vh - 230px)" }}>
        <Outlet />
      </main>
      <footer className="main-layout__footer">
        <img
          className="footer-img"
          alt="kasa logo"
          src="/assets/images/FooterLogo.svg
      "
        />
        <p>© 2022 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
