import "./AllJobs.css";

import React, { useEffect, useState } from "react";

const AllJobs = () => {
  const [pqr, setPqr] = useState([]);
  useEffect(() => {
    fetch("https://jobs4you.onrender.com/alljobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPqr(data);
      });
  });
  return (
    <div className="abc">
      <h3>{pqr.length}</h3>
    </div>
  );
};

export default AllJobs;
