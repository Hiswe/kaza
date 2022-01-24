import "./Card.scss";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card-location">
      <img className="img-location" src={props.cover} alt=" location "></img>
      <h3 className="title-location">{props.title}</h3>
    </div>
  );
};

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
