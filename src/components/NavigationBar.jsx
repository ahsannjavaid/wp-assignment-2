import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          1815
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/data-entry"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to={"/data-entry"}
              >
                Data Entry
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
                to={"/projects"}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
