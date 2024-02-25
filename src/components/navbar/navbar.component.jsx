import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logos/bread-mate-logo.svg";
import "./navbar.style.css";

export default function NavBar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Thirteenth navbar example"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <img
              src={logo}
              alt="logo"
              width="30"
              height="auto"
              className="d-inline-block align-text-top"
            />
            <span className="navbar-brand col-lg-3 me-0">Bread Mate</span>

            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
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
                  Contact me
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Pages
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      className="nav-link"
                      href="https://taoreiki.org"
                      target="_blank"
                    >
                      Tao Reiki
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="https://albertomtferreira.github.io/"
                      target="_blank"
                    >
                      Web Portfolio
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
