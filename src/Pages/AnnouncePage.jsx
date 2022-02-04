import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Slider } from "../components";
import Title from "../components/AnnouncePage/Title";
import Host from "../components/AnnouncePage/Host";
import Rating from "../components/AnnouncePage/Rating";
import TagList from "../components/AnnouncePage/TagList";
import Collapsible from "../components/Common/Collapsible";
import { useData } from "../hooks/useApi.js";

import "./AnnouncePage.css";

const AnnouncePage = () => {
  const params = useParams();

  const [{ data: announce, isLoading, isError }, setId] = useData(
    params.id,
    {}
  );

  useEffect(() => {
    // TODO: display error page
    console.log(`display error page`);
  }, [isError]);

  useEffect(() => {
    console.log(`set a new ID`);
    setId(params.id);
    // linter ask for all dependencies
    // It can't know that `setId` is a setter… so it will complain
    // https://stackoverflow.com/a/59712002
  }, [params.id, setId]);

  return isLoading || !announce.id ? (
    `Loading…`
  ) : (
    <div className="announce-page">
      <Slider images={announce.pictures} />
      <div className="announce-page__header">
        <div>
          <Title announce={announce} />
          <TagList tags={announce.tags} />
        </div>
        <div>
          <Host host={announce.host} />
          <Rating rating={announce.rating} />
        </div>
      </div>
      <div className="announce-page__info">
        <Collapsible title="Description">{announce.description}</Collapsible>
        <Collapsible title="Équipements">
          <ul className="announce-page__equipements">
            {announce.equipments.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default AnnouncePage;
