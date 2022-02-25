import React, { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const JobStatus = () => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch("https://still-cliffs-68775.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        const statusList = data.map((status) => status.employmentStatus);
        const uniqueStatus = [...new Set(statusList)];
        let statusJobList = [];
        for (let statusName of uniqueStatus) {
          const similarStatus = statusList.filter(
            (status) => status === statusName
          );
          const jobLocation = {
            statusName: statusName,
            totaljobs: similarStatus.length,
          };
          statusJobList.push(jobLocation);
        }
        setStatus(statusJobList);
      });
  }, []);

  return (
    <div className="category-container">
      <div className="cardbg">
        <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1 d-flex justify-content-center">
          {status.map((status) => (
            <div>
              <div class="box text-center my-3">
                <h3>
                  <Link
                    className="category-title"
                    to={`/jobstatus/${status.statusName}`}
                  >
                    {status.statusName}
                    <span className="jobcount">{status.totaljobs}</span>
                    <MdDoubleArrow
                      className="ms-3"
                      style={{ color: "brown" }}
                    />
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobStatus;
