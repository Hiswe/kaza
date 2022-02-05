import React, { useEffect } from "react";
import { useParams } from "react-router";

import "./AnnouncePage.css";
import { useData } from "../hooks/useApi.js";
import Slider from "../components/AnnouncePage/Slider";
import Title from "../components/AnnouncePage/Title";
import Host from "../components/AnnouncePage/Host";
import Rating from "../components/AnnouncePage/Rating";
import TagList from "../components/AnnouncePage/TagList";
import Collapsible from "../components/Common/Collapsible";

const AnnouncePage = () => {
  const params = useParams();

  const [{ data: announce, isLoading }, setId] = useData(
    params.id,
    {}
  );

  useEffect(() => {
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
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default AnnouncePage;
