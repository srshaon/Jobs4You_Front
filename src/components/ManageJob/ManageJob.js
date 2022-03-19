import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CgWorkAlt } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FcCurrencyExchange } from "react-icons/fc";
import "./ManageJob.css";
import { Link } from "react-router-dom";

const ManageJob = ({ job }) => {
  const expiredDate = new Date(job.applicationDeadline);
  const today = new Date();
  console.log(expiredDate > today);

  const [show, setShow] = useState(false);
  const handleStatus = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to close the job?"
    );
    if (proceed) {
      const closedJob = { ...job, status: "closed" };
      const url = `http://localhost:5000/updateJob/${id}`;
      axios.put(url, closedJob).then((res) => {
        if (res.data.modifiedCount) {
          alert("closed successfully");
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
      <tr className="table-tr">
        <td className="table-td">
          <Link to={`/jobdetails/${job._id}`}>{job.job}</Link>
        </td>
        <td></td>
        <td>{job.applicationDeadline}</td>
        <td>{expiredDate < today ? "Expired" : job.status}</td>
        <td>
          {job.status === "approved" || job.status === "pending" ? (
            <span role="button" onClick={handleShow}>
              Update
            </span>
          ) : (
            "-"
          )}
        </td>
        <td>
          {job.status !== "closed" && expiredDate > today ? (
            <span role="button" onClick={() => handleStatus(job._id)}>
              Close
            </span>
          ) : (
            "-"
          )}
        </td>
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
