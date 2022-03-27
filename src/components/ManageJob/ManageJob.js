import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CgWorkAlt } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FcCurrencyExchange } from "react-icons/fc";
import "./ManageJob.css";
import { Link } from "react-router-dom";
import AllJobs from "../AllJobs/AllJobs";
import useAuth from "../../hooks/useAuth";
import { AiFillEye } from "react-icons/ai";
import { TiLockClosed } from "react-icons/ti";

const ManageJob = ({ job }) => {
  console.log('from manage',job)
  console.log(job.additionalRequirements.join("\r\n"));
  const { control, setControl, user } = useAuth();
  const [applications, setApplication] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const totalApplyLIst = data;
        const individualApplyList = totalApplyLIst.filter(
          (j) => j.jobId == `${job._id}`
        );

        setApplication(individualApplyList);

        console.log(individualApplyList);
      });
  }, [job._id, applications?.length]);

  // console.log(applications);
  let applyCandidatesEmails = [];
  if (applications.length > 0) {
    applications.map((a) => {
      applyCandidatesEmails.push(a.email);
    });
  }
  // console.log(applyCandidatesEmails);

  const expiredDate = new Date(job.applicationDeadline);
  const today = new Date();
  // console.log(expiredDate > today);

  const [show, setShow] = useState(false);
  const handleStatus = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to close the job?"
    );
    if (proceed) {
      const closedJob = { ...job, status: "closed" };
      const url = `https://afternoon-headland-45054.herokuapp.com/updateJob/${id}`;
      axios.put(url, closedJob).then((res) => {
        if (res.data.modifiedCount) {
          alert("closed successfully");
        }
      });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const requirements = data.additionalRequirements.split(/\r?\n/g);
    const skills = data.skills.split(",");
    const newData = {
      ...data,
      additionalRequirements: requirements,
      skills: skills,
    };
    // console.log(newData);
    axios
      .put(
        `https://afternoon-headland-45054.herokuapp.com/jobs/${job._id}`,
        newData
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("updated successfully");
        }
      })
      .catch((error) => console.log(error));
  };
  const handleControl = () => {
    console.log("clicked");
    setControl(`/alljobs/${job._id}`);
    console.log(control);
  };
  const something = () => {};
  return (
    <>
      <tr className="table-tr">
        <td className="table-td ">
          <Link to={`/jobdetails/${job._id}`}>{job.job}</Link>
        </td>
        <td>{job?.applicationPosted}</td>
        <td>{job.applicationDeadline}</td>
        <td>
          {expiredDate < today ? (
            <span style={{ color: "red" }}>Expired</span>
          ) : (
            <span>
              {job.status === "approved" && (
                <span style={{ color: "green", fontWeight: "600" }}>
                  approved
                </span>
              )}
              {job.status === "pending" && (
                <span style={{ color: "brown", fontWeight: "600" }}>
                  pending
                </span>
              )}
              {job.status === "closed" && (
                <span style={{ color: "orangered", fontWeight: "600" }}>
                  closed
                </span>
              )}
            </span>
          )}
        </td>
        <td>
          {job.status === "approved" || job.status === "pending" ? (
            <span
              className="p-2 border-0"
              style={{
                background: "purple",
                color: "white",
                fontWeight: "700",
                borderRadius: "7px",
              }}
              role="button"
              onClick={handleShow}
            >
              Update
            </span>
          ) : (
            "-"
          )}
        </td>
        <td className="text-center">
          {job.status !== "closed" && expiredDate > today ? (
            <span
              style={{ color: "black", fontWeight: "700" }}
              role="button"
              onClick={() => handleStatus(job._id)}
            >
              <TiLockClosed />
            </span>
          ) : (
            "-"
          )}
        </td>
        <td className="text-center">
          <span style={{ fontWeight: "bolder" }}> {applications.length}</span>
        </td>
        <td className="text-center">
          <Link to={`/applycandidateslist/${job._id}`}>
            <span>
              <AiFillEye />
            </span>
          </Link>
          {/* <Button onClick={something} className="apply-btn px-5">
            abc
          </Button> */}

          {/* {applyCandidatesEmails?.map((email) => (
            <AllJobs email={email}></AllJobs>
          ))} */}
        </td>
      </tr>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "purple" }}>
              Update Form of Posted Job
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className=" py-4 mb-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex">
                <div className="w-100 mx-3">
                  <label htmlFor="">Company name</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("company", {
                      required: true,
                      maxLength: 20,
                    })}
                    defaultValue={user.displayName}
                  />
                </div>
              </div>

              <div className="d-md-flex justify-content-center align-items-center mt-3">
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Location</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    type="name"
                    {...register("jobLocation")}
                    defaultValue={job.jobLocation}
                  />
                </div>
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Email</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("email", {
                      required: true,
                      maxLength: 20,
                    })}
                    defaultValue={user.email}
                  />
                </div>
              </div>

              <div className="d-md-flex justify-content-center align-items-center mt-3">
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Job Title</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("job", {
                      required: true,
                      maxLength: 20,
                    })}
                    defaultValue={job.job}
                  />
                </div>
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Category</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("category", {
                      required: true,
                      maxLength: 20,
                    })}
                    defaultValue={job.category}
                  />
                </div>
              </div>

              <div className="mt-3 mx-3">
                <label htmlFor="">Job Description</label>
                <textarea
                  rows={4}
                  {...register("description")}
                  className="w-100 p-2 mt-2"
                  placeholder="short details..."
                  defaultValue={job.description}
                ></textarea>
              </div>

              <div className="d-md-flex justify-content-center align-items-center mt-3">
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Job Type</label> <br />
                  <select
                    className="w-100 p-2 mt-2"
                    {...register("employmentStatus")}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Vacancy</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    type="number"
                    {...register("vacancy")}
                    defaultValue={job.vacancy}
                  />
                </div>
              </div>

              <div className="d-md-flex justify-content-center align-items-center mt-3">
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Education</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("educationalRequirements")}
                    defaultValue={job.educationalRequirements}
                  />
                </div>
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Skills</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("skills")}
                    placeholder="add skills using ','"
                    defaultValue={job.skills}
                  />
                </div>
              </div>

              <div className="d-md-flex justify-content-center align-items-center mt-3">
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Job Responsibility</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    type="name"
                    {...register("jobResponsibilities")}
                    defaultValue={job.jobResponsibilities}
                  />
                </div>
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Experience</label> <br />
                  <input
                    className="w-100 p-2 mt-2"
                    type="name"
                    {...register("experienceRequirements")}
                    defaultValue={job.experienceRequirements}
                  />
                </div>
              </div>

              <div className="mt-3 mx-3">
                <label htmlFor="">Additional requirements</label>
                <textarea
                  rows={4}
                  {...register("additionalRequirements")}
                  defaultValue={job.additionalRequirements.join("\r\n")}
                  className="w-100 p-2 mt-2"
                  placeholder="separate each point using Enter key"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Salary</label>
                  <input
                    className="w-100 p-2 mt-2"
                    {...register("salary")}
                    defaultValue={job.salary}
                  />
                </div>
                <div className="w-100 mx-3 add-job">
                  <label htmlFor="">Closing Date</label>
                  <input
                    className="w-100 p-2 mt-2"
                    type={"date"}
                    {...register("applicationDeadline")}
                    defaultValue={job.applicationDeadline}
                  />
                </div>
              </div>

              {/* <div className="mt-3 mx-3">
              <label htmlFor="">Company Logo</label>
              <div className="logo-field w-100 p-2 mt-2 d-flex align-items-center">
                <label className="logo-label">
                  <div className="logo-upload"></div>
                  <input
                    type="file"
                    name=""
                    id=""
                    className="logo-input"
                    onChange={(e) => {
                      handleFile(e);
                    }}
                    {...register("image", {
                      required: true,
                     
                    })}
                  />
                  <div className="logo-btn p-3">Browse</div>
                </label>
                <small className="logo-details">
                  Maximum file size: 100 MB.
                </small>
              </div>
            </div> */}

              <div className="w-100 my-3 text-center">
                <input
                  className="update-btn py-2 mt-4 w-25"
                  style={{
                    backgroundColor: "purple",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                    borderRadius: "7px",
                  }}
                  type="submit"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="border-0"
              style={{ background: "var(--color-primary-light)" }}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ManageJob;
