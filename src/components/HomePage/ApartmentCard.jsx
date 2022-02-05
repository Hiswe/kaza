import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./ApartmentCard.css";
import SkeletonLoader from "../Common/SkeletonLoader";

const ApartmentCard = ({ apartment = {}, isLoading = false }) => {
  if (isLoading)
    return (
      <SkeletonLoader className="apartment-card" style={{ width: `100%` }} />
    );

  return (
    <Link to={`/announce/${apartment.id}`} className="apartment-card">
      <img
        className="apartment-card__image"
        src={apartment.cover}
        alt="location"
      />
      <h3 className="apartment-card__name">{apartment.title}</h3>
    </Link>
  );
};

ApartmentCard.propTypes = {
  apartment: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ApartmentCard;
