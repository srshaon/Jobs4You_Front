import "./Welcome.css";

import React from "react";
import useAuth from "../../hooks/useAuth";

const Welcome = () => {
  const { admin, user } = useAuth();
  return (
    <div className="welcome-dashboard">
      {/* <h3 className="dashboard-title" style={{ color: "brown" }}>
        Job {admin} Dashboard
      </h3>
      <hr /> */}
    </div>
  );
};

export default Welcome;
