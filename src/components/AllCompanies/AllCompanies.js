import "./AllCompanies.css";

import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import image from "../../assets/Images/company_bg.jpg";

const AllCompanies = () => {
  const [allCompanies, setAllCompanies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/companyprofiles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setAllCompanies(data);
      });
  });
  return (
    <div>
      <h2>Company Profile</h2>
    </div>
    // <div>
    //   <img src={image} alt="" className="company-bg" />
    //   <div className="admin-banner">
    //     <h5 className="admin-banner-text mt-5">Showing All Companies</h5>
    //   </div>
    //   <div>
    //     {allCompanies.map((company) => (
    //       <div className="row d-md-flex align-items-center justify-content-center">
    //         <Col md={6}>
    //           <img src={company.img} alt="" className="w-25" />
    //         </Col>
    //         <Col md={6}>{company.cname}</Col>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AllCompanies;
