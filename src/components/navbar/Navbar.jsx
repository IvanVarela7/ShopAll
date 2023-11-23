import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart_widget/CartWidget";
import "../navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ShopAll
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Inicio
              </Link>
            </li>
            {/* Sección de tipos de vehículos */}
            <li className="nav-item dropdown">
              <span className="nav-links">Categorias</span>
              <ul className="dropdown-content">
                <li>
                  <Link to="/categoria/vehiculos">Vehiculos</Link>
                </li>
                <li>
                  <Link to="/categoria/camiones">Camiones</Link>
                </li>
                <li>
                  <Link to="/categoria/motos">Motos</Link>
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
