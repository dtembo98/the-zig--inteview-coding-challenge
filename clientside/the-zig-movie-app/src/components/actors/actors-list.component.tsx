import * as React from "react";
import "./actors-list.style.css";
import Actor from "../actor/actor.component";

const Actors: React.FC<any> = (props: any) => (
  <div className="actor-list">
    {props.cast.map((actor: any) => (
      <Actor key={actor.id} actor={actor} />
    ))}
  </div>
);

export default Actors;
