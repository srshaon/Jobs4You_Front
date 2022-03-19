import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CgWorkAlt } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FcCurrencyExchange } from "react-icons/fc";
import "./ManageJob.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ManageJob = ({ job }) => {
  const [show, setShow] = useState(false);
  const handleUpdate = (id) => {
    const proceed = window.confirm("Are you sure that you want to update?");
    if (proceed) {
      // const updatedJob = { ...job, status: "approved" };
      const url = `http://localhost:5000/jobs/${id}`;
      axios.put(url).then((res) => {
        if (res.data.modifiedCount) {
          alert("updated successfully");
        }
      });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { control, register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const requirements = data.additionalRequirements.split(/\r?\n/g);
    const skills = data.skills.split(",");
    const newData = {
      ...data,
      additionalRequirements: requirements,
      skills: skills,
    };
    console.log(newData);
    axios
      .put(`http://localhost:5000/jobs/${job._id}`, newData)
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("updated successfully");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {/* <Col md={12}>
        <Card className="updatedjob-card w-75 p-5 mx-auto">
          <div>
            <div className="px-5 py-3">
              <h6>{job?.category}</h6>
              <h5 style={{ color: "brown" }}>{job?.job}</h5>
              <p>
                <TiLocation /> {job?.jobLocation} -{job?.employmentStatus}
              </p>
              <h5 className="pt-3" style={{ fontWeight: "600" }}>
                <u>Job Details</u>
              </h5>
              <p>
                {" "}
                <span style={{ color: "brown", fontWeight: "600" }}>
                  Vacancy:{" "}
                </span>
                {job?.vacancy}
              </p>
              <p>
                {" "}
                <span style={{ color: "brown", fontWeight: "600" }}>
                  Educational Requirements:{" "}
                </span>
                {job?.educationalRequirements}
              </p>
              <p>
                {" "}
                <span style={{ color: "brown", fontWeight: "600" }}>
                  Job Responsibilities:
                </span>{" "}
                {job?.jobResponsibilities}
              </p>
              <p>
                {" "}
                <span style={{ color: "brown", fontWeight: "600" }}>
                  {" "}
                  Additional Requirements:
                </span>
              </p>
              <ul className="ps-5 ms-2">
                {job?.additionalRequirements.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <p>
                {" "}
                <span style={{ color: "brown", fontWeight: "600" }}>
                  Salary:
                </span>{" "}
                ${job?.salary}
              </p>
            </div>
            <div className="text-center">
              {job?.status?.toLowerCase() === "pending" && (
                <button
                  className="submit-btn p-3"
                  onClick={() => handleState(job?._id)}
                >
                  Pending
                </button>
              )}
              {job?.status?.toLowerCase() === "approved" && (
                <Button
                  className="submit-btn p-3"
                  variant="primary"
                  onClick={handleShow}
                >
                  Update Job
                </Button>
              )}
            </div>
          </div>
        </Card>
      </Col> */}
      <tr>
        <td>
          <Link to={`/jobdetails/${job._id}`}>{job.job}</Link>
        </td>
        <td></td>
        <td>{job.applicationDeadline}</td>
        <td>{job.status}</td>
        <td>
          <span role="button" onClick={handleShow}>
            Update
          </span>
        </td>
        {/* <td>
          <span role="button" onClick={() => handleExpire(job._id)}>
            Close
          </span>
        </td> */}
      </tr>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update field of job details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-job py-5 w-100">
            <form className="py-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("company", { required: true })}
                placeholder="Company name"
                defaultValue={job.company}
              />
              <input
                {...register("job", { required: true })}
                placeholder="Job Title"
                defaultValue={job.job}
              />
              <input
                type="name"
                {...register("jobLocation")}
                placeholder="Location"
                defaultValue={job.jobLocation}
              />
              <input
                {...register("category", { required: true })}
                placeholder="Category"
                defaultValue={job.category}
              />

              <textarea
                rows={4}
                {...register("additionalRequirements", {
                  required: true,
                })}
                placeholder="additional req"
                defaultValue={job.additionalRequirements}
              ></textarea>

              <input
                type="number"
                {...register("vacancy")}
                placeholder="vacancy"
                defaultValue={job.vacancy}
              />
              <input
                type="text"
                {...register("educationalRequirements")}
                placeholder="Education Req"
                defaultValue={job.educationalRequirements}
              />
              <input
                type="text"
                {...register("experienceRequirements")}
                placeholder="Experience Req"
                defaultValue={job.experienceRequirements}
              />
              <input
                type="text"
                {...register("skills")}
                placeholder="Skills"
                defaultValue={job.skills}
              />
              <input
                type="text"
                {...register("jobResponsibilities")}
                placeholder="Job Responsibilities "
                defaultValue={job.jobResponsibilities}
              />

              <input
                type="number"
                {...register("salary")}
                placeholder="Salary $"
                defaultValue={job.salary}
              />
              <input className="submit-btn p-2" type="submit" />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ManageJob;
