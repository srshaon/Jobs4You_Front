import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Apply.css";

const Apply = () => {
  // for onchange event
  const [resumepdfFile, setResumePdfFile] = useState(null);
  const [coverLetterpdfFile, setCoverLetterPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumepdfFile && coverLetterpdfFile) {
      return;
    }
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("contactNo", contactNo);
    formData.append("dob", dob);
    formData.append("age", age);
    formData.append("linkedIn", linkedIn);
    formData.append("portfolio", portfolio);

    formData.append("resumepdfFile", resumepdfFile);
    formData.append("coverLetterpdfFile", coverLetterpdfFile);

    fetch("https://still-cliffs-68775.herokuapp.com/applyList", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully applied");
        }
      });
  };
  console.log(resumepdfFile);
  console.log(coverLetterpdfFile);
  console.log(firstName);

  return (
    <div className="bodyShadow">
      <div class="container-fluid ">
        <div id="myForms" class="row ">
          <div id="card1" class="">
            <div class="card-body">
              <form onSubmit={handleSubmit} action="" method="POST">
                <div class="row applyform1">
                  <h3
                    className="d-flex justify-content-center my-4"
                    style={{ color: "brown" }}
                  >
                    Personal Details
                  </h3>
                  <div class="col col-md-6 form-data">
                    <div class="form-group">
                      <h6 id="helpId1" class=" d-flex justify-content-center">
                        Candidate's First Name
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        aria-describedby="helpId1"
                        required
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div class="form-group">
                      <h6
                        id="helpId4"
                        className="d-flex justify-content-center pt-3"
                      >
                        Candidate's DOB
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setDob(e.target.value)}
                        type="date"
                        name="cdob"
                        id="cdob"
                        aria-describedby="helpId4"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <h6
                        id="helpId6"
                        className="d-flex justify-content-center pt-3"
                      >
                        Candidate's E-mail
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="cemail"
                        id="cemail"
                        aria-describedby="helpId6"
                        placeholder="Enter your e-mail"
                        required
                      />
                    </div>
                    <div class="form-group pt-3">
                      <h6 id="helpId" class=" d-flex justify-content-center">
                        Candidate's LinkedIn Profile
                        <sub style={{ color: "brown", fontSize: 14 }}>
                          (optional)
                        </sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setLinkedIn(e.target.value)}
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        aria-describedby="helpId6"
                        placeholder="Enter your linkedIn url"
                        required
                      />
                    </div>

                    <div class="form-group pt-3">
                      <h6 id="helpId" class=" d-flex justify-content-center">
                        Candidate's Resume
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setResumePdfFile(e.target.files[0])}
                        type="file"
                        required
                      />

                      <br />
                      {pdfFileError && (
                        <div className="error-msg">{pdfFileError}</div>
                      )}
                    </div>
                  </div>
                  <div class="col col-md-6 form-data">
                    <div class="form-group">
                      <h6 id="helpId1" class="d-flex justify-content-center">
                        Candidate's Last Name
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="cname"
                        id="cname"
                        aria-describedby="helpId1"
                        required
                        placeholder="Enter your last name"
                      />
                      <p required placeholder="Enter Name"></p>
                    </div>
                    <div class="form-group">
                      <h6
                        id="helpId2"
                        className="d-flex justify-content-center"
                      >
                        Candidate's Age
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        name="cage"
                        id="cage"
                        aria-describedby="helpId2"
                        placeholder="Enter your age"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <h6
                        id="helpId5"
                        className=" d-flex justify-content-center pt-3"
                      >
                        Candidate's Contact No
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setContact(e.target.value)}
                        type="text"
                        name="mobile"
                        id="mobile"
                        aria-describedby="helpId5"
                        placeholder="Enter your contact no"
                        required
                      />
                    </div>

                    <div class="form-group pt-3">
                      <h6 id="helpId" class=" d-flex justify-content-center">
                        Candidate's Portfolio
                        <sub style={{ color: "brown", fontSize: 14 }}>
                          (optional)
                        </sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setPortfolio(e.target.value)}
                        type="text"
                        name="portfolio"
                        id="portfolio"
                        aria-describedby="helpId6"
                        placeholder="Enter your portfolio url"
                      />
                    </div>
                    <div class="form-group pt-3">
                      <h6 id="helpId" class=" d-flex justify-content-center">
                        Candidate's Cover Letter
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) =>
                          setCoverLetterPdfFile(e.target.files[0])
                        }
                        type="file"
                        required
                      />

                      <br />
                      {pdfFileError && (
                        <div className="error-msg">{pdfFileError}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center pt-3 ">
                  <Button className="apply-btn text-white" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
