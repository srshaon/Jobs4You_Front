import "./ApplyCandidateList.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/Images/candidate_1.jpg";
const ApplyCandidateList = () => {
  const { jobId } = useParams();
  const [allJobs, setAllJobs] = useState([]);
  const [allApplyList, setAllApplyList] = useState([]);
  const [allApplyCandi, setAllApplyCandi] = useState([]);
  const [appliedCandidates, setAppliedCandidates] = useState([]);

  let x = "sportsfi2017@gmail.com";
  useEffect(() => {
    fetch(`http://localhost:5000/usersDetails/${x}`)
      .then((res) => res.json())
      .then((data) => {
        // xyz = [...data]
        console.log("this is user", data);
        // setAllApplyCandi(data)
      });
  }, [x]);
  let xyz = [];
  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllJobs(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const abc = data;
        const pqr = abc.filter((job) => job.jobId == jobId);
        let result = [];
        setAllApplyList(pqr);
        pqr.map((x) => {
          fetch(`http://localhost:5000/usersDetails/${x.email}`)
            .then((res) => res.json())
            .then((data) => {
              // xyz = [...data]
              result.push(data);
              console.log("this is user data with multi fetch", data);
              // setAllApplyCandi(data)
            })
            .finally(() => {
              console.log(result);
              setAllApplyCandi(result);
            });
        });
      });
  }, [jobId, x.email]);
  console.log(allApplyCandi);
  return (
    <div className="pb-5" style={{ background: "#9c9c9c60" }}>
      <div>
        <img src={image} alt="" className="candidate-profile" />
        <div className="banner">
          <h2
            className="banner-text pt-5 mt-5 me-5 pe-5"
            style={{ color: "black", fontSize: "70px" }}
          >
            Candidate's Profile---
          </h2>
        </div>
      </div>
      <div>
        <h3 className="text-center pt-5">
          No of Applicants: {allApplyList.length}{" "}
        </h3>
        <table className="w-75 mx-auto pb-5">
          <thead>
            <tr>
              {/* <th>Image</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Skills Gained</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {allApplyList?.map((candidate) => (
              <tr>
                {/* <td data-column="First Name">
                <img src={candidate.image} alt="" />
              </td> */}
                <td data-column="First Name">{candidate.firstName}</td>
                <td data-column="Last Name">{candidate.lastName}</td>
                <td data-column="Job Title">{candidate.email}</td>
                <td data-column="Twitter">{candidate.contactNo}</td>
                <td data-column="Twitter">{candidate.percentage}</td>
                <td data-column="Twitter">{candidate.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyCandidateList;
