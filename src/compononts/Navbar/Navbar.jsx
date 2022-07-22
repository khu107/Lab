import React from "react";
import logoimg from "../../asset/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink to={"/home"}>
        <img src={logoimg}></img>
      </NavLink>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>About us</NavLink>
      <NavLink to={"/services"}>Services</NavLink>
      <NavLink to={"/news"}>News</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </>
  );
}

export default Navbar;
