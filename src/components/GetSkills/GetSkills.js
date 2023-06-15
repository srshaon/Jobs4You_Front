import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./GetSkills.css";

const GetSkills = ({ skillArray, setSkillArray, skill }) => {
  const [getSkills, setGetSkills] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://jobs4you.onrender.com/skills/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setGetSkills(data));
  }, [user?.email, skill, skillArray]);

  const handleDelete = (e) => {
    if (!window.confirm(`Remove '${getSkills[e.target.id]}' as a Skill?`)) {
      return;
    }

    let tempSkills = [...getSkills];
    let index = parseInt(e.target.id);
    let checkSkill = tempSkills[index];
    const modifiedArray = tempSkills.filter((skill) => skill !== checkSkill);

    const modifiedSkills = { email: user?.email, skills: modifiedArray };
    console.log(index, tempSkills);

    fetch("https://jobs4you.onrender.com/skills", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedSkills),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          setSkillArray(tempSkills);
        }
      });
  };

  return (
    <div
      style={{ borderLeft: "1px solid black", width: "40%" }}
      className="mx-5 px-4"
    >
      <h3 className="text-center">Show All Skills</h3>
      <div className="d-flex flex-wrap py-5">
        {getSkills?.length > 0 &&
          getSkills?.map((getSkill, index) => {
            return (
              <div className="skills-style">
                <button
                  key={index}
                  id={index}
                  // style={{ border: "1px solid rgba(0, 0, 0, 0.4)" }}
                  onClick={handleDelete}
                  className="mx-2 my-2 py-2 px-3 cancel-button"
                >
                  {getSkill}
                </button>
                <span> </span>
                <span className="cross-sign">x</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetSkills;
