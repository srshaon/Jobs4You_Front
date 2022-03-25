import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";
import "./Apply.css";

const Apply = () => {
  const location = useLocation();
  const history = useHistory();
  const { jobId, percentage } = queryString.parse(location.search);
  // const history = useHistory()
  // const location = useLocation()
  // const url = location.state?.from || "/myjobs"
  // for onchange event
  const [resumepdfFile, setResumePdfFile] = useState(null);
  const [coverLetterpdfFile, setCoverLetterPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({});
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [jobs, setJobs] = useState({});
  const [candidates, setCandidates] = useState([]);
  // const [singleCandidate, setSingleCandidate] = useState({})

  const { user, setControl } = useAuth();
  /// Testing
  ////Testing2
  useEffect(() => {
    fetch(`https://afternoon-headland-45054.herokuapp.com/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // Candidate Fetch
  useEffect(() => {
    fetch(`https://afternoon-headland-45054.herokuapp.com/allprofiles`)
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, [user?.email]);

  const singleCandidate = candidates.find((sc) => sc.pEmail === user.email);
  //console.log(singleCandidate?.fname)
  //  AGE Calculate

  const current = new Date();
  //const Todaydate = `${current.getFullYear()}- ${current.getMonth()+1}-${current.getDate()}`;
  const candidateDate = singleCandidate?.dob;
  let today = new Date(),
    //birthay has 'Dec 25 1998'
    Cdob = new Date(candidateDate),
    //difference in milliseconds
    diff = today.getTime() - Cdob.getTime(),
    //convert milliseconds into years
    years = Math.floor(diff / 31556736000),
    //1 day has 86400000 milliseconds
    days_diff = Math.floor((diff % 31556736000) / 86400000),
    //1 month has 30.4167 days
    months = Math.floor(days_diff / 30.4167),
    days = Math.floor(days_diff % 30.4167);

  //console.log(`${years} years ${months} months ${days} days`);

  // setAge(`${years} ${days}`)
  // console.log(age?.years)

  // form submit
  //console.log(jobs._id)

  const handleReplace = (e) => {
    history.replace('/dashboard');
    setControl("editCandidate")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumepdfFile && coverLetterpdfFile) {
      return;
    }
    console.log(jobs?.applicationDeadline);
    const formData = new FormData();
    const jobID1 = jobs?._id;

    console.log(jobID1);
    formData.append("jobId", jobID1);
    formData.append("job", jobs?.job);
    formData.append("company", jobs?.company);
    formData.append("jobLocation", jobs?.jobLocation);
    formData.append("employmentStatus", jobs?.employmentStatus);
    formData.append("applicationDeadline", jobs?.applicationDeadline);
    formData.append("percentage", percentage);
    formData.append("image", jobs.image);
    formData.append("firstName", singleCandidate?.fname);
    formData.append("lastName", singleCandidate?.lname);
    formData.append("email", singleCandidate?.pEmail);
    formData.append("contactNo", singleCandidate?.pContact);
    formData.append("dob", singleCandidate?.dob);
    formData.append("age", `${years} years `);
    formData.append("linkedIn", linkedIn);
    formData.append("portfolio", portfolio);

    formData.append("resumepdfFile", resumepdfFile);
    formData.append("coverLetterpdfFile", coverLetterpdfFile);

    fetch("https://afternoon-headland-45054.herokuapp.com/applyList", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          fetch('https://afternoon-headland-45054.herokuapp.com/notifications', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email, message: `You applied at ${jobs?.company} as ${jobs?.job}`, link: 'dashboard', portion: 'myjobs' })
          })
          .then(res => res.json())
          .then(data => console.log(data));

          fetch('https://afternoon-headland-45054.herokuapp.com/notifications', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: jobs?.email, message: `${user?.displayName} has applied in your company as ${jobs?.job}`, link: 'dashboard', portion: 'candidates' })
          })
          .then(res => res.json())
          .then(data => console.log(data)); 
          alert("successfully applied");
          e.target.reset();
        }
      });
    // history.push(url)
  };
  // console.log(resumepdfFile);
  // console.log(coverLetterpdfFile);
  // console.log(firstName);
  // console.log(jobs.employmentStatus)
  if (singleCandidate === undefined) {
    return (
      <div style={{minHeight: '70vh'}} className="d-flex justify-content-center align-items-center text-center">
        <div>
          <p className="message-anim">You didn't complete your profile. Please complete it <button style={{background: 'white', border: 'none', color: 'blue'}} onClick={handleReplace}>here</button></p>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  return (
    <div className="bodyShadow">
      <div className="container-fluid ">
        <div id="myForms" className="row ">
          <div id="card1" className="">
            <div className="card-body">
              <form onSubmit={handleSubmit} action="" method="POST">
                <div className="row applyform1">
                  <input
                    style={{ visibility: "hidden" }}
                    className="sadiaInput"
                    aria-describedby="helpId1"
                    required
                    value={percentage}
                  />
                  <h3
                    className="d-flex justify-content-center my-4"
                    style={{ color: "brown" }}
                  >
                    Personal Details
                  </h3>

                  <div className="col col-md-6 form-data">
                    <div className="form-group">
                      <h6
                        id="helpId1"
                        className=" d-flex justify-content-center"
                      >
                        Candidate's First Name
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        id="name"
                        aria-describedby="helpId1"
                        required
                        value={singleCandidate?.cname}
                      />
                    </div>

                    <div className="form-group">
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
                        value={singleCandidate?.dob}
                        name="cdob"
                        id="cdob"
                        aria-describedby="helpId4"
                        required
                      />
                    </div>

                    <div className="form-group">
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
                        value={singleCandidate?.pEmail}
                        required
                      />
                    </div>
                    <div className="form-group pt-3">
                      <h6
                        id="helpId"
                        className=" d-flex justify-content-center"
                      >
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

                    <div className="form-group pt-3">
                      <h6
                        id="helpId"
                        className=" d-flex justify-content-center"
                      >
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
                  <div className="col col-md-6 form-data">
                    <div className="form-group">
                      <h6
                        id="helpId1"
                        className="d-flex justify-content-center"
                      >
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
                        value={singleCandidate?.lname}
                      />
                      <p required placeholder="Enter Name"></p>
                    </div>
                    <div className="form-group">
                      <h6
                        id="helpId2"
                        className="d-flex justify-content-center"
                      >
                        Candidate's Age
                        <sub style={{ color: "brown", fontSize: 25 }}>*</sub>
                      </h6>
                      <input
                        className="sadiaInput"
                        name="cage"
                        id="cage"
                        aria-describedby="helpId2"
                        value={`${years} years`}
                        required
                      />
                    </div>
                    <div className="form-group">
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
                        value={singleCandidate?.pContact}
                        required
                      />
                    </div>

                    <div className="form-group pt-3">
                      <h6
                        id="helpId"
                        className=" d-flex justify-content-center"
                      >
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
                    <div className="form-group pt-3">
                      <h6
                        id="helpId"
                        className=" d-flex justify-content-center"
                      >
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
                  <Button className="submit-btn p-3 text-white" type="submit">
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
