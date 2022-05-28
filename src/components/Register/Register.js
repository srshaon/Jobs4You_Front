import React, { useEffect, useState } from "react";
import './Register.css'
const Register = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/companies")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="shaon">
      <h6>First One</h6>
      {/* {companies.map((company) => console.log(company))} */}
      <div style={{ marginBottom: '50px' }} className="loader">
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <h6>second one</h6>
      <br />
      <div className="shaon2">
        <div className="loaderTwo">
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__ball"></div>
        </div>
      </div>
      <br />
      <div style={{ marginTop: '10px', paddingTop: '10px' }} className="shaon3">

        <div class="cube-wrapper">
          <div class="cube-folding">
            <span class="leaf1"></span>
            <span class="leaf2"></span>
            <span class="leaf3"></span>
            <span class="leaf4"></span>
          </div>
          <span class="loading" data-name="Loading">Loading</span>
        </div>
      </div>
    </div>

  )
};

export default Register;
