import * as React from "react";
import Movie from "../movie/movie.component";
import "./movie-list.style.css";
import { Link } from "react-router-dom";
const MovieList: React.FC<any> = (props: any) => (
  <div className="movie-list-grid">
    <div className="movie-list-content">
      {props.movies.length ? (
        props.movies.map((movie: any) => (
          <Link to={`movie/${movie.id}`}>
            <Movie className="element" key={movie.id} movie={movie} />
          </Link>
        ))
      ) : (
        <h2 style = {{ textAlign:'center'}}>No Movie found</h2>
      )}
    </div>
  </div>
);
export default MovieList;
 