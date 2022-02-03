import "./HomePage.scss";
import React, { useEffect, useState } from "react";
import { Banner, Card } from "../components";
import { Link } from "react-router-dom";
import Api from "../Api/Api";

const HomePage = () => {
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await Api.getData();
        setApartments(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
