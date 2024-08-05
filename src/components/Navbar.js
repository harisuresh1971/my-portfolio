import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true} duration={500}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="projects" smooth={true} duration={500}>Projects</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="skills" smooth={true} duration={500}>Skills</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="contact" smooth={true} duration={500}>Contact</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
