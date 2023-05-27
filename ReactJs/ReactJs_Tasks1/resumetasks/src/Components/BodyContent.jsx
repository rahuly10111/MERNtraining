import React from 'react'

export default function BodyContent(props) {
    return (
        <div className=" col-9 w-75 bg-white ">
            <div className="row ">
                <div className="col-sm-12 col-md-12 col-lg-12 p-2 px-4 border-bottom">
                    <h4 className="text-center "> Objective </h4>
                    <p>Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.</p>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 p-2 px-4 border-end">
                    <h4 > Education </h4>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>
                                <span className="time">2015 - 2017</span>
                                <h5>St.Xavier's High School - 10th</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>
                                <span className="time">2017 - 2019</span>
                                <h5>Art Director - 12th</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>
                                <span className="time">2019 - Present</span>
                                <h5>Government Engg. College, Rajkot - B.Eng</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 p-2 px-4 border-end">
                    <h4 > Project </h4>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-kanban-fill"></i>
                                </div>

                                <h5> {props.data.project1}</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-kanban-fill"></i>
                                </div>

                                <h5> {props.data.project2}</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-kanban-fill"></i>
                                </div>
                                <h5>{props.data.project3}</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="bi bi-kanban-fill"></i>
                                </div>
                                <h5>{props.data.project4}</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 p-2 px-4 border-top border-bottom">
                    <h4 > Technical Skills </h4>
                    <div className="skillsbar">
                        <ul>
                            <li>{props.skill.skill1} <span className='skills'></span> &nbsp;{props.skill.skill_1_Rate}%</li>
                            <li>{props.skill.skill2}<span className='skills' style={{ padding: "8px 30%" }}></span> &nbsp;{props.skill.skill_2_Rate}%</li>
                            <li>{props.skill.skill3}<span className='skills'></span>&nbsp;{props.skill.skill_3_Rate}%</li>
                            <li>{props.skill.skill4}<span className='skills'></span>&nbsp;{props.skill.skill_4_Rate}%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
