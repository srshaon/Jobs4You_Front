import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import image from "../../assets/Images/career_tips.jpg";
import career from "../../assets/Images/career-guide-img.jpg";
import "./CareerGuide.css";

const CareerGuide = () => {
  return (
    <div style={{ backgroundColor: "#9c9c9c60" }}>
      <div>
        <img
          style={{ height: 450, background: "var(--color-primary-dark)" }}
          className="d-block w-100 "
          src={image}
          alt=""
        />
      </div>

      <div className="container py-5">
        <div>
          {
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
              <div style={{ borderRight: "2px solid gray" }}>
                <h3
                  className="mb-4"
                  style={{
                    color: "brown",
                  }}
                >
                  ESSENTIAL JOB HUNTING TIPS{" "}
                </h3>

                <h5>➤ Never Stop Learning</h5>
                <p style={{ fontSize: 16 }}>
                  One of the most powerful things to advance your career -- or
                  in any circumstance for that matter -- is knowledge. Never
                  stop learning. This will improve the way you think, and of
                  course, your knowledge. One of the best things that happened
                  in this pandemic is online learning. Now, education has become
                  more accessible than ever. There shouldn’t be an excuse for
                  people not to learn new things.
                </p>
                <h5>➤ Work On Goals</h5>
                <p style={{ fontSize: 16 }}>
                  Working on goals that matter first is among the best advice
                  and tips anyone can give you. Give care to your assignments
                  and show your boss you have enthusiasm for what you’re doing.
                  If the assignment is not something that excites you, motivate
                  yourself with personal tasks to achieve a goal. Setting goals
                  organizes your way of thinking and makes tasks more manageable
                  for you to handle.
                </p>
                <h5>➤ Be Organized</h5>
                <p style={{ fontSize: 16 }}>
                  Use a personal organization system and be organized with your
                  daily tasks. This can help you develop good habits and make
                  you well-organized. You’ll be surprised how much more you can
                  do when you organize your daily schedule rather than just
                  doing things on the fly.
                </p>
                <h5>➤ Value Your Network</h5>
                <p style={{ fontSize: 16 }}>
                  In addition to building a network of people you can use as
                  connections in the future, it is vital to value them. By
                  valuing them, you are building a relationship that can last
                  for a very long time.
                </p>
                <h5>➤ Find a mentor, and be a mentor</h5>
                <p style={{ fontSize: 16 }}>
                  Having a mentor and being a mentor can give you valuable
                  insight and help increase your visibility in the industry. It
                  will likely help you along your career path if you ask your
                  mentor to introduce you to individuals that are currently
                  working in the industry you are interested in. When you begin
                  to mentor, you can introduce your mentee to others.
                </p>
                <h5>➤ Focus On Results</h5>
                <p style={{ fontSize: 16 }}>
                  Focus on the results rather than focusing on how long each
                  task will take. By disregarding the time, you’ll be able to
                  focus on the quality of the job rather than just thinking of
                  finishing it.
                </p>
                <h5>➤ Speak Up</h5>
                <p style={{ fontSize: 16 }}>
                  Express your ideas and speak up. Expressing yourself is one of
                  the advice and tips that you will always get from every
                  successful professional. Confidence is something that can take
                  you places. High confidence equates to more people listening
                  to you, which in turn can make you more reliable. At the same
                  time, speaking up and being confident can mean you care about
                  your job and that you’re taking things seriously.
                </p>
                <h5>➤ Welcome Feedback</h5>
                <p style={{ fontSize: 16 }}>
                  Always welcome feedback and take this opportunity to improve
                  things and your skills. People learn from mistakes and grow
                  from them to develop their skills.
                </p>
                <h5>➤ Maintain A Good Work Ethic</h5>
                <p style={{ fontSize: 16 }}>
                  Good work ethic is consistently recognized by bosses and gives
                  you a great image. Management praises those who work honestly,
                  truthfully, and professionally and are the most awarded at the
                  end of the day.
                </p>
                <h5>➤ Work-Life Balance</h5>
                <p style={{ fontSize: 16 }}>
                  Life is not all work. You need to treat and pamper yourself
                  regularly. You need to balance work, education, and fun. You
                  may be busy with work, but that shouldn’t be an excuse not to
                  have fun. If you have a hobby like biking, squeeze in an hour
                  a day or a few hours during the weekend to still fulfill these
                  things. Same with education. Always learn new things and never
                  stop learning. With time, you can still give a few hours a day
                  to learn something new or during your days off work.
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

                <h5>➤ Challenge Yourself</h5>
                <p style={{ fontSize: 16 }}>
                  Say yes to the things that scare you. Constantly challenge
                  yourself and allow yourself to become better and learn new
                  things. Challenging yourself can surprise you with the things
                  you didn’t think you could do.
                </p>
                <h5>➤ Cultivate perseverance</h5>
                <p style={{ fontSize: 16 }}>
                  You may not enter a job and become a top performer right away.
                  It is important that you continue to persevere and develop so
                  that you can reach your career goals and become a top
                  performer. For instance, if you are a writer and an editor
                  continuously rejects the pitches you give for your article
                  ideas, you may try refining and developing your ideas and
                  re-pitch them to the same editor or a different editor.
                </p>
              </div>

              <div className="my-5">
                <div id="container" className="d-flex align-items-center">
                  <div className="job-details text-center mx-auto">
                    <h5
                      className="my-3"
                      style={{ color: "brown", fontWeight: "600" }}
                    >
                      SUMMARY
                    </h5>
                    <ul className="resume-information text-start">
                      <li>Never Stop Learning</li>
                      <li>Work On Goals</li>
                      <li>Value Your Network</li>
                      <li>Find a mentor, and be a mentor</li>
                      <li>Maintain A Good Work Ethic</li>
                      <li>Work-Life Balance</li>
                      <li>Be Confident</li>
                      <li>Challenge Yourself</li>
                      <li>Cultivate perseverance</li>
                    </ul>
                  </div>

                  <div className="job-image">
                    <h1 className="p-3">
                      <IoIosArrowDropdownCircle
                        className="heart"
                        style={{ color: "brown" }}
                      />
                    </h1>
                    <img
                      className=""
                      style={{ width: "100%", height: "35vh" }}
                      src={career}
                      alt=""
                    />

                    <div className="info">
                      <h5 className="p-3">Job Sector</h5>
                      <ul>
                        <li>
                          <Link style={{ color: "white" }}>Freelancing</Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }}>RMG</Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }}>Banking</Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }}>
                            Human Resource Management
                          </Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }}>Government Job</Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }}>Career In NGO</Link>
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

export default CareerGuide;
