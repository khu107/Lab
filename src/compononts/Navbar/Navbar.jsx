import React from 'react';
import logoimg from '../../asset/logo.png';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logoimg} />
      </div>
      <div className="items">
        <div className="item">
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
            Home
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={'/about'} style={{ textDecoration: 'none' }}>
            About
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={'/service'} style={{ textDecoration: 'none' }}>
            Portal
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={'/news'} style={{ textDecoration: 'none' }}>
            OHDEP
          </NavLink>
        </div>
        <div className="item">
          <NavLink to={'/contact'} style={{ textDecoration: 'none' }}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
