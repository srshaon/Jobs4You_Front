import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddJob.css";

const AddJob = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("submitted");
    axios.post("http://localhost:5000/jobs", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-job py-5">
      <h2 className="text-center">Let's Get Started</h2>
      <div>
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
            type="jobLocation"
            {...register("name")}
            placeholder="Location"
          />
          <input
            {...register("category", { required: true, maxLength: 20 })}
            placeholder="Category"
          />
          {/* <select {...register("category")}>
          <option value="commercial">Commercial</option>
          <option value="bank">Bank</option>
          <option value="research">Research</option>
        </select> */}
          <textarea
            type="text"
            {...register("description", { required: true, maxLength: 50 })}
            placeholder="Description"
          ></textarea>
          <input type="number" {...register("vacancy")} placeholder="Vacancy" />
          <input
            type="name"
            {...register("experienceRequirements")}
            placeholder="Experience Req"
          />
          <input type="number" {...register("salary")} placeholder="Salary $" />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
