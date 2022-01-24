import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 230px)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
