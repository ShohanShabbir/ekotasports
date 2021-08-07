import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import facebook from '../../image/021-facebook.png';
import twitter from '../../image/043-twitter.png';
import instagram from '../../image/025-instagram.png';
import logo from '../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../image/City-bridge-trust-removebg-preview.png';

import join from '../../image/360_F_269423667_XHYPqqocezmCuFvWbRjdhZWtIP1kbNTy-removebg-preview.png';
import './Contact.css';


import cross from '../../image/cross-sign.png';

const Contact = () => {

    function action() {
        var action = document.querySelector('.action');
        action.classList.toggle('active');
    }

    return (
        <div>
            <div className="contact-navbar">
                <Navbar></Navbar>

                <h1>Contact Us.</h1>

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
                                     <img className="img-fluid logos "src={logo5} alt="" />
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
            <div className="contact">


                <div className="staff contact-join">

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

                {/* <div className="container">
                    <h2>Signposting to other <span style={{ color: '#e15430' }}>youth</span> services </h2>
                    <p>Ekota is here to support you working in partnership with a range of organisations. Whatever your situation - do contact us or others for help and to access opportunities. If you need further support, there are a range of services you can access</p>
                </div> */}

                <div className="container ">
                    <div className="row date-events d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-sm-6">

                            <div className="boxs">
                                <div className="box_contents">
                                    <input type="text" placeholder="Your Name" required="required" />
                                    <br />
                                    <input type="text" placeholder="Your Email" required="required" />
                                    <br />
                                    <input type="text" placeholder="Your Question" required="required" />
                                    <br />
                                    <textarea placeholder="Message"></textarea>

                                </div>
                                <div className="btn-news">
                                    <a href="#" className="btn1">Submit</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="testimonials coach text-center  ">
                <div className="container">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <h1>‘’</h1>
                                <p>‘’Ekota has helped my child to develop new skills and I can see the week on week physical improvements and he is always excited to attend the sessions.’’</p>
                                <h4>John Doe</h4>
                                <h6>Coach</h6>
                            </div>
                            <div class="carousel-item">
                                <h1>‘’</h1>
                                <p>‘’Ekota has helped my child to develop new skills and I can see the week on week physical improvements and he is always excited to attend the sessions.’’</p>
                                <h4>John Doe</h4>
                                <h6>Coach</h6>
                            </div>
                            <div class="carousel-item"> 
                                <h1>‘’</h1>
                                <p>‘’Ekota has helped my child to develop new skills and I can see the week on week physical improvements and he is always excited to attend the sessions.’’</p>
                                <h4>John Doe</h4>
                                <h6>Coach</h6>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div> */}




            {/* <div className="sponsorship">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-4">
                            <img className="img-fluid " src={logo} alt="" />

                        </div>

                        <div className="col-md-4 logo1">
                            <img className="img-fluid " src={logo2} alt="" />
                        </div>

                        <div className="col-md-4 logo1">
                            <img className="img-fluid " src={logo1} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div> */}






            <Footer></Footer>
        </div>
    );
};

export default Contact;