import * as React from "react";
import "./actor.style.css";

import { Container, Image } from "react-bootstrap";

const Actor: React.FC<any> = (props: any) => (
  <div >
    <Container className="actor-container">
      <Image
        className="actor-image"
        src={
          props.actor.profile_path
            ? `https://image.tmdb.org/t/p/w1280${props.actor.profile_path}`
            : `../../../public/noimagefound.jpg`
        }
      />
      <div id="text">
      <span className="actor-name">{props.actor.name}</span>
      <span className="actor-character">{props.actor.character}</span>
      </div>
    </Container>
  </div>
);
export default Actor;
