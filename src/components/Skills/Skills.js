import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import GetSkills from "../GetSkills/GetSkills";

const Skills = () => {
  const [skillArray, setSkillArray] = useState([]);
  const [skill, setSkill] = useState("");
  const { email } = useAuth().user;

  useEffect(() => {
    fetch(`https://jobs4you.onrender.com/skills/${email}`)
      .then((res) => res.json())
      .then((data) => setSkillArray(data));
  }, [email, skill]);

  // const [inputs, setInputs] = useState([]);

  // const handleInput = (e, index) => {
  //     let temp = [...inputs];
  //     temp[index] = e.target.value;
  //     setInputs(temp);
  //     console.log(inputs);
  // };

  // const addField = (e) => {
  //     e.preventDefault();

  //     const len = fields.length;
  //     let temp = [...fields];
  //     console.log(fields);
  //     temp.push(<><input onChange={(e) => handleInput(e, len)} /><button onClick={addField}>+</button></>);
  //     setFields(temp);
  // };

  // const [fields, setFields] = useState([<><input onChange={(e) => handleInput(e, 0)} /><button onClick={addField}>+</button></>]);

  const handleInput = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const skills = [...skillArray];
    let uncheckedSkills = skill.split(",");
    // [a, b, c]
    const newSkills = [];
    uncheckedSkills.forEach((unchecked, index) => {
      for (let i = index + 1; i < uncheckedSkills.length; i++) {
        if (index < uncheckedSkills.length) {
          if (
            unchecked.toLocaleLowerCase().trim() ===
            uncheckedSkills[i].toLocaleLowerCase().trim() &&
            unchecked !== "-1"
          ) {
            uncheckedSkills[i] = "-1";
            // newSkills.push(unchecked);
          }
          // else if (unchecked !== '-1') {
          //     newSkills.push(unchecked);
          // }
        }
        // else {
        //     if (unchecked !== '-1') {
        //         newSkills.push(unchecked);
        //     }
        // }
      }
      if (unchecked !== "-1") {
        newSkills.push(unchecked);
        console.log(newSkills, "checked");
      }
    });

    const confirmedNewSkills = newSkills.filter((newskill) => {
      const i = skillArray.findIndex(
        (singleSkill) =>
          singleSkill.toLowerCase().trim() === newskill.toLowerCase().trim()
      );

      if (i === -1) {
        return newskill;
      }
    });

    confirmedNewSkills.map((newSkill) => skills.push(newSkill));
    console.log(skills);

    let addSkills = { email: email, skills: skills };

    fetch("https://jobs4you.onrender.com/skills", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addSkills),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          setSkill("");
          e.target.reset();
          setSkillArray(skills);
        }
      });
  };

  return (
    <div
      className="d-flex justify-content-center flex-wrap"
      style={{ minHeight: "70vh", marginTop: "50px" }}
    >
      <div style={{ width: "50%" }}>
        <h3 className="text-center">Add your skills</h3>
        <p className="text-center mb-5">(Separate with ' ,')</p>
        <form onSubmit={handleSubmit}>
          {
            <div className="text-center py-4">
              <input
                className="w-50 p-2"
                style={{
                  background: "#fcfcfc",
                  opacity: "0.6",
                  border: "1px solid grey",
                }}
                onChange={handleInput}
              />
              {/* <input
                className="ms-2 p-2 border-0"
                style={{
                  background: "purple",
                  borderRadius: "7px",
                  color: "white",
                  fontWeight: "600",
                }}
                type="button"
                value="Submit"
              /> */}
              <button
                className="ms-2 p-2 border-0"
                style={{
                  background: "purple",
                  borderRadius: "7px",
                  color: "white",
                  fontWeight: "600",

                }}
              >
                Submit
              </button>
            </div>
          }
        </form>
      </div>

      <GetSkills
        skillArray={skillArray}
        setSkillArray={setSkillArray}
        skill={skill}
      />
    </div>
  );
};

export default Skills;
