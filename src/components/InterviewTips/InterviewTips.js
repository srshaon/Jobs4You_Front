import React from "react";
import { Link } from "react-router-dom";
import "./InterviewTips.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import image from "../../assets/Images/interview.jpg";

const InterviewTips = () => {
  return (
    <div style={{ backgroundColor: "#9c9c9c60" }}>
      <div>
        <img
          className="d-block w-100"
          style={{ height: "80vh" }}
          src="https://vcdn1-giadinh.vnecdn.net/2021/09/22/4022164-1632327996-1632328039-1408-1632328159.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4yp0w0Dxp9ZlxYQ59HrBdw"
          alt=""
        />
      </div>

      <div className="container py-5">
        <div>
          {
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
              <div style={{ borderRight: "2px solid gray" }}>
                <h4
                  className="mb-4"
                  style={{
                    color: "brown",
                  }}
                >
                  ESSENTIAL TIPS FOR A SUCCESSFUL INTERVIEW{" "}
                </h4>

                <h5>➤ Be on time</h5>
                <p style={{ fontSize: 16 }}>
                  This often means 10-15 minutes early. Interviewers often are
                  ready before the appointment.{" "}
                </p>
                <h5>
                  ➤ Know the interviewer’s name, its spelling, and
                  pronunciation.
                </h5>
                <p style={{ fontSize: 16 }}>
                  Use it during the interview. If you don’t know the name, call
                  beforehand and ask the secretary. Also, note the secretary’s
                  name in case you have to call back. Secretaries can influence
                  the hiring decision!
                </p>
                <h5>➤ Have some questions of your own prepared in advance</h5>
                <p style={{ fontSize: 16 }}>
                  There is nothing wrong with having a short list of questions
                  and thoughts- it shows you have done your research and want to
                  know more about the organization and the position.
                </p>
                <h5>➤ Bring several copies of your resume.</h5>
                <p style={{ fontSize: 16 }}>
                  Also, bring a copy of your transcript. Carry your papers in an
                  organized manner.
                </p>
                <h5>➤ Have a reliable pen and a small note pad with you.</h5>
                <p style={{ fontSize: 16 }}>
                  But do not take notes during the interview. However,
                  immediately afterward, write down as much as you can remember,
                  including your impression of how well you did.
                </p>
                <h5>➤ Greet the interviewer with a handshake and a smile.</h5>
                <p style={{ fontSize: 16 }}>
                  Remember to maintain eye contact (which does not mean a stare
                  down).
                </p>
                <h5>➤ Expect to spend some time developing rapport.</h5>
                <p style={{ fontSize: 16 }}>
                  Don’t jump right in and get down to business. Follow the
                  interviewer’s lead.
                </p>
                <h5>➤ Welcome Feedback</h5>
                <p style={{ fontSize: 16 }}>
                  Always welcome feedback and take this opportunity to improve
                  things and your skills. People learn from mistakes and grow
                  from them to develop their skills.
                </p>
                <h5>➤ Don’t be embarrassed if you are nervous.</h5>
                <p style={{ fontSize: 16 }}>
                  As you gain experience you’ll become more at ease with the
                  interviewing process.
                </p>
                <h5>➤ Focus</h5>
                <p style={{ fontSize: 16 }}>
                  On your attributes, your transferable skills, and your
                  willingness to learn; don’t apologize for a lack of
                  experience; describe your strengths in terms of what you can
                  do for the organization.
                </p>
                <h5>➤ Be Confident</h5>
                <p style={{ fontSize: 16 }}>
                  Be confident but, at the same time, be humble in anything you
                  do. This is one of the advice and tips that will benefit you
                  everywhere. Having a high confidence level helps boost your
                  communication skills, and people listen more to confident
                  speakers. At the same time, be humble and accept that you are
                  not the one who knows everything, and at some point, you can
                  make mistakes.
                </p>
                <h5>➤ Listen carefully to the interviewer.</h5>
                <p style={{ fontSize: 16 }}>
                  Be sure you understand the question; if not, ask for
                  clarification, or restate it in your own words. Answer
                  completely and concisely. Stick to the subject at hand.
                </p>
                <h5>➤ Challenge Yourself</h5>
                <p style={{ fontSize: 16 }}>
                  Say yes to the things that scare you. Constantly challenge
                  yourself and allow yourself to become better and learn new
                  things. Challenging yourself can surprise you with the things
                  you didn’t think you could do.
                </p>
                <h5>➤ Watch your grammar</h5>
                <p style={{ fontSize: 16 }}>
                  Employers are interested in candidates who can express
                  themselves properly. Even if you have to go slowly and correct
                  yourself, accuracy is preferred over ungrammatical fluency.{" "}
                </p>
                <h5>➤ Be prepared for personal questions.</h5>
                <p style={{ fontSize: 16 }}>
                  Some interviewers may not know what they can and cannot ask
                  legally. Anticipate how you will handle such questions without
                  losing your composure.
                </p>
                <h5>➤ Close on a positive, enthusiastic note.</h5>
                <p style={{ fontSize: 16 }}>
                  Employers are interested in candidates who can express
                  themselves properly. Even if you have to go slowly and correct
                  yourself, accuracy is preferred over ungrammatical fluency.Ask
                  what the next step will be. Thank the interviewer for his/her
                  time and express your interest in the job. Leave quickly and
                  courteously with a handshake and a smile.
                </p>
                <h5>
                  ➤ No interview is complete until you follow up with a
                  thank-you note.
                </h5>
                <p style={{ fontSize: 16 }}>
                  Express your appreciation for the interview and, if true,
                  reaffirm your interest. This last step can make a difference.
                  Don’t forget it.
                </p>
              </div>

              <div className="my-5 py-5">
                <div id="container" className="d-flex align-items-center">
                  <div className="text-center w-75 mx-auto">
                    <h5
                      className=""
                      style={{ color: "brown", fontWeight: "600" }}
                    >
                      <u>SUMMARY</u>
                    </h5>
                    <ul className="resume-information text-start text-white">
                      <li>Be on time</li>
                      <li>Ask questions at the end.</li>
                      <li>Bring several copies of your resume.</li>
                      <li>Greet the interviewer with a smile.</li>
                      <li>Listen carefully to the interviewer.</li>
                      <li>Be prepared for personal questions.</li>
                      <li>Follow up with a thank-you note.</li>
                    </ul>
                  </div>

                  <div className="job-image">
                    <h5
                      className="p-3"
                      style={{ color: "brown", fontWeight: "600" }}
                    >
                      Learn more <br />
                      <IoIosArrowDropdownCircle
                        className="heart mt-3"
                        style={{ color: "brown" }}
                      />
                    </h5>

                    <img
                      className="w-100"
                      style={{ height: "35vh", opacity: "0.8" }}
                      src={image}
                      alt=""
                    />

                    <div className="info">
                      <h5 className="p-4">Interview Preparation Links</h5>
                      <ul>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://www.indeed.com/career-advice/interviewing/iq-questions-for-interview"
                          >
                            Indeed
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://www.globalguideline.com/interview_questions/Questions.php?sc=Logical_IQ"
                          >
                            Global Guideline
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://www.resume.com/"
                          >
                            Resume.com
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://teachteam.org/interviewing?gclid=CjwKCAiAgbiQBhAHEiwAuQ6BknsNDiLfGwDE_XRe0X_yQSlM_LasQd3dKDZNORGLwnxIxzPqpMlwzRoCFOsQAvD_BwE"
                          >
                            TeachTeam
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://www.inc.com/jeff-haden/27-most-common-job-interview-questions-and-answers.html"
                          >
                            Inc.
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default InterviewTips;
