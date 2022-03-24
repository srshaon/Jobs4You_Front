import "./UploadViewResume.css";

import { Button, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const UploadViewResume = () => {
  const [resumepdfFile, setResumePdfFile] = useState([]);
  const [resumeView, setResumeView] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/resume")
      .then((res) => res.json())
      .then((data) => setResumeView(data));
  }, []);

  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumepdfFile) {
      return;
    }
    const formData = new FormData();

    formData.append("email", user.email);

    formData.append("resumepdfFile", resumepdfFile);

    fetch("https://afternoon-headland-45054.herokuapp.com/resume", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully uploaded");
          fetch("https://afternoon-headland-45054.herokuapp.com/resume")
            .then((res) => res.json())
            .then((data) => setResumeView(data));
        }
        e.target.reset();
      });
  };
  const myResume = resumeView.filter((resume) => resume.email === user.email);
  // console.log(myResume)

  // Delete Resume
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure that you want to delete?");
    if (proceed) {
      const url = `https://afternoon-headland-45054.herokuapp.com/resume/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = resumeView.filter((resume) => resume._id !== id);
            setResumeView(remaining);
          }
        });
    }
  };

  if (resumeView.length == 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="overflow-hidden py-5 mb-5">
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} action="" method="POST">
          <input
            style={{ visibility: "hidden" }}
            className="sadiaInput"
            value={user.email}
            aria-describedby="helpId6"
          />

          <input
            className="sadiaInput"
            onChange={(e) => setResumePdfFile(e.target.files[0])}
            type="file"
            required
          />

          <div className="d-flex justify-content-center">
            {myResume.length === 0 ? (
              <Button
                className="text-white w-50 p-3"
                type="submit"
                style={{
                  backgroundColor: "purple",
                  border: "none",
                  borderRadius: "7px",
                }}
              >
                Upload Resume
              </Button>
            ) : (
              <Button
                disabled
                className="submit-btn p-3 text-white border-0 w-50 "
                style={{
                  border: "none",
                  borderRadius: "7px",
                }}
                type="submit"
              >
                Upload Resume
              </Button>
            )}

            <div></div>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        {myResume.map((resume) => (
          <div className="py-5 mb-5 text-center">
            <Button
              onClick={() => handleDelete(resume._id)}
              className="my-4 text-white border-0 p-3 w-25"
              style={{ backgroundColor: "purple" }}
              type="submit"
            >
              Delete & Upload New
            </Button>
            <embed
              className=" ms-3 me-3"
              style={{ width: "1000px", height: "100vh" }}
              src={`data:application/pdf;base64,${resume.resume}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadViewResume;
