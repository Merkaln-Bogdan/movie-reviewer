import React from "react";
import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
const Header = () => (
  <header className={style.Header}>
    <Navigation />
  </header>
);
export default Header;
