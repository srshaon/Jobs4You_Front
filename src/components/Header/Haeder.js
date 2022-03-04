import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bg ">
      <Container className="d-flex align-items-center justify-items-center">
        <Navbar.Brand
          to="/home"
          className="text-white"
          style={{
            fontFamily: "Alegreya, sans-serif",
            fontSize: "32px",
            fontWeight: "500",
          }}
        >
          <span
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
            style={{
              color: "orangered",
              fontWeight: "900",
              fontSize: "65px",
            }}
          >
            4
          </span>
          <span style={{ color: "white", fontSize: "45px", fontWeight: "900" }}>
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
            <NavDropdown title="JOB SEEKER" id="collasible-nav-dropdown">
              <NavLink className="dropdown-item" to="/browseJob">
                Browse Jobs
              </NavLink>
              <NavLink className="dropdown-item" to="/companies">
                Browse Companies
              </NavLink>
              <NavDropdown
                drop={"end"}
                title="Career Advice"
                id="collasible-nav-dropdown"
              >
                <NavLink className="dropdown-item" to="/resumetips">
                  Resume Tips
                </NavLink>
                <NavLink className="dropdown-item" to="/coverletter">
                  Cover Letter
                </NavLink>
                <NavLink className="dropdown-item" to="/interview">
                  Interview Tips
                </NavLink>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="EMPLOYER" id="collasible-nav-dropdown">
              <NavLink className="dropdown-item" to="/postJob">
                Post a Job
              </NavLink>
              <NavLink className="dropdown-item" to="/postJob">
                Browse Candidates
              </NavLink>
            </NavDropdown>
            <NavLink className="nav-link" to="/about">
              ABOUT US
            </NavLink>
            {user?.email && (
              <Navbar.Brand className="header-text">
                <span className="me-2">
                  <img src={user.photoURL} alt="" className="profile-img" />
                </span>
                {user.displayName}
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
  );
};

export default Header;
