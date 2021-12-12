import React from "react";
import Header from "../Header/Header";
const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
export default Layout;
