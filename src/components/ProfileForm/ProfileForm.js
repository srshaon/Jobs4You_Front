import "./ProfileForm.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import useAuth from "../../hooks/useAuth";

const ProfileForm = (props) => {
  const { role, setRole } = useAuth();
  const { register, handleSubmit } = useForm();
  const [condition, setCondition] = useState("user");
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./ProfileForm2");
    console.log(data);
    console.log(state);
    console.log(actions);
  };

  return (
    <div className="profile-form-div main-container overflow-hidden">
      <div>
        {role === "company" && (
          <div>
            <div className="profile-form-div">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="profile-form-container">
                    <h2>Company Profile</h2>
                    <div class="profile-form-inputs">
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <input
                          className="profile-form-input"
                          placeholder="Company Name"
                          defaultValue={""}
                          {...register("cname", { required: true })}
                        />
                        <input
                          className="profile-form-input"
                          placeholder="Founded On"
                          defaultValue={""}
                          {...register("founded", { required: true })}
                        />
                      </div>

                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <input
                          className="profile-form-input"
                          placeholder="Country Of Origin"
                          defaultValue={""}
                          {...register("country", { required: true })}
                        />
                        <input
                          className="profile-form-input"
                          placeholder="Industry"
                          defaultValue={""}
                          {...register("industry", { required: true })}
                        />
                      </div>
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <input
                          className="profile-form-input"
                          placeholder="Website"
                          defaultValue={""}
                          {...register("website", { required: true })}
                        />
                        <input
                          className="profile-form-input"
                          placeholder="Business License No."
                          defaultValue={""}
                          {...register("bln", { required: true })}
                        />
                      </div>
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <input
                          className="profile-form-input"
                          placeholder="Official Email"
                          defaultValue={""}
                          {...register("email", { required: true })}
                        />
                        <input
                          type={"number"}
                          className="profile-form-input"
                          placeholder="Contact No."
                          defaultValue={""}
                          {...register("contact", { required: true })}
                        />
                      </div>

                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <input
                          className="profile-form-input"
                          placeholder="Number Of Employees"
                          defaultValue={""}
                          {...register("noe", { required: true })}
                        />
                        <input
                          className="profile-form-input"
                          placeholder="Number of Branch/es"
                          defaultValue={""}
                          {...register("nob", { required: true })}
                        />
                      </div>

                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <textarea
                          rows={4}
                          className="profile-form1-headquarter-textarea"
                          placeholder="Headquarter"
                          defaultValue=""
                          {...register("headquarter", { required: true })}
                        />
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

        {role === "seeker" && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="profile-form-container mt-3 mb-5">
                <h2 style={{ color: "brown" }}>User Profile</h2>
                <div class="profile-form-inputs">
                  <div className="profile-form-input-pair d-flex justify-content-center">
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
                        type={"number"}
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
                        className="profile-form-input"
                        defaultValue={""}
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
