import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container mx-auto">
      <NavLink className="me-4 pe-4" to="/projects">Projects</NavLink>
      <NavLink to="/learning">Learning</NavLink>
    </nav>
  );
}
export default NavBar;
