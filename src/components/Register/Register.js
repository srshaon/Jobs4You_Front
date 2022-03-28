import React, { useEffect, useState } from "react";

const Register = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/companies")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div>{companies.map((company) => console.log(company))}</div>;
};

export default Register;
