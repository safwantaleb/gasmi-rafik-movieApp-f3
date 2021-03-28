import React from "react";
import Rating from "../Rating/Rating";
import "./MovieCard.css";
const MovieCard = ({ film, i }) => {
  return (
    <div>
      <div key={i}>
        <div className="wrapper">
          <div className="cards">
            <figure className="card">
              <img src={film.url} alt="filmposter" />
              <figcaption style={{ color: "#24282f" }}>{film.name}</figcaption>
            </figure>
            <span>
              {" "}
              <Rating rate={film.rate} />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
