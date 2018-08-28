import React from "react";
import LoadingSpinner from "./HOC";
import "./Movies.css";
const Movies = props => {
  return props.movies.map(el => {
    return (
      <div className="movies" key={el.id}>
        <div>
          <strong>
            <em>Movie's title :</em>
          </strong>
          <span>{el.title}</span>
        </div>
        <div>
          <strong>
            <em>Movie's release date :</em>
          </strong>
          <span>{el.year}</span>
        </div>
        <div>
          <strong>
            <em>Movie's story :</em>
          </strong>
          <span>{el.story}</span>
        </div>
      </div>
    );
  });
};

export default LoadingSpinner(Movies);
