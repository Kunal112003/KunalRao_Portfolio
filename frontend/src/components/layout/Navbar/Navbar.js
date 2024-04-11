import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <ol className="navbar-logo">
          <NavLink to="/" className="nav-link">
            <span className="link-text logo-text">K</span>
          </NavLink>
        </ol>

        <ol className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </ol>
        <ol className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </ol>
        <ol className="nav-item">
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
        </ol>
        <ol className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </ol>
        <ol className="nav-item">
          <NavLink to="/resume" className="nav-link">
            Resume
          </NavLink>
        </ol>
        <ol className="nav-item">
          <NavLink to="/experience" className="nav-link">
            Experience
          </NavLink>
        </ol>

      </ul>
    </nav>

  );
};

export default Navbar;
