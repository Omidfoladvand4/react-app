import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

function Navbar() {
  return (
    <ul className="menu">
      <li className="menu-item">
        <Link to="/">Home</Link>
        <HomeIcon />
      </li>
      <li className="menu-item">
        <Link to="/about">About Me</Link>
        <InfoIcon />
      </li>
      <li className="menu-item">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="menu-item">
        <Link to="/">Contact Me</Link>
      </li>
    </ul>
  );
}

export default Navbar;
