import * as React from "react";
import "./movie.detail.style.css";

const MovieDetail: React.FC<any> = (prop: any) => (
  <div className="movie-detail-container">
    <div className="movie-image-wrapper">
      <img
        alt="movie"
        src={`https://image.tmdb.org/t/p/w300${prop.movie.poster_path}`}
      />
    </div>

    <div className="movie-content">
      <h1>
        <a href = {prop.movie.homepage}target = {prop.movie.homepage}>{prop.movie.title}</a>
      </h1>
      <h3>Plot Summary</h3>
      <p>{prop.movie.overview}</p>
      {prop.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
      {prop.directors.map((element: any, i: number) => {
        return (
          <p key={i} className="rmdb-director">
            {element.name}
          </p>
        );
      })}
    </div>
  </div>
);
export default MovieDetail;
