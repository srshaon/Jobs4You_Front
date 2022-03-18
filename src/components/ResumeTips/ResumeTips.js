import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import resume from "../../assets/Images/resume_img.png";

import "./ResumeTips.css";

const ResumeTips = () => {
  return (
    <div style={{ backgroundColor: "#9c9c9c60" }}>
      <div>
        <img
          style={{ height: 450 }}
          className="d-block w-100 "
          src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                  RESUME MAKING TIPS{" "}
                </h3>

                <h5>➤ Include your contact information.</h5>
                <p style={{ fontSize: 16 }}>
                  This seems like a given, right? Not exactly. "You would be
                  surprised to know how many really good resumes I've come
                  across with no contact information," says Ira Hughley, senior
                  technical recruiter at HubSpot. Make sure your full name,
                  email address, and location are included. Don't write out your
                  full home address though, only a city and state. While your
                  location may not be too relevant to the job itself, as more
                  roles are remote than ever before, employers still want to
                  know your general location for tax and law purposes. This also
                  means that you should probably remove references that are too
                  local, as your resume will likely reach a broader audience
                  than before. Lastly, make sure your email address is
                  professional. While the time of MSN and AIM usernames are long
                  gone, many of us still use old addresses we created long
                  before we were in the workforce. With this in mind, create a
                  simple email with your first and last name. If it's already
                  taken, consider adding your industry to your email. E.g.:
                  abc@gmail.com
                </p>
                <h5>➤ Tailor your resume to the role.</h5>
                <p className="" style={{ fontSize: 16 }}>
                  One of the biggest mistakes job seekers make is using the same
                  resume for every role they apply for. Hughley recommends
                  having multiple resume versions for each role category you're
                  interested in. "Don't try to cram all of your experience into
                  the resume," he says. "Sometimes you can talk to them during
                  the interview." The same goes for keeping old roles that are
                  no longer relevant. "Be 110% sure that your work experience
                  and interests match the job opportunity you are looking to
                  get," says Hughley. "Too often, I see resumes with tons of
                  experience in areas other than the one being applied for."
                  Instead, note roles that highlight your experience and show
                  why you are a good fit for the role. "What if I’m
                  transitioning to a new industry and don’t have much
                  experience, what should I do? " In this case, build a
                  functional resume that frames your past experience to match
                  the job you’re seeking.
                </p>
                <h5>➤ Be Organized</h5>
                <p className="" style={{ fontSize: 16 }}>
                  Use a personal organization system and be organized with your
                  daily tasks. This can help you develop good habits and make
                  you well-organized. You’ll be surprised how much more you can
                  do when you organize your daily schedule rather than just
                  doing things on the fly.
                </p>
                <h5>➤ Value Your Network</h5>
                <p className="" style={{ fontSize: 16 }}>
                  In addition to building a network of people you can use as
                  connections in the future, it is vital to value them. By
                  valuing them, you are building a relationship that can last
                  for a very long time.
                </p>
                <h5>➤ Describe your experience in detail.</h5>
                <p className="" style={{ fontSize: 16 }}>
                  When it comes to the experience section, there are the basics
                  we all know to input: Previous companies, job titles, and
                  responsibilities. There are two additional details you
                  shouldn’t forget to add: The results you achieved and the
                  awards you received. One issue Hughley often sees with resumes
                  is that they're too vague. "Highlight yourself! Sometimes, I
                  see just a title and no highlights or takeaways from that
                  role," he says. "This is the time to brag about what you have
                  accomplished, even if it's just a couple of bullet points."
                  HubSpot Recruiter Timothy Dixon-Traylor says we often leave
                  out important details that could help us stand out. "I believe
                  the most important part of the resume is to show how you've
                  made an impact in your current and previous roles," he said.
                  "This can be done by quantifying your results and impacts, as
                  best you can." Dixon-Traylor continues, "Most recruiters and
                  hiring managers will be asking themselves, 'How can this
                  person help elevate the team and the organization?'Quantifying
                  your contributions will be your first step showcasing how," he
                  said.
                </p>
                <h5>➤ Summarize your experience in a "Key Skills" section.</h5>
                <p className="" style={{ fontSize: 16 }}>
                  Your skills section is one of the most important in your
                  resume. Hiring managers and automated resume scanners look at
                  this section to assess if you have the relevant skills. As
                  such, do not put your skills section all the way at the
                  bottom. Instead, put it toward the top of the resume above
                  your experience section or to the side. Ideally, the hiring
                  manager gets a sense of your skills and your experience shows
                  how you gained them.
                </p>
                <h5>
                  ➤ Design your resume using a template that fits the tone of
                  your industry.
                </h5>
                <p className="" style={{ fontSize: 16 }}>
                  Every industry has an unofficial way of doing things when it
                  comes to hiring. For instance, traditionally creative
                  industries tend to allow (and in some cases promote) showing
                  some personality in resumes. This can range from adding your
                  picture to your resume to using bright colors and
                  illustrations. Be sure to follow the tone that’s most
                  appropriate for your industry – no need to reinvent the wheel
                  when the guide is already there. In addition, Dixton-Traylor
                  suggests using a good balance of white space without crowding
                  the page. "Use as much white space as possible, on one to two
                  pages that showcase the value you bring," he says. "Add the
                  technologies, skills, systems, or programs that you have
                  hands-on experience working with. This can range from
                  technical tools, such as Tableau and HubSpot down to simple
                  tools like POS systems, Microsoft Office, or Google Suite."
                </p>
                <h5>➤ Incorporate keywords from the job description.</h5>
                <p className="" style={{ fontSize: 16 }}>
                  There are two reasons you want your resume to have the
                  keywords from the job description:
                  <ul>
                    <li>
                      It will show hiring managers that your skills and
                      experience closely align with the job req.
                    </li>
                    <li>
                      You will ensure that your resume successfully passes
                      through automated resume scanners, which look for keyword
                      matches.
                    </li>
                  </ul>
                </p>
                <h5>
                  ➤ Proofread for grammar, brevity, and specific action verbs.
                </h5>
                <p style={{ fontSize: 16 }}>
                  One thing you don’t want is an error in your resume. It can
                  affect your credibility and make you look unprofessional. So,
                  the first step is proofreading your resume. Once you complete
                  it, leave it for a few hours or days then give it another
                  look. Then, run it through grammar editing software to make
                  sure everything is correct. Here are some good options:
                  <ul>
                    <li style={{ fontSize: 16 }}>
                      <a
                        target="blank"
                        style={{ textDecoration: "none" }}
                        href="https://www.grammarly.com/"
                      >
                        Grammerly
                      </a>
                    </li>
                    <li style={{ fontSize: 16 }}>
                      <a
                        target="blank"
                        style={{ textDecoration: "none" }}
                        href="https://hemingwayapp.com/"
                      >
                        Hemingway Editor
                      </a>
                    </li>
                    <li style={{ fontSize: 16 }}>
                      <a
                        target="blank"
                        style={{ textDecoration: "none" }}
                        href="https://www.microsoft.com/en-us/microsoft-365/word"
                      >
                        Microsoft Word
                      </a>
                    </li>
                  </ul>
                </p>
                <h5>➤ Convert your resume to a PDF file.</h5>
                <p style={{ fontSize: 16 }}>
                  Imagine you spend hours formatting your resume just for it all
                  to get lost once someone else opens it. That’s what happens
                  when you submit your resume using Word. Instead, convert your
                  final resume into a PDF file to preserve your formatting. This
                  also ensures easy uploading on most hiring forms.
                </p>
              </div>

              <div className="mt-5 pt-2">
                <div id="container" className="d-flex align-items-center">
                  <div className="job-details text-center w-75 mx-auto">
                    <h5
                      className=""
                      style={{ color: "brown", fontWeight: "600" }}
                    >
                      SUMMARY
                    </h5>
                    <ul className="resume-information text-start">
                      <li>Include your contact information.</li>
                      <li>Tailor your resume to the role.</li>
                      <li>Describe your experience in detail.</li>
                      <li>
                        Summarize your experience in a 'Key Skills' section.
                      </li>
                      <li>
                        Design your resume using a template that fits the tone
                        of your industry.
                      </li>
                      <li>Incorporate keywords from the job description.</li>
                      <li>
                        Proofread for grammar, brevity, and specific action
                        verbs.
                      </li>
                      <li>Convert your resume to a PDF file.</li>
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
                      className="pb-4"
                      style={{ width: "100%", height: "40vh" }}
                      src={resume}
                      alt=""
                    />

                    <div className="info">
                      <h5 className="p-3">
                        Suggested Links of Resume Template:
                      </h5>
                      <ul>
                      <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://jobs4you-a95fe.web.app/create-resume"
                          >
                            Jobs4You Resume
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://resume.io/"
                          >
                            Resume.io
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ color: "white" }}
                            target="blank"
                            href="https://www.canva.com/create/resumes/"
                          >
                            Canva
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
                            href="https://candydestinyfoundation.org/create-professional-cover-letter-in-minutes/"
                          >
                            Create Resume
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

export default ResumeTips;
