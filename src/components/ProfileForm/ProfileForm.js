import "./ProfileForm.css";
import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const ProfileForm = (props) => {
  const { register, handleSubmit } = useForm();

  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./profileForm2");
    console.log(data);
    console.log(state);
    console.log(actions);
  };

  return (
    <div className="profile-form-div main-container">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="profile-form-container">
            <div class="profile-form-inputs">
              <div className="profile-form-input-pair d-flex justify-content-center">
                <input
                  className="profile-form-input"
                  placeholder="First Name"
                  defaultValue={""}
                  {...register("fname", { required: true })}
                />
                <input
                  className="profile-form-input"
                  placeholder="Last Name"
                  defaultValue={""}
                  {...register("lname", { required: true })}
                />
              </div>

              <div className="profile-form-input-pair d-flex justify-content-center">
                <input
                  className="profile-form-input"
                  placeholder="Date of Birth"
                  defaultValue={""}
                  {...register("dob", { required: true })}
                />
                <input
                  className="profile-form-input"
                  placeholder="Gender"
                  defaultValue={""}
                  {...register("gender", { required: true })}
                />
              </div>
              <div className="profile-form-input-pair d-flex justify-content-center">
                <input
                  className="profile-form-input"
                  placeholder="Nationality"
                  defaultValue={""}
                  {...register("nationality", { required: true })}
                />
                <input
                  className="profile-form-input"
                  placeholder="NID Number"
                  defaultValue={""}
                  {...register("nid", { required: true })}
                />
              </div>
              <div className="profile-form-input-pair d-flex justify-content-center">
                <input
                  className="profile-form-input"
                  placeholder="Passport No."
                  defaultValue={""}
                  {...register("passport", { required: true })}
                />
                <input
                  className="profile-form-input"
                  placeholder="Passport Issue Date"
                  defaultValue={""}
                  {...register("passportIssueDate", { required: true })}
                />
              </div>

              <div className="profile-form-input-pair d-flex justify-content-center">
                <input
                  className="profile-form-input"
                  placeholder="Primary Email"
                  defaultValue={""}
                  {...register("pEmail", { required: true })}
                />
                <input
                  className="profile-form-input"
                  placeholder="Secondary Email"
                  defaultValue={""}
                  {...register("sEmail", { required: true })}
                />
              </div>
              <div className="profile-form-input-pair d-flex justify-content-center">
                <input
                  className="profile-form-input"
                  placeholder="Primary Contact"
                  defaultValue={""}
                  {...register("pContact", { required: true })}
                />
                <input
                  className="profile-form-input"
                  placeholder="Emergency Contact"
                  defaultValue={""}
                  {...register("eContact", { required: true })}
                />
              </div>
              <div className="profile-form-input-pair d-flex justify-content-center">
                <textarea
                  rows={2}
                  className="profile-form1-address-textarea"
                  placeholder="Address"
                  defaultValue=""
                  {...register("address", { required: true })}
                />
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
    </div>
  );
};

export default ProfileForm;
