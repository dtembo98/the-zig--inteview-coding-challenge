import * as React from "react";
import "./movie-info.style.css";
//import movieDetailsComponent from "../../pages/details/movie-details.component";
import MovieDetails from "../../components/movie-details/movie-details.component";

const MovieInfo = (props: any) => (
  <div
    className="image"
    style={{
      background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%, rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),url('https://image.tmdb.org/t/p/w1280${props.movie.backdrop_path}'), #1c1c1c`
    }}
  >
    <MovieDetails movie = {props.movie}  directors ={props.directors} />
  </div>
);

export default MovieInfo;
