import React from "react";

import "./HomePage.css";
import Banner from "../components/Common/Banner";
import ApartmentCard from "../components/HomePage/ApartmentCard";
import { useData } from "../hooks/useApi.js";

const HomePage = () => {
  const [{ data: apartments, isLoading }] = useData(``, []);

  return (
    <main className="home-page">
      <Banner>Chez vous, partout et ailleurs</Banner>
      <section className="home-page__card-list">
        {isLoading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => {
              return <ApartmentCard key={`loader-${index}`} isLoading={true} />;
            })}
          </>
        ) : (
          <>
            {apartments.map((apartment) => {
              return <ApartmentCard apartment={apartment} key={apartment.id} />;
            })}
          </>
        )}
      </section>
    </main>
  );
};
export default HomePage;
