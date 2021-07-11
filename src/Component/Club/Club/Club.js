import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import pictures from '../../../image/sx4GAJRVn1zCUV784eb8xNyeaGihP6BjmdIBCbkPWHMeJxFPc.jfif';

import './Club.css';

const Club = () => {
    return (
        <div className="club-background">
            <div>
                <Navbar></Navbar>
                <h1>Club.</h1>

            </div>
            <div className="aims">
                <h3>Aims. </h3>
                <div className="lines"></div>
                <div className="div">
                    <ul className="mb-5">
                        <li>To deliver sporting activities to increase participation in sport for young people and adults at all levels to support improved physical and mental well-being.</li>
                        <li>To nurture future sporting talent and provide opportunities for progression for individuals with the potential and interest in pursuing a career in sport.</li>
                        <li>To support local community integration to ensure that no groups are excluded and that communities connect to understand their commonalities through sport and other activities</li>
                        <li>Increase female involvement in sport and empower women from all backgrounds</li>
                    </ul>
                    <a href="#" className="aims-button">Read More</a>
                </div>
            </div>
            <div className="management">
                <h3> Team & Management</h3>

                <div className="div">
                    <p className="mb-5">Our team has a range of expertise and backgrounds with a track record of successful delivery of projects. The existing team is made up of 3 trustees, a chief officer, consultants and a number of coaches in their speciality of the field who work for the club.  At Ekota we are proud that our central team involves a strong group of female leaders, which is a reflection on the nature and values of the organisation.

                        In order to strengthen the sporting expertise in the team, we have developed a new role of senior coach and advisor.  In addition, Ekota is also bringing in female coaches to provide expertise, encourage more female participation and positive role modelling.


                    </p>
                    <a href="#" className="management-button">Read More</a>
                </div>
            </div>

            <div className="staff">
                <h3>Staff.</h3>
                <div className="div">
                    <p className="mb-5">All of our coaches are fully qualified in their relevant field of expertise and have been through the appropriate training and checks required for their role.
                        The Club has two Welfare Officer (Male & Female) who are responsible for ensuring that the club follows its responsibilities in running activities for children, supporting the staff to understand their duty of care, ensuring policies are in place – understood communicated and followed. The Welfare Officer also helps to monitor and encourage good practice and acts as a point of contact for staff, children or parents for any concerns.
                        If you would like to contact the Welfare Officer please email: contact@ekotafc.com
                    </p>
                    <a href="#" className="management-button">Read More</a>
                </div>

            </div>

            {/* <div className="news">
                <h3>News & Events</h3>

                <div className="container mt-5">
                    <div class="row container row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <figure className="image">
                                    <img src={pictures} class="card-img-top" alt="..." />
                                </figure>
                                <div class="card-body">
                                    <h5 class="card-title">New Tournament</h5>
                                    <p class="card-text">The indoor tournament, activities and food were enjoyed by all. Prizes were given to the successful teams and recognition was given for individual efforts across the season.</p>
                                    <a href="#" class="btn btn-danger">Read More</a>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <figure className="image">
                                    <img src={pictures} class="card-img-top" alt="..." />
                                </figure>
                                <div class="card-body">
                                    <h5 class="card-title">The Indoor Tournament</h5>
                                    <p class="card-text">It was a successful event which brought the community together to connect and celebrate our achievements.  You can see the pictures from the day in our gallery</p>
                                    <a href="#" class="btn btn-danger">Read More</a>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <figure className="image">
                                    <img src={pictures} class="card-img-top" alt="..." />
                                </figure>
                                <div class="card-body">
                                    <h5 class="card-title">Latest Events</h5>
                                    <p class="card-text">Thank you to everyone who attended the Ekota Active New Year Event on the 7th February 2015 – Over a hundred parents and children attended. .</p>
                                    <a href="#" class="btn btn-danger">Read More</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="events mt-5">
                <h3>News & Events</h3>

                <div className="container event ">
                    <div className="row container d-flex justify-content-center align-items-center">
                        <div className="col-md-4 col-sm-6">
                            <div className="boxs">
                                <div className="avatars">
                                    <img src={pictures} alt="" />
                                </div>
                                <div className="box_contents">
                                    <h3 className="title">Ekota Active New Year</h3>
                                    <span className="post">Thank you to everyone who attended the Ekota Active New Year Event on the 7th February 2015.....</span>

                                </div>
                                <div className="btn-news">
                                    <a href="#" className="btn1">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="boxs">
                                <div className="avatars">
                                    <img src={pictures} alt="" />
                                </div>
                                <div className="box_contents">
                                    <h3 className="title">The Indoor Tournament</h3>
                                    <span className="post">The indoor tournament, activities and food were enjoyed by all. Prizes were given to the successful teams and recognition was given for individual efforts across the season.</span>

                                </div>
                                <div className="btn-news">
                                    <a href="#" className="btn1">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="boxs">
                                <div className="avatars">
                                    <img src={pictures} alt="" />
                                </div>
                                <div className="box_contents">
                                    <h3 className="title">Successful Events</h3>
                                    <span className="post">It was a successful event which brought the community together to connect and celebrate our achievements.  </span>

                                </div>
                                <div className="btn-news">
                                    <a href="#" className="btn1">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Club;