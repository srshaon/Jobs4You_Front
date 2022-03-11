import "./Welcome.css";

import React from "react";
import useAuth from "../../hooks/useAuth";

const Welcome = () => {
  const { admin, user } = useAuth();
  return (
    <div>
      <h3 className="text-center my-4" style={{ color: "brown" }}>
        Job {admin} --{" "}
      </h3>
      <div className="text-center">
        <img
          src={user.photoURL}
          alt=""
          className="me-3"
          style={{ borderRadius: "100px" }}
        />{" "}
        {user.displayName}
      </div>
      {/* <img
        className="img-fluid w-100 h-100 m-0 p-0"
        src="https://i.ibb.co/CnxqN90/pexels-neosiam-625219-1.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default Welcome;
