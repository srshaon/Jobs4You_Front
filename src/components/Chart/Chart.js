import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Spinner, Button, Form } from "react-bootstrap";
import SinglePie from "./SinglePie";
import "./Chart.css";

const Chart = () => {
  const { _id } = useParams();
  const history = useHistory();
  const [postedSkills, setPostedSkills] = useState([]);
  const [gainedSkills, setGainedSkills] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const { email } = useAuth().user;
  const { setControl } = useAuth();

  const handleReplace = (e) => {
    history.replace('/dashboard');
    setControl("skills");
  };

  useEffect(() => {
    if (_id && email) {
      fetch(
        `https://jobs4you.onrender.com/posted-skills/${_id}`
      )
        .then((res) => res.json())
        .then((data) => setPostedSkills(data))
        .finally(() => {
          fetch(
            `https://jobs4you.onrender.com/skills/${email}`
          )
            .then((res) => res.json())
            .then((data) => setGainedSkills(data));
        });

      // console.log('this is isssss', email);
    }
  }, [_id, email, gainedSkills]);

  useEffect(() => {
    if (postedSkills?.length > 0) {
      let temp1 = [];
      let temp2 = [];
      let tmp = [
        { name: "acquired", value: 0 },
        { name: "remaining", value: 0 },
      ];
      let counter1 = 0;
      let counter2 = 0;

      postedSkills?.forEach((postedSkill) => {
        let index = gainedSkills?.findIndex((gainedSkill) =>
          gainedSkill
            ?.toLowerCase()
            ?.trim()
            ?.includes(postedSkill?.toLowerCase()?.trim())
        );
        if (index !== -1) {
          temp1.push({ name: postedSkill, value: 1 });
          counter1 = counter1 + 1;
          tmp[0].value = counter1;
          console.log(tmp);
        } else if (index === -1) {
          temp2.push({ name: postedSkill, value: 1 });
          counter2 = counter2 + 1;
          tmp[1].value = counter2;
          console.log(tmp);
        }
      });
      const temp = [...temp1, ...temp2];
      setData1(temp);
      setData2(tmp);
    }
  }, [gainedSkills?.length]);
  // console.log('Agaiiiiiiin', data1, data2);

  return (
    <div
      className="container row"
      style={{ width: "100%", minHeight: "80vh", color: "black" }}
    >
      {gainedSkills?.length !== 0 && (
        <div className="col-6">
          <SinglePie data1={data1} data2={data2} />
        </div>
      )}

      {gainedSkills?.length !== 0 && (
        <div className="col-6 d-flex align-items-center text-center">
          <div>
            {(
              (data2[0]?.value / (data2[0]?.value + data2[1]?.value)) *
              100
            ).toFixed(2) < 50 && (
                <div>
                  <div className="mb-2">
                    We encourage you to earn more skills.
                  </div>
                  <button
                    style={{ opacity: "0.7" }}
                    className="apply-btn px-5 not-opened"
                    disabled
                  >
                    Apply for job
                  </button>
                </div>
              )}
            {(
              (data2[0]?.value / (data2[0]?.value + data2[1]?.value)) *
              100
            ).toFixed(2) >= 50 && (
                <div>
                  <div className="mb-2">
                    Your skill matches finely to this job.
                  </div>
                  <Link
                    to={`/apply/?jobId=${_id}&percentage=${(
                      (data2[0]?.value / (data2[0]?.value + data2[1]?.value)) *
                      100
                    ).toFixed(2)}%`}
                  >
                    <Button className="apply-btn px-5">Apply for job</Button>
                  </Link>
                </div>
              )}
          </div>
        </div>
      )}

      {gainedSkills?.length === 0 && email && (
        <div className="text-center my-5 py-5 chart-spinner smoothy">
          <p>
            You don't have any skills. To add, click <button style={{ color: 'blue', background: 'white', border: 'none' }} onClick={handleReplace}>here</button>
          </p>
        </div>
      )}

      {(data1?.length === 0 || data2?.length === 0) && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      )}
    </div>
  );
};

export default Chart;
