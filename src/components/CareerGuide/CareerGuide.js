import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import './CareerGuide.css'

const CareerGuide = () => {


    return (

        <div>
            <div className='d-flex' >
                <div className='flex-grow-1'>
                    <img style={{ height: 580 }} className="d-block w-100 img-fluid " src="https://media.newstrack.in/uploads/career-news-info/career-tips/Feb/12/big_thumb/career_602646305b1f6.jpeg" alt="" />
                </div>
            </div>

            <div style={{ backgroundColor: "#9c9c9c60" }} >

                {

                    <div className='ms-2 me-5 row row-cols-lg-2 row-cols-md-2 row-cols-1'>
                        <div className='mt-4' style={{ borderRight: "2px solid gray" }}>
                            <h1 style={{
                                color: "brown"
                            }}>ESSENTIAL JOB HUNTING TIPS </h1>

                            <h4 >
                                ➤ Never Stop Learning
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                One of the most powerful things to advance your career -- or in any circumstance for that matter -- is knowledge.

                                Never stop learning. This will improve the way you think, and of course, your knowledge.

                                One of the best things that happened in this pandemic is online learning. Now, education has become more accessible than ever. There shouldn’t be an excuse for people not to learn new things.
                            </p>
                            <h4>
                                ➤ Work On Goals
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Working on goals that matter first is among the best advice and tips anyone can give you. Give care to your assignments and show your boss you have enthusiasm for what you’re doing.

                                If the assignment is not something that excites you, motivate yourself with personal tasks to achieve a goal.

                                Setting goals organizes your way of thinking and makes tasks more manageable for you to handle.


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
                                ➤  Find a mentor, and be a mentor
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Having a mentor and being a mentor can give you valuable insight and help increase your visibility in the industry. It will likely help you along your career path if you ask your mentor to introduce you to individuals that are currently working in the industry you are interested in. When you begin to mentor, you can introduce your mentee to others.




                            </p>
                            <h4>
                                ➤  Focus On Results
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Focus on the results rather than focusing on how long each task will take. By disregarding the time, you’ll be able to focus on the quality of the job rather than just thinking of finishing it.
                            </p>
                            <h4>
                                ➤  Speak Up
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Express your ideas and speak up. Expressing yourself is one of the advice and tips that you will always get from every successful professional. Confidence is something that can take you places. High confidence equates to more people listening to you, which in turn can make you more reliable.

                                At the same time, speaking up and being confident can mean you care about your job and that you’re taking things seriously.
                            </p>
                            <h4>
                                ➤  Welcome Feedback
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Always welcome feedback and take this opportunity to improve things and your skills. People learn from mistakes and grow from them to develop their skills.


                            </p>
                            <h4>
                                ➤  Maintain A Good Work Ethic
                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Good work ethic is consistently recognized by bosses and gives you a great image.

                                Management praises those who work honestly, truthfully, and professionally and are the most awarded at the end of the day.




                            </p>
                            <h4>
                                ➤  Work-Life Balance

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Life is not all work. You need to treat and pamper yourself regularly. You need to balance work, education, and fun.

                                You may be busy with work, but that shouldn’t be an excuse not to have fun. If you have a hobby like biking, squeeze in an hour a day or a few hours during the weekend to still fulfill these things.

                                Same with education. Always learn new things and never stop learning. With time, you can still give a few hours a day to learn something new or during your days off work.
                            </p>
                            <h4>
                                ➤  Be Confident

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Be confident but, at the same time, be humble in anything you do. This is one of the advice and tips that will benefit you everywhere. Having a high confidence level helps boost your communication skills, and people listen more to confident speakers.

                                At the same time, be humble and accept that you are not the one who knows everything, and at some point, you can make mistakes.
                            </p>
                            <h4>
                                ➤  Work-Life Balance

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Life is not all work. You need to treat and pamper yourself regularly. You need to balance work, education, and fun.

                                You may be busy with work, but that shouldn’t be an excuse not to have fun. If you have a hobby like biking, squeeze in an hour a day or a few hours during the weekend to still fulfill these things.

                                Same with education. Always learn new things and never stop learning. With time, you can still give a few hours a day to learn something new or during your days off work.
                            </p>
                            <h4>
                                ➤  Challenge Yourself

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                Say yes to the things that scare you. Constantly challenge yourself and allow yourself to become better and learn new things.

                                Challenging yourself can surprise you with the things you didn’t think you could do.

                            </p>
                            <h4>
                                ➤  Cultivate perseverance

                            </h4>
                            <p className='ms-5' style={{ fontSize: 17 }}>
                                You may not enter a job and become a top performer right away. It is important that you continue to persevere and develop so that you can reach your career goals and become a top performer. For instance, if you are a writer and an editor continuously rejects the pitches you give for your article ideas, you may try refining and developing your ideas and re-pitch them to the same editor or a different editor.
                            </p>


                        </div>

                        <div >
                            <div style={{
                                color: "brown"
                            }}>

                            </div>
                            <div id="guidecontainer">
                                <div className="job-details">
                                    <h3>
                                        Tips Summary
                                    </h3>
                                    <ul className="information">
                                        <li >

                                            Never Stop Learning
                                        </li>
                                        <li>
                                            Work On Goals
                                        </li>
                                        <li>
                                            Be Organized
                                        </li>
                                        <li>
                                            Value Your Network
                                        </li>
                                        <li>
                                            Find a mentor, and be a mentor
                                        </li>
                                        <li>
                                            Focus On Results

                                        </li>
                                        <li>
                                            Speak Up
                                        </li>
                                        <li>
                                            Welcome Feedback
                                        </li>
                                        <li>
                                            Maintain A Good Work Ethic

                                        </li>
                                        <li>
                                            Work-Life Balance
                                        </li>
                                        <li>
                                            Be Confident
                                        </li>
                                        <li>
                                            Challenge Yourself
                                        </li>
                                        <li>
                                            Cultivate perseverance
                                        </li>
                                        <li>
                                            Be Confident
                                        </li>

                                    </ul>

                                </div>

                                <div className="job-image">

                                    <h4 className='mt-4'>

                                        Job Sector
                                    </h4>
                                    <h1><IoIosArrowDropdownCircle /></h1>
                                    <img style={{ height: 370, width: 300 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1S5_SNb99MWnoNn_CprG9XQdVsGftuG1Gg&usqp=CAU" alt="" />


                                    <div className="info">
                                        <h2 > Job Sector</h2>
                                        <ul>
                                            <li>
                                                <Link style={{ color: "white" }}>
                                                    Freelancing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link style={{ color: "white" }}>
                                                    RMG
                                                </Link>
                                            </li>
                                            <li>
                                                <Link style={{ color: "white" }}>
                                                    Banking
                                                </Link>
                                            </li>
                                            <li>
                                                <Link style={{ color: "white" }}>
                                                    Human Resource Management
                                                </Link>
                                            </li>
                                            <li>
                                                <Link style={{ color: "white" }}>
                                                    Government Job
                                                </Link>
                                            </li>
                                            <li>
                                                <Link style={{ color: "white" }}>
                                                    Career In NGO

                                                </Link>
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

export default CareerGuide;