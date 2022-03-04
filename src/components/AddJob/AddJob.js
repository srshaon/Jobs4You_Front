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
    axios.post("https://afternoon-headland-45054.herokuapp.com/jobs", newData).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-job py-5">
      <h2 className="text-center">Let's Get Started</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <textarea
          {...register("description", { required: true, maxLength: 50 })}
          placeholder="description"
        ></textarea>

        <textarea
          {...register("additionalRequirements", {
            required: true,
          })}
          placeholder="additional req"
        ></textarea>

        <input type="number" {...register("vacancy")} placeholder="vacancy" />
        <input
          type="name"
          {...register("experienceRequirements")}
          placeholder="Experience Req"
        />

        <input type="number" {...register("salary")} placeholder="Salary $" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddJob;
