import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
import { useLocation } from "react-router-dom";
import image from "../../assets/Images/no_img_2.png";
import Notifications from "../Notifications/Notifications";
import { HashLink, NavHashLink } from "react-router-hash-link";
const Header = () => {

  const { admin, user, logOut, role } = useAuth();
  const location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      {location.pathname !== "/dashboard" && (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bg ">
          <Container className="header d-md-flex align-items-center justify-items-center">
            <Navbar.Brand
              to="/home"
              className="text-white navbar-brand-header"
              style={{
                fontFamily: "Alegreya, sans-serif",
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              <span
                className="navbar-brand-header-character"
                style={{
                  color: "white",
                  fontSize: "45px",
                  fontWeight: "900",
                }}
              >
                J
              </span>
              obs
              <span
                className="navbar-brand-header-number-character"
                style={{
                  color: "orangered",
                  fontWeight: "900",
                  fontSize: "65px",
                }}
              >
                4
              </span>
              <span
                className="navbar-brand-header-character"
                style={{ color: "white", fontSize: "45px", fontWeight: "900" }}
              >
                Y
              </span>
              ou
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center justify-content-center">
                <NavLink className="nav-link" to="/home">
                  HOME
                </NavLink>
                <NavHashLink
                  as={HashLink}
                  to="/home#browsejobs"
                  activeClassName="active"
                  className="nav-link"
                  onClick={handleClick}
                >
                  BROWSE JOBS

                </NavHashLink>

                {role === "seeker" && (
                  <>
                    <NavDropdown
                      title="JOB SEEKER"
                      id="collasible-nav-dropdown"
                    >
                      <NavLink className="dropdown-item" to="/companies">
                        Browse Companies
                      </NavLink>
                      <NavLink className="dropdown-item" to="/dashboard">
                        Dashboard
                      </NavLink>
                    </NavDropdown>
                    <NavLink className="nav-link" to="/uploadviewresume">
                      UPLOAD RESUME
                    </NavLink>
                    <Notifications />
                  </>
                )}
                {role === "company" && (
                  <>
                    <NavDropdown title="EMPLOYER" id="collasible-nav-dropdown">
                      <NavLink className="nav-link" to="/postJob">
                        Post a Job
                      </NavLink>
                      <NavLink className="dropdown-item" to="/candidates">
                        Browse Candidates
                      </NavLink>
                      <NavLink className="dropdown-item" to="/dashboard">
                        Dashboard
                      </NavLink>
                    </NavDropdown>
                    <Notifications />
                  </>
                )}
                <NavDropdown
                  // drop={"end"}
                  title="CAREER ADVICE"
                  id="collasible-nav-dropdown"
                >
                  <NavLink className="dropdown-item" to="/careerguide">
                    Career Guide
                  </NavLink>
                  <NavLink className="dropdown-item" to="/resumetips">
                    Resume Tips
                  </NavLink>
                  <NavLink className="dropdown-item" to="/coverletter">
                    Cover Letter Tips
                  </NavLink>
                  <NavLink className="dropdown-item" to="/interview">
                    Interview Tips
                  </NavLink>
                </NavDropdown>
                {user?.email && (
                  <Navbar.Brand className="header-text">
                    <span className="mx-3" style={{ fontSize: "15px" }}>
                      {user.displayName}
                    </span>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="" className="profile-img" />
                    ) : (
                      <img src={image} alt="" className="no-img" />
                    )}
                  </Navbar.Brand>
                )}
                {user?.email ? (
                  <button className=" signout-btn" onClick={logOut}>
                    SIGN OUT
                  </button>
                ) : (
                  <NavLink className="nav-link" to="/login">
                    SIGN IN
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
