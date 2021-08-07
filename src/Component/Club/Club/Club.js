import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import facebook from '../../../image/021-facebook.png';
import instagram from '../../../image/025-instagram.png';
import twitter from '../../../image/043-twitter.png';
import pictures from '../../../image/WhatsApp Image 2021-07-07 at 11.23.27.jpeg';
import seal from '../../../image/seal-01.png';
import logo from '../../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../../image/City-bridge-trust-removebg-preview.png';
import team from '../../../image/kugghjul-removebg-preview.png';
import staff from '../../../image/staffmanagement1-removebg-preview.png';
import volunteer from '../../../image/19-196805_volunteer-icon-logo-become-a-volunteer-hd-png-removebg-preview.png';
import join from '../../../image/360_F_269423667_XHYPqqocezmCuFvWbRjdhZWtIP1kbNTy-removebg-preview.png';
import emdad from '../../../image/WhatsApp Image 2021-08-01 at 6.59.57 PM.jpeg';

import cross from '../../../image/cross-sign.png';


import './Club.css';

const Club = () => {
    function action() {
        var action = document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div className="club-background">
            <div>
                <Navbar></Navbar>

                <h1>Team.</h1>


            </div>

            <div className="management" id="management">

                <h3 className="mb-5"> Our Team, Management & Governance.</h3>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid " src={team} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <p className="mb-5">Our team has a range of expertise and backgrounds with a track record of successful delivery of projects. The existing team is made up of 3 trustees, a chief officer, consultants and a number of coaches in their speciality of the field who work for the club.  At Ekota we are proud that our central team involves a strong group of female leaders, which is a reflection on the nature and values of the organisation.

                                    In addition, Ekota is also bringing in female coaches to provide expertise, encourage more female participation and positive role modelling.

                                    We would also work in partnership with a range of organisations such as the England Cricket Board, Essex cricket club, the Football Association, Sports England, local schools and local authorities.

                                </p>


                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="action" onClick={action}>

                <span className="text-center">Be  part of <br />  Ekota</span>

                <div className="popup">

                    <div className="container ml-5">

                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-4">
                                <h4>Sponsor</h4>
                                <h3>Ekota Sports</h3>
                                <small>Be a Member</small>
                                <div className="action">
                                    <span> <img className="cross" src={cross} alt="" /> </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h4>Career At</h4>
                                <h3>Ekota Sports</h3>
                                <small>Join the team</small>
                                <div className="action">
                                    <span> <img className="cross" src={cross} alt="" /> </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h4>Join</h4>
                                <h3>Ekota Sports</h3>
                                <small>Be a Volunteer</small>
                                <div className="action">
                                    <span> <img className="cross" src={cross} alt="" /> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid subscribe mt-5">
                      <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-8 partner-1">
                             <div className="row d-flex justify-content-center align-items-center">
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo1} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo2} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo3} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid logos "src={logo4} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid  logos"src={logo5} alt="" />
                                 </div>
                             </div>
                         </div>
                      <div className="col-md-4 icon ">
                              <div className="row d-flex justify-content-center align-items-center">
                                  <div className="col-md-5">
                                      <h6>Follow Us On:</h6>
                                  </div>
                                  <div className="col-md-7">
                                  <img className="img-fluid "src={facebook} alt="" />
                                  <img className="img-fluid "src={instagram} alt="" />
                                  <img className="img-fluid "src={twitter} alt="" />
                                  </div>
                              </div>
                          </div>

                        
                      </div>
                  </div>

                </div>
            </div>
            <div className="staff">

                <h3>Staff &  Management.</h3>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-md-6">
                            <div className="">
                                <p className="mb-5">	All of our coaches are fully qualified in their relevant field of expertise and have been through the appropriate training and checks required for their role.
                                    The Club has two Welfare Officer (Male & Female) who are responsible for ensuring that the club follows its responsibilities in running activities for children, supporting the staff to understand their duty of care, ensuring policies are in place – understood communicated and followed. The Welfare Officer also helps to monitor and encourage good practice and acts as a point of contact for staff, children or parents for any concerns.
                                    If you would like to contact the Welfare Officer please email: contact@ekotaacademy.com

                                </p>


                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid "src={staff} alt="" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="staff" id="volunteer">

                <h3> Join us - Become a volunteer </h3>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-md-6">
                            <div className="">
                                <p className="mb-5">
                                    We are seeking people to get involved from a wide range of backgrounds to be part of the diverse Ekota family.  This is a chance to be a part of a social movement working with an experienced and passionate team.

                                    Become a volunteer today and gain new skills, meet new people, support and give back to your local community. Our opportunities can also help those individuals seeking paid employment to build up their confidence and skills.

                                    You must be 16 years and above with no criminal convictions. All volunteers will be required to complete a DBS check. You will receive a range of relevant training and support to deliver your role.

                                </p>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid "src={join} alt="" />
                        </div>
                    </div>
                </div>



            </div>
            <div className="staff">

                <h3>Volunteers.</h3>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 volunteer-img">
                            <img className="img-fluid " src={volunteer} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <p className="mb-5">
                                    All our volunteers will have to go through a process of recruitment and checks will be undertaken. If you are interested in volunteering with the club please complete the Ekota_volunteer_application and email it to contact@ekotasports.com
                                </p>

                            </div>
                        </div>
                    </div>
                </div>




            </div>


            <div className="teams">
                <h2 className="container-fluid mb-5">Meet Our Coaches</h2>
                <div className="container text-center">
                    <div className="row">
                    <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="avatar">
                                    <img className="img-fluid " src={pictures} alt="" />
                                </div>
                                <div className="box_content">
                                    <h3 className="title">Emadad Rahamn</h3>
                                    <span className="post">Head Coach</span>

                                </div>
                                <ul className="icons-social">
                                    <li><a href="#"><img className="img-fluid img" src={facebook} alt="" /></a></li>
                                    <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                    <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="avatar">
                                    <img className="img-fluid " src={emdad} alt="" />
                                </div>
                                <div className="box_content">
                                    <h3 className="title">Abdul Hamid</h3>
                                    <span className="post">football Coach</span>

                                </div>
                                <ul className="icons-social">
                                    <li><a href="#"><img className="img-fluid img" src={facebook} alt="" /></a></li>
                                    <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                    <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>

                   

                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="avatar">
                                    <img className="img-fluid " src={pictures} alt="" />
                                </div>
                                <div className="box_content">
                                    <h3 className="title">Emadad Rahamn</h3>
                                    <span className="post">Head Coach</span>

                                </div>
                                <ul className="icons-social">
                                    <li><a href="#"><img className="img-fluid img" src={facebook} alt="" /></a></li>
                                    <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                    <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
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



            <Footer></Footer>
        </div>
    );
};

export default Club;