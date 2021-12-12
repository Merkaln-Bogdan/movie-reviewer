import React from "react";
import imageMan from "./pngegg.png";
import styleCast from "./Cast.module.css";
const Cast = ({ cast = [] }) => (
  <div>
    <ul className={styleCast.Wrapper}>
      {cast.map((cas) => (
        <li className={styleCast.CastItem} key={cas.id}>
          <img
            src={
              cas.profile_path
                ? `https://image.tmdb.org/t/p/w500${cas.profile_path}`
                : imageMan
            }
            alt={cas.name}
            width="200"
            height="250"
          />
          <span className={styleCast.Name}>{cas.character}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Cast;
