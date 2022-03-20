import axios from "axios";
import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./AddJob.css";

import { HiPlusCircle } from "react-icons/hi";

const AddJob = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

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
      .post("https://afternoon-headland-45054.herokuapp.com/jobs", newData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  const navigateToForm = () => {
    history.push("/profileForm");
  };

  return (
    <div className="add-job">
      <h4
        className="p-3"
        style={{ backgroundColor: "var(--color-primary-dark)", color: "white" }}
      >
        Post A Job
      </h4>
      <div className="profile-sec my-4 p-5 text-center">
        <h4 className="mb-4" style={{ color: "brown" }}>
          Company Profile Form
        </h4>
        <Button className="add-job-btn py-3" onClick={navigateToForm}>
          <HiPlusCircle className="heart pe-1" /> Submit
        </Button>
      </div>

      <div className="container jobpost-form">
        <h4 className="px-5 mx-5 pt-5" style={{ color: "brown" }}>
          Job Details
        </h4>
        <hr />
        <form disabled className="py-5 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex">
            <div className="w-100 mx-3">
              <label htmlFor="">Company name</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("company", { required: true, maxLength: 20 })}
                defaultValue={user.displayName}
              />
            </div>
          </div>

          <div className="d-md-flex justify-content-center align-items-center mt-3">
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Location</label> <br />
              <input
              disabled
                className="w-100 p-2 mt-2"
                type="name"
                {...register("jobLocation")}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Email</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("email", { required: true, maxLength: 20 })}
                defaultValue={user.email}
              />
            </div>
          </div>

          <div className="d-md-flex justify-content-center align-items-center mt-3">
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Job Title</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("job", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Category</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("category", { required: true, maxLength: 20 })}
              />
            </div>
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
                placeholder="Vacancy"
              />
            </div>
          </div>

          <div className="d-md-flex justify-content-center align-items-center mt-3">
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Education</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("educationalRequirements", {
                  required: true,
                })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Skills</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("skills", {
                  required: true,
                })}
                placeholder="add skills using ','"
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
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Experience</label> <br />
              <input
                className="w-100 p-2 mt-2"
                type="name"
                {...register("experienceRequirements")}
              />
            </div>
          </div>

          <div className="mt-3 mx-3">
            <label htmlFor="">Additional requirements</label>
            <textarea
              rows={4}
              {...register("additionalRequirements", {
                required: true,
              })}
              className="w-100 p-2 mt-2"
              placeholder="separate each point using Enter key"
            ></textarea>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Salary</label>
              <input
                className="w-100 p-2 mt-2"
                type="number"
                {...register("salary")}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Application Closing Date</label>
              <input
                className="w-100 p-2 mt-2"
                type={"date"}
                {...register("applicationDeadline")}
              />
            </div>
          </div>

          <div className="mt-3 mx-3">
            <label htmlFor="">Company Logo</label>
            <input
              className="w-100 p-2 mt-2"
              defaultValue="https://i.ibb.co/XDxGxmT/qhc-logo.jpg"
              {...register("image", { required: true })}
            />
          </div>

          <div className="w-100 my-3 text-center">
            <input
              className="update-btn py-2 px-3 mt-4 w-25"
              style={{
                backgroundColor: "var(--color-primary-light)",
                border: "none",
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
              }}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
