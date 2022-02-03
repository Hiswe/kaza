import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./HomePage.scss";
import { Banner, Card } from "../components";
import { useData } from "../hooks/useApi.js";

const HomePage = () => {
  const [{ data: apartments, isLoading, isError }] = useData(``, []);

  useEffect(() => {
    // TODO: display error page
    console.log(`display error page`);
  }, [isError]);
  

  return (
    <main className="home-page">
      <Banner text={"Chez vous, partout et ailleurs"} />
      {isLoading ? (
        `Loading…`
      ) : (
        <section className="card-list">
          {apartments.map(({ id, title, cover }) => {
            return (
              <Link key={id} to={`/announce/${id}`}>
                <Card key={id} id={id} title={title} cover={cover} />
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
};
export default HomePage;
