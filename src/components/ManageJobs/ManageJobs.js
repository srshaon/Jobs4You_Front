import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
    <div>
      <div className="container">
        <h4
          className="p-3 text-white"
          style={{ background: "var(--color-primary-dark)" }}
        >
          List of Posted Jobs
        </h4>
        {/* <Row className="d-md-flex align-items-centre justify-content-centre g-5 pb-5">
          {jobs.map((job, index) => (
            <ManageJob key={index} job={job} setJobs={setJobs}></ManageJob>
          ))}
        </Row> */}
        <div className="mx-auto my-5 text-center">
          <Table>
            <thead className="table-head">
              <tr className="table-tr">
                <th>Title</th>
                <th>Date Posted</th>
                <th>Closing Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Listing Expires</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {jobs?.map((job) => (
                <ManageJob key={job._id} job={job}></ManageJob>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
