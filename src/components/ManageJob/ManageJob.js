import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageJob = ({ job, setJobs }) => {
  const [show, setShow] = useState(false);
  const handleState = (id) => {
    const proceed = window.confirm("Are you sure that you want to update?");
    if (proceed) {
      const updatedJob = { ...job, status: "approved" };
      const url = `https://afternoon-headland-45054.herokuapp.com/updateJob/${id}`;
      axios.put(url, updatedJob).then((res) => {
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
    const newData = { ...data, additionalRequirements: requirements };
    console.log(newData);
    // const updatedJob = { ...job, newData };
    // console.log(updatedJob);
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
      <Col md={12}>
        <Card className="w-75 p-5">
          <div>
            <div>
              {/* <div className="w-50 mx-auto d-md-flex align-items-center">
                <img src={job.image} alt="" className="w-50 p-5" />
                <h5>
                  <span style={{ color: "brown", fontWeight: "700" }}>
                    {job?.company}
                  </span>
                </h5>
              </div> */}
              <h6>{job?.category}</h6>
              <h5>{job?.job}</h5>
              <p>
                {job?.jobLocation} <span className="ps-4"> ${job?.salary}</span>
              </p>
              <p>{job?.employmentStatus}</p>
              <p>{job?.vacancy}</p>
              <p>Educational Req: {job?.educationalRequirements}</p>
              <p>Job Responsibilities: {job?.jobResponsibilities}</p>
              <p>Additional Req:</p>
              <ul>
                {job?.additionalRequirements.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-4">
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
      </Col>

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
                type="name"
                {...register("educationalRequirements")}
                placeholder="Education Req"
                defaultValue={job.educationalRequirements}
              />
              <input
                type="name"
                {...register("experienceRequirements")}
                placeholder="Experience Req"
                defaultValue={job.experienceRequirements}
              />
              <input
                type="name"
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
