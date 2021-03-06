import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import "./MainLayout.css";
import { ReactComponent as KazaLogo } from "../assets/kaza-logo.svg";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout__content">
        <header className="main-layout__header">
          <Link to="/">
            <KazaLogo className="main-layout__header-logo" alt="kasa logo" />
          </Link>
          <nav className="main-layout__header-navbar">
            <NavLink to="/" className="main-layout__header-link">
              Accueil
            </NavLink>
            <NavLink to="/about" className="main-layout__header-link">
              À Propos
            </NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <footer className="main-layout__footer">
        <KazaLogo className="main-layout__footer-logo" alt="kasa logo" />
        <p>© 2022 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}
