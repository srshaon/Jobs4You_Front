import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddJob.css";

const AddJob = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const requirements = data.additionalRequirements.split(/\r?\n/g);
    const newData = { ...data, additionalRequirements: requirements };
    console.log(newData);
    axios.post("http://localhost:5000/jobs", newData).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-job py-5">
      <h2 className="text-center mb-4" style={{ color: "brown" }}>
        Post A Job
      </h2>
      <div className="jobpost-form mx-auto">
        <h4 className="px-5 mx-5 pt-5">Job Details</h4>
        <hr />
        <form className="py-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("company", { required: true, maxLength: 20 })}
            placeholder="Company name"
          />
          <input
            {...register("job", { required: true, maxLength: 20 })}
            placeholder="Job Title"
          />
          <input
            type="name"
            {...register("jobLocation")}
            placeholder="Location"
          />
          <input
            {...register("category", { required: true, maxLength: 20 })}
            placeholder="Category"
          />
          {/* <textarea
            rows={3}
            {...register("description", { required: true, maxLength: 50 })}
            placeholder="Description"
          ></textarea> */}

          <textarea
            rows={3}
            {...register("additionalRequirements", {
              required: true,
            })}
            placeholder="Additional req (use Enter key to add each point)"
          ></textarea>

          <input type="number" {...register("vacancy")} placeholder="Vacancy" />
          <input
            type="name"
            {...register("experienceRequirements")}
            placeholder="Experience Req"
          />

          <input type="number" {...register("salary")} placeholder="Salary $" />

          <input className="submit-btn p-2" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
