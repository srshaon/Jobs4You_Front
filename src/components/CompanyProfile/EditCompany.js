import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useUpdateCompanyMutation } from "../../Redux-handler/ManageProfiles";
import { Link } from "react-router-dom";
import "./EditCompany.css";
import { Col,Button } from "react-bootstrap";

import { TiArrowForward } from "react-icons/ti";
import { HiPlusCircle } from 'react-icons/hi';
import useAuth from "../../hooks/useAuth";

const EditCompany = ({ info }) => {
  const history = useHistory();
  const{role}=useAuth()
  console.log(role)
  const [profileInfo, setProfileInfo] = useState({
    cname: "",
    country: "",
    email: "",
    contact: "",
    industry: "",
    nob: "",
    noe: "",
    website: "",
  });

  const [updateProfile, { isLoading }] = useUpdateCompanyMutation();
  useEffect(() => {
    if (info) {
      const { cname, country, email, contact, industry, nob, noe, website } =
        info;
      setProfileInfo({
        cname,
        country,
        email,
        contact,
        industry,
        nob,
        noe,
        website,
      });
    }
  }, [info]);
  const navigateToForm=()=>{
    history.push('/profileForm')
  }

  const handleChange = (e) =>
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("nupa");
    const { cname, country, loginEmail, contact, industry, nob, noe, website } =
      profileInfo;
    await updateProfile({
      _id: info._id,
      cname,
      country,
      loginEmail,
      contact,
      industry,
      nob,
      noe,
      website,
    });
  };

  return (
    <>
      <div className="d-flex">
        {isLoading && <h5 className="test-primary">updating.....</h5>}
      </div>
      <div className="">
        <h4
          className="p-3 text-white"
          style={{ backgroundColor: "var(--color-primary-dark)" }}
        >
          Profile Details Update Form
        </h4>
        {info ? (
          <div className="update-form my-4">
            <form onSubmit={handleSubmit}>
              <div className=" form-group row d-md-flex gx-5">
                <Col md={6}>
                  <label className="form-label">Company Name</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    value={profileInfo.cname}
                    type="text"
                    name="cname"
                  />

                  <br />
                  <label className="form-label">Location</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control  px-3"
                    value={profileInfo.country}
                    type="text"
                    name="country"
                  />
                  <br />
                  <label className="form-label">Industry</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    value={profileInfo.industry}
                    type="text"
                    name="industry"
                  />

                  <br />
                  <label className="form-label">Num of Branches</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    defaultValue={profileInfo.nob}
                    type="number"
                    name="nob"
                  />

                  <br />
                  <label className="form-label">Num of Employees</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    defaultValue={profileInfo.noe}
                    type="number"
                    name="noe"
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label">Logo</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    defaultValue="https://i.ibb.co/XDxGxmT/qhc-logo.jpg"
                    type="text"
                    name="image"
                  />

                  <br />
                  <label className="form-label">Website Link</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    defaultValue={profileInfo.website}
                    type="text"
                    name="website"
                  />

                  <br />
                  <label className="form-label">Contact</label>
                  <input
                    required
                    onChange={handleChange}
                    value={profileInfo.contact}
                    className="px-3 form-control"
                    type="text"
                    name="contact"
                  />
                  <br />
                </Col>
              </div>
              <div className="mt-5 w-25 mx-auto input-icon">
                <input
                  className="form-control update-btn py-2 px-3"
                  style={{
                    backgroundColor: "purple",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="profile-sec my-4 p-5 text-center">
        <h4 className="mb-4" style={{ color: "brown" }}>
         Company Profile Form
        </h4>
        <Button className="add-job-btn py-3" onClick={navigateToForm}>
          <HiPlusCircle className="heart pe-1" /> Submit
        </Button>
      </div>
        )}
      </div>
    </>
  );
};

export default EditCompany;
