import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Host, Slider, Collapsible } from "../components";
import "./AnnouncePage.scss";
import { useData } from "../hooks/useApi.js";

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
        <Collapsible
          title="Description"
          description={announce.description}
          radius={10}
        />
        <Collapsible
          title="Équipements"
          description={announce.equipments.join("\n")}
          radius={10}
        />
      </div>
    </div>
  );
};

export default AnnouncePage;
