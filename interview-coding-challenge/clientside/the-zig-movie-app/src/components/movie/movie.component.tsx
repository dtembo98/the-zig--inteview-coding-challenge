import * as React from "react";
import Image from "react-bootstrap/Image";
//import { config } from "../../config";
import "./movie.style.css";

const Movie: React.FC<any> = (props: any) => (
  <div className="movie">
   
   <Image
   className ="movie-image"
      src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}/>
    
  </div>
);
export default Movie;
