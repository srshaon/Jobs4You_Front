import "./ProfileForm.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import useAuth from "../../hooks/useAuth";
import { Spinner } from "react-bootstrap";
import useImageVideoUpload from "./../../hooks/useImageVideoUpload";

const ProfileForm = (props) => {
  const { role, setRole, user, setUser } = useAuth();
  const [imgUrl, setImgUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleFile } = useImageVideoUpload(setImgUrl, setUploading);
  console.log(user);
  console.log(user.email, user.displayName);
  const { register, handleSubmit } = useForm();
  const [condition, setCondition] = useState("");
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    data.img = imgUrl;
    actions.updateAction(data);
    props.history.push("./ProfileForm2");
    console.log(data);
    console.log(state);
    console.log(actions);
    if (role === 'company') {
      state.data.cname = user.displayName
    }
  };
  useEffect(() => {
    fetch(`https://jobs4you.onrender.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCondition(data.admin);
      });
  }, [user.email]);
  console.log(role);
  let loadFormCondition = "";
  if (role !== "") {
    loadFormCondition = role;
    console.log(role);
  } else {
    loadFormCondition = condition;
    console.log(condition);
  }
  // if (role === '') {
  //   return <Spinner animation="border" variant="danger" />
  // }
  console.log(loadFormCondition);

  return (
    <div className="profile-form-div main-container overflow-hidden">
      <div>
        {loadFormCondition === "company" && (
          <div>
            <div className="profile-form-div">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="profile-form-container">
                    <h2 style={{ color: "brown" }}>Company Profile</h2>
                    <div className="profile-form-inputs">
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <div>
                          <label htmlFor="" className="ms-3">
                            Company Name
                          </label>
                          <input
                            readOnly
                            className="profile-form-input"
                            defaultValue={user.displayName}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="ms-3">
                            Founded
                          </label>
                          <input
                            type={"date"}
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("founded", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <div>
                          <label htmlFor="" className="ms-3">
                            Country of Origin
                          </label>
                          <input
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("country", { required: true })}
                          />
                        </div>

                        <div>
                          <label htmlFor="" className="ms-3">
                            Industry
                          </label>
                          <input
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("industry", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <div>
                          <label htmlFor="" className="ms-3">
                            Website Link
                          </label>
                          <input
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("website", { required: true })}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="ms-3">
                            Business License No.
                          </label>
                          <input
                            type={"number"}
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("bln", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <div>
                          <label htmlFor="" className="ms-3">
                            Official Email
                          </label>
                          <input
                            readOnly
                            className="profile-form-input"
                            defaultValue={user.email}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="ms-3">
                            Contact No.
                          </label>
                          <input
                            type={"number"}
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("contact", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <div>
                          <label htmlFor="" className="ms-3">
                            Number of Employees
                          </label>
                          <input
                            type={"number"}
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("noe", { min: 0, required: true })}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="ms-3">
                            Number of Branch/es
                          </label>
                          <input
                            type={"number"}
                            className="profile-form-input"
                            defaultValue={""}
                            {...register("nob", { min: 0, required: true })}
                          />
                        </div>
                      </div>

                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <div>
                          <label htmlFor="">Headquarter Address</label>
                          <textarea
                            rows={4}
                            className="profile-form1-headquarter-textarea"
                            defaultValue=""
                            {...register("headquarter", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="profile-form-input-pair  mt-2 mx-4">
                        <div>
                          <label className="ms-1" htmlFor="Company Logo">
                            Company Logo
                          </label>
                          <input
                            className="company-logo form-control p-4 ms-1"
                            type="file"
                            onChange={(e) => {
                              handleFile(e);
                            }}
                          />
                        </div>
                      </div>

                      <div className="profile-form-button-div d-flex justify-content-center">
                        <button
                          className="profile-form-button p-3"
                          type="submit"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {loadFormCondition === "seeker" && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="profile-form-container mt-3 mb-5">
                <h2 style={{ color: "brown" }}>User Profile</h2>
                <div className="profile-form-inputs">
                  <div className="my-3">
                    <div className="">
                      <label htmlFor="" className="ms-5">
                        Upload Image
                      </label>
                      <input
                        className="w-75 mt-2 ms-5 py-3 px-5 form-control user-image-field"
                        type="file"
                        onChange={(e) => {
                          handleFile(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="profile-form-input-pair d-md-flex justify-content-center">
                    <div>
                      <label htmlFor="" className="ms-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("fname", { required: true })}

                      />
                    </div>
                    <div>
                      <label htmlFor="" className="ms-3">
                        Last Name
                      </label>
                      <input
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("lname", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <div>
                      <label htmlFor="" className="ms-3">
                        Date of Birth
                      </label>
                      <input
                        type={"date"}
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("dob", { required: true })}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="ms-3">
                        Gender
                      </label>
                      <select
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("gender")}
                      >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <div>
                      <label htmlFor="" className="ms-3">
                        Citizen
                      </label>
                      <input
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("nationality", { required: true })}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="ms-3">
                        NID Number
                      </label>
                      <input
                        type={"number"}
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("nid", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <div>
                      <label htmlFor="" className="ms-3">
                        Passport No
                      </label>
                      <input
                        type={"text"}
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("passport", { required: true })}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="ms-3">
                        Passport Issue Date
                      </label>
                      <input
                        type={"date"}
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("passportIssueDate", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <div>
                      <label htmlFor="" className="ms-3">
                        Primary Email
                      </label>
                      <input
                        readOnly
                        className="profile-form-input"
                        defaultValue={user.email}
                        {...register("pEmail", { required: true })}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="ms-3">
                        Secondary Email
                      </label>
                      <input
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("sEmail", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <div>
                      <label htmlFor="" className="ms-3">
                        Primary Contact
                      </label>
                      <input
                        type={"number"}
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("pContact", { required: true })}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="ms-3">
                        Emergency Contact
                      </label>
                      <input
                        type={"number"}
                        className="profile-form-input"
                        defaultValue={""}
                        {...register("eContact", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="profile-form-input-pair">
                    <label htmlFor="" className="ms-4 ps-2">
                      Address
                    </label>
                    <div className="profile-form-input-pair d-flex justify-content-center">
                      <input
                        className="profile-form-input"
                        placeholder="street no."
                        defaultValue={""}
                        {...register("address", { required: true })}
                      />
                      <input
                        className="profile-form-input"
                        placeholder="city"
                        defaultValue={""}
                        {...register("address", { required: true })}
                      />
                    </div>
                    <div className="profile-form-input-pair d-flex justify-content-center">
                      <input
                        className="profile-form-input"
                        placeholder="province"
                        defaultValue={""}
                        {...register("address", { required: true })}
                      />
                      <input
                        className="profile-form-input"
                        placeholder="country"
                        defaultValue={""}
                        {...register("address", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="profile-form-button-div d-flex justify-content-center">
                    <button className="profile-form-button p-3" type="submit">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
