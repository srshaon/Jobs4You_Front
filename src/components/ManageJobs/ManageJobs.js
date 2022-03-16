import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import ManageJob from "../ManageJob/ManageJob";

const ManageJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        const postedJobs = data.filter(
          (job) => job?.email?.toLowerCase() == user.email
        );
        setJobs(postedJobs);
      });
  }, [jobs]);

  return (
    <div className="main-container">
      <div className="container">
        <h2 className="text-center pb-4">Manage Jobs</h2>
        <Row className="d-md-flex align-items-centre justify-content-centre g-5 pb-5">
          {jobs.map((job, index) => (
            <ManageJob key={index} job={job} setJobs={setJobs}></ManageJob>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ManageJobs;
