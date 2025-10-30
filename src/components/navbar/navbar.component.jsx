import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import logo from "../../assets/images/logos/bread-mate-logo.svg";
import "./navbar.style.css";

export default function NavBar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded sticky-top shadow-sm"
        aria-label="Main navigation"
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Bread Mate logo"
              width="30"
              height="auto"
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-bold">Bread Mate</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample11">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/order" className="nav-link">
                  Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://taoreiki.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tao Reiki
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://albertomtferreira.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web Portfolio
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <NavLink to="/order" className="btn btn-outline-primary position-relative cart-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
