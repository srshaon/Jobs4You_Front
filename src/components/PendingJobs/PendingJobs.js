import "./PendingJobs.css";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { format } from "fecha";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PendingJobs = () => {
  const [pendingJobs, setPendingJobs] = useState([]);

  useEffect(() => {
    fetch("https://jobs4you.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        const pendingJobs = data.filter((job) => job?.status === "pending");
        console.log(pendingJobs);
        setPendingJobs(pendingJobs);
      });
  }, []);

  const handlePendingJob = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to approve the job?"
    );
    if (proceed) {
      const url = `https://jobs4you.onrender.com/jobs/${id}`;
      fetch(url, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("approved successfully");
            fetch("https://jobs4you.onrender.com/jobs")
              .then((res) => res.json())
              .then((data) => {
                const pendingJobs = data.filter(
                  (job) => job?.status === "pending"
                );
                console.log(pendingJobs);
                setPendingJobs(pendingJobs);
              });
          }
        });
    }
  };
  if (pendingJobs.length === 0) {
    return (
      <div>
        <h2>No Pending Jobs At The Moment</h2>
      </div>
    );
  }
  return (
    <div className="py-5 text-center">
      <Table>
        <thead className="table-head">
          <tr className="table-tr">
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Status</th>
            <th>Closing Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
          {pendingJobs.map((pJobs) => (
            <tr>
              <td>
                <Link to={`/jobdetails/${pJobs._id}`}>{pJobs.job}</Link>
              </td>
              <td>{pJobs.company}</td>
              <td>{pJobs.jobLocation}</td>
              <td>{pJobs.employmentStatus}</td>
              <td>
                {" "}
                {format(new Date(pJobs.applicationDeadline), "MMMM Do, YYYY")}
              </td>
              <td>
                <p>
                  {pJobs.status === "pending" && (
                    <button
                      className="p-2 border-0 text-white"
                      style={{ background: "purple", borderRadius: "7px" }}
                      onClick={() => handlePendingJob(pJobs._id)}
                    >
                      pending
                    </button>
                  )}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {pendingJobs.map((pJobs) => (
        <>
          <li>{pJobs.job}</li>
          <h2>{pJobs.status}</h2>
          <p>
            {pJobs.status === "pending" && (
              <button onClick={() => handlePendingJob(pJobs._id)}>
                pending
              </button>
            )}
          </p>
        </>
      ))} */}
    </div>
  );
};

export default PendingJobs;
