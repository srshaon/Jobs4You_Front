import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Label,
  Cell,
} from "recharts";
import { Spinner } from "react-bootstrap";
import { format } from "fecha";
const MyJobs = () => {
  const [applyList, setApplyList] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
      .then((res) => res.json())
      .then((data) => setApplyList(data));
  }, []);
  console.log(applyList);
  const applyCollection = applyList.filter(
    (applies) => applies.email == user.email
  );
  //console.log(applyCollection);
  if (applyCollection.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div className="">
      <h4
        className="p-3 mb-4 text-white"
        style={{ background: "var(--color-primary-dark)" }}
      >
        List of Applied Jobs
      </h4>
      <h5 className="overview-card py-5 text-center">
        Total Jobs Applied: <span style={{}}>{applyCollection.length}</span>
      </h5>
      <div className="container my-5 mx-auto">
        <Table responsive table-striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Job Type</th>
              <th>Skills (%)</th>
              <th>Application Closing</th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            {applyCollection.map((apply) => (
              <tr>
                <td>{apply.job}</td>
                <td>{apply.company}</td>
                <td>{apply.jobLocation}</td>
                <td>{apply.employmentStatus}</td>
                <td>{apply.percentage}</td>
                <td>
                  {format(
                    new Date(apply.jobApplicationDeadline),
                    "MMMM Do, YYYY"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* {applyCollection.map((apply) => (
          <div>
            <h2>{apply.job}</h2>
            <img
              className=" d-flex justify-content-center "
              style={{ width: 200 }}
              src={apply.image}
              alt=""
            />
            <h4>{apply.company}</h4>

            <h4>{apply.employmentStatus}</h4>
            <h5>{apply.jobLocation}</h5>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default MyJobs;
