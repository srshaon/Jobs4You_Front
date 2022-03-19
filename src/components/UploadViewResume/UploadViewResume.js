import "./UploadViewResume.css";

import { Button, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const UploadViewResume = () => {
  const [resumepdfFile, setResumePdfFile] = useState([]);
  const [resumeView, setResumeView] = useState([]);
  
  
  useEffect(() => {
    fetch("http://localhost:5000/resume")
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

    fetch("http://localhost:5000/resume", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully uplodated");
          fetch('http://localhost:5000/resume')
          .then(res => res.json())
          .then(data => setResumeView(data))
        }
        e.target.reset();
      });
  };
  const myResume = resumeView.filter(resume => (resume.email === user.email))
  // console.log(myResume)

  // Delete Resume
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm('are you sure?');
    if (proceed) {
        const url = `https://afternoon-headland-45054.herokuapp.com/resume/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = resumeView.filter(resume => resume._id !== id);
                    setResumeView(remaining);
                }
            })
    }

    
    
}

    
if(resumeView.length==0){
  return  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
}

  return (
    <div>
      <div className="d-flex justify-content-center mb-5 pt-3 ">
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
           
           
                {
                  (myResume.length===0) ?
                  
                    <Button  className="submit-btn p-2 text-white" type="submit">
                   Upload
                 </Button> :
                 <Button disabled className="submit-btn p-2 text-white" type="submit">
                   Upload
                 </Button>
                 
                 }
              
            
            
           
            <div>
           
            </div>
          </div>
        </form>
        
      </div>
      <div className="d-flex justify-content-center">
        {myResume.map((resume) => (
          
          <div className="mb-5">
          <Button  onClick={() => handleDelete(resume._id)}  className="submit-btn p-2 mb-3 text-white" type="submit">
              Delete & Upload New
            </Button>
             <embed
              className="mb-5 ps-4"
              style={{ width: "1000px", height: "500px" }}
              src={`data:application/pdf;base64,${resume.resume}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadViewResume;
