import "./HomePage.scss";
import React from "react";
import { Banner, Card } from "../components";
import { Link } from "react-router-dom";
import Api from "../Api/Api";

const HomePage = () => {
  const apartments = Api.getData();
  return (
    <main className="home-page">
      <Banner text={"Chez vous, partout et ailleurs"} />
      <section className="card-list">
        {apartments.map(({ id, title, cover }) => {
          return (
            <Link key={id} to={`/announce/${id}`}>
              <Card key={id} id={id} title={title} cover={cover} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};
export default HomePage;
