import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Host, Slider, Collapsible } from "../components";
import "./AnnouncePage.scss";
import Api from "../Api/Api";

const AnnouncePage = () => {
  const params = useParams();
  const [announce, setAnnounce] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await Api.getDataById(params.id);
        setAnnounce(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [params.id]);

  return isLoading ? (
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
