import React from "react";
import {
  useGetCompaniesQuery,
  useGetProfilesQuery,
} from "../../Redux-handler/ManageProfiles";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Chart from "../Chart/Chart";
import { CgProfile } from "react-icons/cg";
import { Button, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const CandidateDetails = ({ info }) => {
  const history = useHistory();
  const { user, admin } = useAuth();
  const { data } = useGetProfilesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.pEmail == user?.loginEmail),
    }),
  });
  const navigateToForm = () => {
    history.push("/profileForm");
  };
  console.log(info);
  return (
    <section>
      <div className="container">
        {/* <div className="card mb-4">
              <div className="card-body text-center">
                <Button onClick={navigateToForm}>Complete Profile</Button>
              </div>
            </div> */}
        {info && (
          // <div className="card mb-4 ms-1">
          //   <div className="card-body">
          //     <div className="row">
          //       <div className="col-sm-3">
          //         <p className="mb-0">Full-Name</p>
          //       </div>
          //       <div className="col-sm-9">
          //         <p className="text-muted mb-0">
          //           {info?.fname || info?.cname}
          //         </p>
          //       </div>
          //     </div>
          //     <hr />
          //     <div className="row">
          //       <div className="col-sm-3">
          //         <p className="mb-0">Email</p>
          //       </div>
          //       <div className="col-sm-9">
          //         <p className="text-muted mb-0">
          //           {info?.pEmail || info?.email}
          //         </p>
          //       </div>
          //     </div>
          //     <hr />
          //     <div className="row">
          //       <div className="col-sm-3">
          //         <p className="mb-0">Phone</p>
          //       </div>
          //       <div className="col-sm-9">
          //         <p className="text-muted mb-0">
          //           (097){info?.pContact || info?.ontact}
          //         </p>
          //       </div>
          //     </div>
          //     <hr />
          //     <div className="row">
          //       <div className="col-sm-3">
          //         <p className="mb-0">Mobile</p>
          //       </div>
          //       <div className="col-sm-9">
          //         <p className="text-muted mb-0">
          //           (098) {info?.pContact || info?.ontact}
          //         </p>
          //       </div>
          //     </div>
          //     <hr />
          //     <div className="row">
          //       <div className="col-sm-3">
          //         <p className="mb-0">Address</p>
          //       </div>
          //       <div className="col-sm-9">
          //         <p className="text-muted mb-0">{info?.address}</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="row d-md-flex align-items-center justify-content-center">
            <Col md={8} className="p-4 text-center">
              <div className="mt-3 mb-4">
                <h2 style={{ color: "brown", fontWeight: "600" }}>
                  About Myself
                </h2>
                <p className="mx-auto mt-2" style={{ letterSpacing: "1px" }}>
                  {info?.bio}
                </p>
              </div>
              <div className="mt-3 mb-4">
                <h5 style={{ color: "brown", fontWeight: "600" }}>
                  My Hobbies
                </h5>
                <p style={{ letterSpacing: "1px" }}>{info?.hobbies}</p>
              </div>
              <div className="mt-3 mb-4">
                <h5 style={{ color: "brown", fontWeight: "600" }}>
                  Achievements/Awards
                </h5>
                <p style={{ letterSpacing: "1px" }}> {info?.achievements}</p>
              </div>
            </Col>
            <Col md={4}>
              <div
                className="p-4"
                style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
                  borderRadius: "7px",
                }}
              >
                <h4 className="text-center text-white">Profile Overview</h4>
                <hr />
                <div className="text-center text-white pt-4">
                  <h5 style={{ color: "brown", fontWeight: "600" }}>
                    Date of Birth:
                  </h5>
                  <p>{info?.dob}</p>
                  <h5 style={{ color: "brown", fontWeight: "600" }}>
                    Nationality:{" "}
                  </h5>
                  <p>{info?.nationality}</p>

                  <h5 style={{ color: "brown", fontWeight: "600" }}>Email</h5>
                  <p>{info?.pEmail}</p>
                  <h5 style={{ color: "brown", fontWeight: "600" }}>
                    Contact:{" "}
                  </h5>
                  <p>{info?.pContact}</p>
                  <h5 style={{ color: "brown", fontWeight: "600" }}>
                    Address:{" "}
                  </h5>
                  <p>{info?.address}</p>
                </div>
              </div>
            </Col>
          </div>
        )}
      </div>
    </section>
  );
};

export default CandidateDetails;
