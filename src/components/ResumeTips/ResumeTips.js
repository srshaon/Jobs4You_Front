import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ResumeTips = () => {
    return (
        <div>
            <div>
                <img style={{ height: 300 }} className="d-block w-100 " src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>

            <div style={{ backgroundColor: "#9c9c9c60" }}>

                {

                    <div className='ms-2 me-5 row row-cols-lg-2 row-cols-md-2 row-cols-1'>
                        <div className='mt-4' style={{ borderRight: "2px solid gray" }}>
                            <h1 style={{
                                color: "brown"
                            }}>RESUME MAKING TIPS </h1>

                            <h4 >
                                ➤ Include your contact information.
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                This seems like a given, right? Not exactly.

                                "You would be surprised to know how many really good resumes I've come across with no contact information," says Ira Hughley, senior technical recruiter at HubSpot.

                                Make sure your full name, email address, and location are included. Don't write out your full home address though, only a city and state.

                                While your location may not be too relevant to the job itself, as more roles are remote than ever before, employers still want to know your general location for tax and law purposes.

                                This also means that you should probably remove references that are too local, as your resume will likely reach a broader audience than before.

                                Lastly, make sure your email address is professional. While the time of MSN and AIM usernames are long gone, many of us still use old addresses we created long before we were in the workforce.

                                With this in mind, create a simple email with your first and last name. If it's already taken, consider adding your industry to your email. E.g.: abc@gmail.com
                            </p>
                            <h4>
                                ➤ Tailor your resume to the role.

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                One of the biggest mistakes job seekers make is using the same resume for every role they apply for.

                                Hughley recommends having multiple resume versions for each role category you're interested in.

                                "Don't try to cram all of your experience into the resume," he says. "Sometimes you can talk to them during the interview."

                                The same goes for keeping old roles that are no longer relevant.

                                "Be 110% sure that your work experience and interests match the job opportunity you are looking to get," says Hughley. "Too often, I see resumes with tons of experience in areas other than the one being applied for."

                                Instead, note roles that highlight your experience and show why you are a good fit for the role.

                                "What if I’m transitioning to a new industry and don’t have much experience, what should I do? " In this case, build a functional resume that frames your past experience to match the job you’re seeking.

                            </p>
                            <h4>
                                ➤ Be Organized
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Use a personal organization system and be organized with your daily tasks. This can help you develop good habits and make you well-organized.

                                You’ll be surprised how much more you can do when you organize your daily schedule rather than just doing things on the fly.

                            </p>
                            <h4>
                                ➤  Value Your Network
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                In addition to building a network of people you can use as connections in the future, it is vital to value them.

                                By valuing them, you are building a relationship that can last for a very long time.
                            </p>
                            <h4>
                                ➤  Describe your experience in detail.
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                When it comes to the experience section, there are the basics we all know to input: Previous companies, job titles, and responsibilities. There are two additional details you shouldn’t forget to add: The results you achieved and the awards you received.

                                One issue Hughley often sees with resumes is that they're too vague.

                                "Highlight yourself! Sometimes, I see just a title and no highlights or takeaways from that role," he says. "This is the time to brag about what you have accomplished, even if it's just a couple of bullet points."

                                HubSpot Recruiter Timothy Dixon-Traylor says we often leave out important details that could help us stand out.

                                "I believe the most important part of the resume is to show how you've made an impact in your current and previous roles," he said. "This can be done by quantifying your results and impacts, as best you can."

                                Dixon-Traylor continues, "Most recruiters and hiring managers will be asking themselves, 'How can this person help elevate the team and the organization?'Quantifying your contributions will be your first step showcasing how," he said.





                            </p>
                            <h4>
                                ➤  Summarize your experience in a "Key Skills" section.
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Your skills section is one of the most important in your resume. Hiring managers and automated resume scanners look at this section to assess if you have the relevant skills.

                                As such, do not put your skills section all the way at the bottom. Instead, put it toward the top of the resume above your experience section or to the side. Ideally, the hiring manager gets a sense of your skills and your experience shows how you gained them.
                            </p>
                            <h4>
                                ➤  Design your resume using a template that fits the tone of your industry.

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Every industry has an unofficial way of doing things when it comes to hiring.

                                For instance, traditionally creative industries tend to allow (and in some cases promote) showing some personality in resumes. This can range from adding your picture to your resume to using bright colors and illustrations.

                                Be sure to follow the tone that’s most appropriate for your industry – no need to reinvent the wheel when the guide is already there.

                                In addition, Dixton-Traylor suggests using a good balance of white space without crowding the page.

                                "Use as much white space as possible, on one to two pages that showcase the value you bring," he says. "Add the technologies, skills, systems, or programs that you have hands-on experience working with. This can range from technical tools, such as Tableau and HubSpot down to simple tools like POS systems, Microsoft Office, or Google Suite."
                            </p>
                            <h4>
                                ➤  Incorporate keywords from the job description.
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                There are two reasons you want your resume to have the keywords from the job description:
                                <ul>
                                    <li>
                                        It will show hiring managers that your skills and experience closely align with the job req.

                                    </li>
                                    <li>
                                        You will ensure that your resume successfully passes through automated resume scanners, which look for keyword matches.
                                    </li>
                                </ul>


                            </p>
                            <h4>
                                ➤Proofread for grammar, brevity, and specific action verbs.
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                One thing you don’t want is an error in your resume. It can affect your credibility and make you look unprofessional.

                                So, the first step is proofreading your resume. Once you complete it, leave it for a few hours or days then give it another look.

                                Then, run it through grammar editing software to make sure everything is correct. Here are some good options:
                                <ul>
                                    <li style={{ fontSize: 20 }}>
                                        <a target="blank" style={{ textDecoration: "none" }} href="https://www.grammarly.com/">Grammerly</a>
                                    </li>
                                    <li style={{ fontSize: 20 }}>
                                        <a target="blank" style={{ textDecoration: "none" }} href="https://hemingwayapp.com/">Hemingway Editor</a>
                                    </li>
                                    <li style={{ fontSize: 20 }}>
                                        <a target="blank" style={{ textDecoration: "none" }} href="https://www.microsoft.com/en-us/microsoft-365/word">Microsoft Word</a>
                                    </li>
                                </ul>




                            </p>
                            <h4>
                                ➤  Convert your resume to a PDF file.


                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Imagine you spend hours formatting your resume just for it all to get lost once someone else opens it. That’s what happens when you submit your resume using Word.

                                Instead, convert your final resume into a PDF file to preserve your formatting. This also ensures easy uploading on most hiring forms.


                            </p>



                        </div>

                        <div >
                            <div style={{
                                color: "brown"
                            }}>

                            </div>
                            <div id="guidecontainer">
                                <div class="job-details">
                                    <h3>
                                        Short Summary
                                    </h3>
                                    <ul class="information">
                                        <li >

                                            Include your contact information.


                                        </li>
                                        <li>
                                            Tailor your resume to the role.
                                        </li>
                                        <li>
                                            Describe your experience in detail.

                                        </li>
                                        <li>
                                            Summarize your experience in a 'Key Skills' section.

                                        </li>
                                        <li>
                                            Design your resume using a template that fits the tone of your industry.

                                        </li>
                                        <li>
                                            Incorporate keywords from the job description.
                                        </li>
                                        <li>
                                            Proofread for grammar, brevity, and specific action verbs.

                                        </li>
                                        <li>
                                            Convert your resume to a PDF file.
                                        </li>


                                    </ul>

                                </div>

                                <div class="job-image">

                                    <h4 className='mt-4'>

                                        Suggested Links Of Resume Templete
                                    </h4>
                                    <h1><IoIosArrowDropdownCircle /></h1>
                                    <img style={{ height: 370, width: 300 }} src="data:image/png;base64,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" alt="" />


                                    <div class="info">
                                        <h2> Links</h2>
                                        <ul >
                                            <li >
                                                <a style={{ color: "white" }} target="blank" href="https://resume.io/">Resume.io</a>
                                            </li>
                                            <li>
                                                <a style={{ color: "white" }} target="blank" href="https://www.canva.com/create/resumes/">Canva</a>
                                            </li>
                                            <li>
                                                <a style={{ color: "white" }} target="blank" href="https://www.resume.com/">Resume.com</a>
                                            </li>
                                            <li>
                                                <a style={{ color: "white" }} target="blank" href="https://candydestinyfoundation.org/create-professional-cover-letter-in-minutes/">Create Resume</a>
                                            </li>
                                            <li>
                                                <a style={{ color: "white" }} target="blank" href="https://novoresume.com/career-blog/resume-examples">Novoresume</a>
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
    );
};

export default ResumeTips;