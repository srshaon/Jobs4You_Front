import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "black",
  };

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
          <NavLink
            className="navbar-brand text-white"
            to="/home"
            style={{
              fontSize: "35px",
              fontWeight: "500",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "42px",
                fontWeight: "900",
              }}
            >
              J
            </span>
            obs
            <span
              style={{
                color: "orangered",
                fontWeight: "900",
                fontSize: "65px",
              }}
            >
              4
            </span>
            <span
              style={{ color: "white", fontSize: "42px", fontWeight: "900" }}
            >
              Y
            </span>
            ou
          </NavLink>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-white"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/jobSeeker">
                Job Seeker
              </NavLink>
            </li>

            <li class="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/careerguide"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Career Advice
              </NavLink>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    activeStyle={{ activeStyle }}
                    to="/resumetips"
                  >
                    Resume Tips
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    activeStyle={{ activeStyle }}
                    to="/coverletter"
                  >
                    Cover Letter
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    activeStyle={{ activeStyle }}
                    to="/interview"
                  >
                    Interview
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/postJob">
                Post a Job
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/login">
                Sign In
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/faq">
                FAQ
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                CONTACT
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
