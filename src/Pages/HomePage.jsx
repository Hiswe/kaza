import React, { useEffect } from "react";

import "./HomePage.css";
import Banner from "../components/Common/Banner";
import ApartmentCard from "../components/HomePage/ApartmentCard"
import { useData } from "../hooks/useApi.js";

const HomePage = () => {
  const [{ data: apartments, isLoading, isError }] = useData(``, []);

  useEffect(() => {
    // TODO: display error page
    console.log(`display error page`);
  }, [isError]);

  return (
    <main className="home-page">
      <Banner>Chez vous, partout et ailleurs</Banner>
      {isLoading ? (
        `Loading…`
      ) : (
        <section className="home-page__card-list">
          {apartments.map((apartment) => {
            return <ApartmentCard apartment={apartment} key={apartment.id} />;
          })}
        </section>
      )}
    </main>
  );
};
export default HomePage;
