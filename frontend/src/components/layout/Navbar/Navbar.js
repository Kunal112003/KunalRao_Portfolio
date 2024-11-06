import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import { useState } from "react";

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link" activeClassName="active">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experience" className="nav-link" activeClassName="active">
            Experience
          </NavLink>
        </li>
      </ul>
    </nav>
  );


    
}

export default Navbar;
