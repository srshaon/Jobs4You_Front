import "./LogIn.css";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
const LogIn = () => {
  const history = useHistory();
  const {
    googleSignIn,
    handleEmailChange,
    handlePasswordChange,
    email,
    password,
    handleNameChange,
    handleRegistration,
    auth,
    saveUser,
    role,
    setRole,
    error, setError
  } = useAuth();

  // const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const location = useLocation();

  let redirect_Url = location.state?.from || "/dashboard";
  let redirect_Url2 = "/dashboard";
  const redirect = () => {
    history.push(redirect_Url2);
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(role);
        setRole("seeker");
        const user = result.user;
        console.log(role);
        saveUser(user.email, user.displayName, role, "PUT");
        setError("");
        history.push(redirect_Url);
      })
      .catch((error) => {
        setError(error.message);
        // setUser({});
        // setErrorMsg(error.message);
      });
  };

  const handleEmailLogin = (e) => {
    // console.log('hit first time');
    e.preventDefault();
    // console.log('hit 2nd time');
    // return signInWithEmailAndPassword(auth, email, password)
    processLogIn(email, password);
  };
  const processLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        history.push(redirect_Url);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/user-not-found") {
          console.log('hitted');
          setError("Wrong Email");
        } else {
          setError("Wrong Password");
        }
      });
  };

  const handleEmailRegistration = (e) => {
    // console.log('hit first time');
    e.preventDefault();
    handleRegistration(redirect, role);
  };
  // registration

  const userFormDisplay = () => {
    setRole("seeker");
    redirect_Url = "/dashboard";
    setError('');

    document.getElementById("user-signup-form").style.visibility = "visible";
    document.getElementById("user-signup-form").style.display = "block";
    document.getElementById("company-signup-form").style.display = "none";

    document.getElementById("google-signin").style.visibility = "visible";
  };
  const companyFormDisplay = () => {
    setRole("company");
    redirect_Url = "/dashboard";
    setError('');

    document.getElementById("user-signup-form").style.display = "none";
    document.getElementById("user-signup-form").style.visibility = "hidden";
    document.getElementById("company-signup-form").style.visibility = "visible";
    document.getElementById("company-signup-form").style.display = "block";

    document.getElementById("google-signin").style.visibility = "hidden";
  };
  const handleError = () => {
    setError('');
    console.log('clicked')

  }
  return (
    <div className="o login-bg">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form onSubmit={handleEmailLogin}>
            <label onClick={handleError} className="login-label" htmlFor="chk" aria-hidden="true">
              Login{" "}
            </label>

            <input
              onBlur={handleEmailChange}
              className="email-input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              onBlur={handlePasswordChange}
              className="password-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <p className="display-error-login" >{error}</p>
            <input className="login-button" type="submit" value="Login" />
          </form>
          <div className="d-flex justify-content-center">
            <span style={{ color: "white" }} className="login-google-span">
              sign in with
            </span>
            <button className="google-login-button">
              <i
                onClick={handleGoogleSignIn}
                className="fa-brands fa-google"
              ></i>
            </button>
          </div>
        </div>

        <div className="signup">
          <div className="d-flex justify-content-center signup-option-button-div">
            <button onClick={userFormDisplay} className="signup-option-button">
              Job Seeker
            </button>
            <button
              onClick={companyFormDisplay}
              className="signup-option-button"
            >
              Job Recruiter
            </button>
          </div>

          <form onSubmit={handleEmailRegistration}>
            <label onClick={handleError} className="signup-label" htmlFor="chk" aria-hidden="true">
              Sign Up
            </label>

            <div
              id="user-signup-form"
              style={{ marginTop: "70px", visibility: "hidden" }}
            >
              <input
                onBlur={handleNameChange}
                className="username-input"
                type="text"
                name="txt"
                placeholder="User name"
                required=""
              />
              <input
                onChange={handleEmailChange}
                className="email-input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                onChange={handlePasswordChange}
                className="password-input"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <p className="display-error-signup" >{error}</p>
              <input className="signup-button" type="submit" value="Register" />
            </div>

            <div
              id="company-signup-form"
              style={{ marginTop: "70px", visibility: "hidden" }}
            >
              <input
                onBlur={handleNameChange}
                className="username-input"
                type="text"
                name="txt"
                placeholder="Company name"
                required=""
              />
              <input
                onChange={handleEmailChange}
                className="email-input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                onChange={handlePasswordChange}
                className="password-input"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <p className="display-error-signup" >{error}</p>
              <input className="signup-button" type="submit" value="Register" />
            </div>
          </form>

          <div
            id="google-signin"
            className="d-flex justify-content-center google-signin-div"
          >
            <span className="signin-google-span">sign in with</span>
            <button className="google-login-button">
              <i
                onClick={handleGoogleSignIn}
                className="fa-brands fa-google"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
