import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import useAuth from "../../hooks/useAuth";

const ProfileForm2 = (props) => {
  const { role, setRole, user, setUser } = useAuth();
  const [condition, setCondition] = useState("");
  // const [condition, setCondition] = useState("admin");
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    console.log(data);
    actions.updateAction(data);
    const splitBio = data?.bio?.split(/\r?\n/g);
    const newData = { ...data, bio: splitBio };

    console.log(newData);
    // console.log(newData2);
    console.log(data);

    props.history.push("./ProfileForm3");
    console.log(data);
    console.log(state.data);
    console.log(data);
    console.log(state);
    console.log(actions);
  };
  useEffect(() => {
    fetch(`https://afternoon-headland-45054.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCondition(data.admin)


      })
  }, [user.email])
  console.log(role);
  let loadFormCondition = ''
  if (role !== "") {
    loadFormCondition = role;
    console.log(role);
  }
  else {
    loadFormCondition = condition;
    console.log(condition)
  }
  // if (role === '') {
  //   return <Spinner animation="border" variant="danger" />
  // }
  console.log(loadFormCondition);
  return (
    <div className="profile-form-div">
      <div>
        {loadFormCondition === "company" && (
          <div>
            <div className="profile-form-div">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="profile-form-container">
                    <div class="profile-form-inputs">
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <textarea
                          rows={8}
                          className="profile-form2-bio-textarea"
                          placeholder="About Company Culture"
                          defaultValue=""
                          {...register("acc", { required: true })}
                        />
                      </div>
                      <br />
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <textarea
                          rows={5}
                          className="profile-form2-hobby-textarea"
                          placeholder="Company Vision"
                          defaultValue=""
                          {...register("vision", { required: true })}
                        />
                      </div>
                      <br />
                      <div className="profile-form-input-pair d-flex justify-content-center">
                        <textarea
                          rows={5}
                          className="profile-form2-hobby-textarea"
                          placeholder="Achievements / Awards"
                          defaultValue=""
                          {...register("achievements", { required: true })}
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
        {loadFormCondition === "seeker" && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="profile-form-container mt-3 mb-5">
                <div class="profile-form-inputs">
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <textarea
                      rows={8}
                      className="profile-form2-bio-textarea"
                      placeholder="Your Bio"
                      defaultValue=""
                      {...register("bio", { required: true })}
                    />
                  </div>
                  <br />
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <textarea
                      rows={5}
                      className="profile-form2-hobby-textarea"
                      placeholder="Extra Curricular Activities / Hobbies"
                      defaultValue=""
                      {...register("hobbies", { required: true })}
                    />
                  </div>
                  <br />
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <textarea
                      rows={5}
                      className="profile-form2-hobby-textarea"
                      placeholder="Achievements / Awards"
                      defaultValue=""
                      {...register("achievements", { required: true })}
                    />
                  </div>
                  <div className="profile-form-input-pair d-flex justify-content-center">
                    <input
                      className="profile-form-input"
                      placeholder="Job Preference"
                      defaultValue={""}
                      {...register("preference", { required: true })}
                    />
                    <input
                      className="profile-form-input"
                      placeholder="Available For"
                      defaultValue={""}
                      {...register("available", { required: true })}
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
        )}
      </div>
    </div>
  );
};

export default ProfileForm2;
