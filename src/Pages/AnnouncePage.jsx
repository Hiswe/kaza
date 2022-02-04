import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Host, Slider } from "../components";
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
      <div className="announce-infos">
        <Host
          name={announce.host.name}
          cover={announce.host.picture}
          rating={announce.rating}
          tags={announce.tags}
          title={announce.title}
          location={announce.location}
        />
      </div>
      <div className="announce-collapsible">
        <Collapsible title="Description">{announce.description}</Collapsible>
        <Collapsible title="Équipements">
          {announce.equipments.join("\n")}
        </Collapsible>
      </div>
    </div>
  );
};

export default AnnouncePage;
