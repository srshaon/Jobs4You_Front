import "./LogIn.css";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
const LogIn = () => {
  const history = useHistory();
  const {
    user,
    logOut,
    googleSignIn,
    handleEmailChange,
    handlePasswordChange,
    email,
    password,
    handleNameChange,
    setName,
    handleRegistration,
    auth,
    saveUser,
    role,
    setRole,
    admin,
    setAdmin,
  } = useAuth();

  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const location = useLocation();
  // console.log(location);
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
        //console.log(error.message);
        if (error.code === "auth/user-not-found") {
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
    // console.log(role);
    // console.log('hitted first form')
    document.getElementById("user-signup-form").style.visibility = "visible";
    document.getElementById("user-signup-form").style.display = "block";
    document.getElementById("company-signup-form").style.display = "none";

    document.getElementById("google-signin").style.visibility = "visible";
  };
  const companyFormDisplay = () => {
    setRole("company");
    redirect_Url = "/dashboard";
    // console.log(role);
    // console.log('hitted second form form')
    // document.getElementById('company-signup-form').style.visibility = 'visible'
    document.getElementById("user-signup-form").style.display = "none";
    document.getElementById("user-signup-form").style.visibility = "hidden";
    document.getElementById("company-signup-form").style.visibility = "visible";
    document.getElementById("company-signup-form").style.display = "block";

    document.getElementById("google-signin").style.visibility = "hidden";
  };

  // console.log(role);

  return (
    <div className="o login-bg">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form onSubmit={handleEmailLogin}>
            <label className="login-label" for="chk" aria-hidden="true">
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
            {/* <button className='login-button'>Login</button> */}
            <input className="login-button" type="submit" value="Login" />
          </form>
          {/* <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Sign up</button>
                    </form> */}
          {/* <button onClick={handleGoogleSignIn} className="google-login-button">Google Login</button> */}
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
            <label className="signup-label" for="chk" aria-hidden="true">
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
              {/* <button className='signup-button'>Sign Up</button> */}
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
              {/* <button className='signup-button'>Sign Up</button> */}
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
