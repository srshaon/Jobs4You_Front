import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./AddJob.css";

import { HiPlusCircle } from "react-icons/hi";
import useImageVideoUpload from "./../../hooks/useImageVideoUpload";

const AddJob = ({ profileInfo }) => {
  const history = useHistory();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState(false);
  const { handleFile } = useImageVideoUpload(setImgUrl, setUploading);
  const [inputDisabled, setInputDisabled] = useState(true);
  // const [disabledForm, setDisabledForm] = useState("blue");

  useEffect(() => {
    if (profileInfo) {
      setInputDisabled(false);
      // setDisabledForm("skyblue");
    }
  }, [profileInfo]);

  const onSubmit = (data) => {
    const requirements = data.additionalRequirements.split(/\r?\n/g);
    const skills = data.skills.split(",");
    data.image = imgUrl;
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
  console.log(profileInfo?.length);

  return (
    <div className="add-job">
      <h4
        className="p-3"
        style={{ backgroundColor: "var(--color-primary-dark)", color: "white" }}
      >
        Post a Job
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
        <form
          disabled
          className="disable-form py-4 mb-4"
          // style={{ background: disabledForm }}

          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="d-flex">
            <div className="w-100 mx-3">
              <label htmlFor="">Company name</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("company", {
                  required: true,
                  maxLength: 20,
                  disabled: inputDisabled,
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
                {...register("jobLocation", { disabled: inputDisabled })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Email</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("email", {
                  required: true,
                  maxLength: 20,
                  disabled: inputDisabled,
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
                  disabled: inputDisabled,
                })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Category</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("category", {
                  required: true,
                  maxLength: 20,
                  disabled: inputDisabled,
                })}
              />
            </div>
          </div>

          <div className="mt-3 mx-3">
            <label htmlFor="">Job Description</label>
            <textarea
              rows={4}
              {...register("description", {
                required: true,
                disabled: inputDisabled,
              })}
              className="w-100 p-2 mt-2"
              placeholder="short details..."
            ></textarea>
          </div>

          <div className="d-md-flex justify-content-center align-items-center mt-3">
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Job Type</label> <br />
              <select
                className="w-100 p-2 mt-2"
                {...register("employmentStatus", { disabled: inputDisabled })}
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
                {...register("vacancy", { disabled: inputDisabled })}
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
                  disabled: inputDisabled,
                })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Skills</label> <br />
              <input
                className="w-100 p-2 mt-2"
                {...register("skills", {
                  required: true,
                  disabled: inputDisabled,
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
                {...register("jobResponsibilities", {
                  disabled: inputDisabled,
                })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Experience</label> <br />
              <input
                className="w-100 p-2 mt-2"
                type="name"
                {...register("experienceRequirements", {
                  disabled: inputDisabled,
                })}
              />
            </div>
          </div>

          <div className="mt-3 mx-3">
            <label htmlFor="">Additional requirements</label>
            <textarea
              rows={4}
              {...register("additionalRequirements", {
                required: true,
                disabled: inputDisabled,
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
                {...register("salary", { disabled: inputDisabled })}
              />
            </div>
            <div className="w-100 mx-3 add-job">
              <label htmlFor="">Closing Date</label>
              <input
                className="w-100 p-2 mt-2"
                type={"date"}
                {...register("applicationDeadline", {
                  disabled: inputDisabled,
                })}
              />
            </div>
          </div>

          {/* <div className="mt-3 mx-3">
            <label htmlFor="">Company Logo</label> <br />
            <input
              className="w-100 p-2 mt-2"
              type="file"
              onChange={(e) => {
                handleFile(e);
              }}
              {...register("image", {
                required: true,
                disabled: inputDisabled,
              })}
            />
          </div> */}

          <div className="mt-3 mx-3">
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
                    disabled: inputDisabled,
                  })}
                />
                <div className="logo-btn p-3">Browse</div>
              </label>
              <small className="logo-details">Maximum file size: 100 MB.</small>
            </div>
          </div>

          {uploading ? (
            <p>Uploading.....</p>
          ) : (
            <div className="w-100 my-3 text-center">
              <input
                disabled={inputDisabled}
                className="update-btn py-2 mt-4 w-25"
                style={{
                  backgroundColor: "purple",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                type="submit"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddJob;
