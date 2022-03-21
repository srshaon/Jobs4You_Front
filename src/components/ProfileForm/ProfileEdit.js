import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import {
  useGetProfileByIdQuery,
  useUpdateProfileMutation,
} from "../../Redux-handler/ManageProfiles";
const ProfileEdit = ({ info,setControl }) => {
  const location = useLocation();
  console.log(location.pathname);
  const history = useHistory();
  const [profileInfo, setProfileInfo] = useState({
    fname: "",
    address: "",
    pEmail: "",
    pContact: "",
    lname: "",
    eContact: "",
  });

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  useEffect(() => {
    if (info) {
      const { fname, lname, pEmail, pContact, address, eContact } = info;
      setProfileInfo({ fname, pEmail, pContact, eContact, address, lname });
    }
  }, [info]);

  const handleChange = (e) =>
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, pEmail, pContact, address, eContact } = profileInfo;
    await updateProfile({
      _id: info._id,
      fname,
      pEmail,
      pContact,
      eContact,
      address,
      lname,
    });
    setControl('candiProfile')
    history.push("/dashboard");
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4 ">
        {isLoading && <h5 className="test-primary"> updating.....</h5>}
      </div>
      <div>
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
                  <label className="form-label">First Name</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    value={profileInfo.fname}
                    type="text"
                    name="fname"
                  />

                  <br />
                  <label className="form-label">Contact</label>
                  <input
                    required
                    onChange={handleChange}
                    value={profileInfo.pContact}
                    className="px-3 form-control"
                    type="number"
                    name="pContact"
                  />

                  <br />
                  <label className="form-label">Email</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    defaultValue={profileInfo.pEmail}
                    type="text"
                    name="pEmail"
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label">Last Name</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control  px-3"
                    value={profileInfo.lname}
                    type="text"
                    name="lname"
                  />

                  <br />
                  <label className="form-label">Emergency Contact</label>
                  <input
                    required
                    onChange={handleChange}
                    value={profileInfo.eContact}
                    className="px-3 form-control"
                    type="number"
                    name="eContact"
                  />
                  <br />

                  <label className="form-label">Address</label>
                  <input
                    required
                    onChange={handleChange}
                    className="form-control px-3"
                    defaultValue={profileInfo.address}
                    type="text"
                    name="address"
                  />
                </Col>
              </div>
              <div className="mt-5 w-25 mx-auto input-icon">
                <input
                  className="form-control update-btn py-2 px-3"
                  style={{
                    backgroundColor: "var(--color-primary-light)",
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
          <h3>
            <Link to="/profileForm">Please complete your profile</Link>
          </h3>
        )}
      </div>
    </>
  );
};

export default ProfileEdit;
