import React, { useEffect, useState } from "react";
import './Register.css'
const Register = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("https://jobs4you.onrender.com/companies")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="shaon">

    </div>

  )
};

export default Register;
