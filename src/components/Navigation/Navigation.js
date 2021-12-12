import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../Routes/Routes";
import navStyle from "./Navigation.module.css";

const Navigation = () => (
  <ul className={navStyle.contain}>
    <li>
      <NavLink className={"Homepage"} to={routes.home}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.movies}>Search movies</NavLink>
    </li>
  </ul>
);
export default Navigation;
