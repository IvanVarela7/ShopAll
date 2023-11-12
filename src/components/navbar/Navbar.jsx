import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Logo
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/inicio" className="nav-links">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios" className="nav-links">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-links">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
