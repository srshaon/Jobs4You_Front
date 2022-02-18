import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg">
      <div className="container container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a
            className="navbar-brand text-white"
            href="/home"
            style={{
              fontSize: "35px",
              fontWeight: "500",
            }}
          >
            <span style={{ fontSize: "50px" }}>J</span>obs
            <span
              style={{
                color: "orangered",
                fontWeight: "900",
                fontSize: "40px",
              }}
            >
              4
            </span>
            <span style={{ fontSize: "50px" }}>Y</span>ou
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/home"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/postJob">
                POST A JOB
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/jobSeeker">
                JOB SEEKER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
