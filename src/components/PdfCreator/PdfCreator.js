import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import ModalMessage from "./../ModalMessage/ModalMessage";
import { saveAs } from "file-saver";
import "./PdfCreator.css";
import useImageVideoUpload from "./../../hooks/useImageVideoUpload";

const PdfCreator = () => {
  const [downloading, setDownloading] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const { handleFile } = useImageVideoUpload(setImgUrl, setUploading);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const info = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: new Date().toLocaleString(),
      // email:user.email,
      img: imgUrl,
      location: data.location,
      education: data.education,
      expYear: data.expYear,
      company: data.company,
      designation: data.designation,
      skills: data.skills,
      languages: data.languages,
      institute: data.institute,
    };
    setDownloading(true);
    axios
      .post("https://jobs4you.onrender.com/createPdf", info)
      .then((response) => {
        axios
          .get("https://jobs4you.onrender.com/fetch-pdf", {
            responseType: "blob",
          })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "Resume.pdf");
            setDownloading(false);
            console.log(res.data);
            handleShow();
            reset();
          });
      });
  };

  console.log(imgUrl);
  return (
    <div className="pb-5">
      {downloading && (
        <h3 className="mb-2 mt-5 text-center" style={{ color: "brown" }}>
          Resume Downloading....
        </h3>
      )}
      <ModalMessage
        show={show}
        setShow={setShow}
        message={"Resume Downloaded"}
      />
      <div className="">
        <h4
          className="p-3 text-white"
          style={{ backgroundColor: "var(--color-primary-dark)" }}
        >
          Create Your Resume
        </h4>
        <div className="resume-form rounded w-75 mx-auto mt-5">
          <form className="p-5 jobpost-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Your Name</label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true })}
            />

            <label className="mt-3" htmlFor="">
              Your email
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="alpha@example.com"
              {...register("email", { required: true })}
            />

            <label className="mt-3" htmlFor="">
              Location
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="e.g. 'Dhaka', 'Jessore'"
              {...register("location", { required: true })}
            />

            <label className="mt-3" htmlFor="">
              Education
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Highest Education Level"
              {...register("education", { required: true })}
            />
            <label className="mt-3" htmlFor="">
              Institute
            </label>
            <input
              className="form-control"
              type="text"
              {...register("institute", { required: true })}
            />

            <label className="mt-3" htmlFor="">
              Experience
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="1-2 Years (optional)"
              {...register("expYear")}
            />
            <label className="mt-3" htmlFor="">
              Company Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="(optional)"
              {...register("company")}
            />
            <label className="mt-3" htmlFor="">
              Designation
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="e.g.Web Developer(optional)"
              {...register("designation")}
            />
            <label className="mt-3" htmlFor="">
              Skills
            </label>
            <input
              className="form-control "
              type="text"
              {...register("skills", { required: true })}
            />
            <label className="mt-3" htmlFor="">
              Languages
            </label>
            <input
              className="form-control"
              type="text"
              {...register("languages", { required: true })}
            />
            <label className="mt-3" htmlFor="">
              Photo
            </label>
            <input
              className="form-control"
              type="file"
              onChange={(e) => {
                handleFile(e);
              }}

            />
            {errors.exampleRequired && <span>This field is required</span>}
            {uploading ? (
              <p>Uploading....</p>
            ) : (
              <input
                className="form-control w-25 mt-4 mx-auto text-white border-0 p-2"
                style={{
                  fontWeight: "700",
                  fontSize: "18px",
                  background: "purple",
                }}
                type="Submit"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PdfCreator;
