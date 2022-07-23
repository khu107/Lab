import React from "react";
import logoimg from "../../asset/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <NavLink to={"/home"}>
          <img src={logoimg} />
        </NavLink>
      </div>
      <div className="items">
        <div className="item">
          <NavLink to={"/home"} style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={"/about"} style={{ textDecoration: "none" }}>
            About us
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={"/service"} style={{ textDecoration: "none" }}>
            Services
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={"/news"} style={{ textDecoration: "none" }}>
            News
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={"/contact"} style={{ textDecoration: "none" }}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
