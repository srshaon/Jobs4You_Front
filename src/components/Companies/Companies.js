import React, { useEffect, useState } from "react";
import Company from "../Company/Company";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="container my-5 pt-3 pb-4">
      <h2 className="text-center" style={{ color: "brown" }}>
        Employer Spotlight
      </h2>
      <h4 className="text-center" style={{ opacity: "0.6" }}>
        Top rated companies{" "}
      </h4>
      <div className="mt-5">
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1 gy-5 gx-2">
          {companies.map((company) => (
            <Company key={company.id} company={company}></Company>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
