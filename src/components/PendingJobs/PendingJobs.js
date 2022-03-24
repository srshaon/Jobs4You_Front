import "./PendingJobs.css";
import React, { useEffect, useState } from "react";

const PendingJobs = () => {
  const [pendingJobs, setPendingJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
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
      const url = `http://localhost:5000/jobs/${id}`;
      fetch(url, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("approved successfully");
          }
        });
    }
  };

  return (
    <div className="py-5 text-center">
      {pendingJobs.map((pJobs) => (
        <>
          <li>{pJobs.job}</li>
          <p>
            {pJobs.status === "pending" && (
              <button onClick={() => handlePendingJob(pJobs._id)}>
                pending
              </button>
            )}
          </p>
        </>
      ))}
    </div>
  );
};

export default PendingJobs;
