import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import logo from '../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../image/Eagles in the Community Logo 2018.jpg';
import logo2 from '../../image/Vision Logo 2018 FINAL transparent.png';
import facebook from '../../image/021-facebook.png';
import twitter from '../../image/043-twitter.png';
import instagram from '../../image/025-instagram.png';
import './Contact.css';
import Bounce from  'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import cross from '../../image/cross-sign.png';

const Contact = () => {

    function action() {
        var action =document.querySelector('.action');
        action.classList.toggle('active');
    }

    return (
        <div>
            <div className="contact-navbar">
                <Navbar></Navbar>
                <Fade left cascade>
                <h1>Contact Us.</h1>
                </Fade>
            </div>
            <div className="action" onClick={action}>
            
            <span className="text-center">Be a part of <br />  Unity</span>
            
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
                      <div className="row d-flex justify-content-center">
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
                          {/* <div className="col-md-8">
                              <input style={{border: '1px solid #000'}} type="text" placeholder="Your Email" />
                              <a href="#" className="btn">Subscribe</a>
                          </div> */}
                        
                      </div>
                  </div>
               
            </div>
        </div>
            <div className="contact">
                <Bounce left>
                <div className="container">
                    <h2>Signposting to other <span style={{ color: '#e15430' }}>youth</span> services </h2>
                    <p>Ekota is here to support you working in partnership with a range of organisations. Whatever your situation - do contact us or others for help and to access opportunities. If you need further support, there are a range of services you can access</p>
                </div>
                </Bounce>
                <div className="container ">
                    <div className="row date-events d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-sm-6">
                            <Bounce left>
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
                            </Bounce>
                        </div>
                        <Bounce right>
                        <div className="col-md-6 col-sm-6 calender ">
                            <div className="row ">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <div className="col-md-3 event-date">
                                        <h4>29th July</h4>
                                    </div>
                                    <div className="col-md-9 event-details">
                                        <h4>Walking Cricket</h4>
                                        <h6>Ekota Academy is now offering free sessions on Walking Cricket in Goodmayes Park!.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 ">
                            <div className="col-md-12 d-flex justify-content-center">
                                    <div className="col-md-3 event-date">
                                        <h4>29th July</h4>
                                    </div>
                                    <div className="col-md-9 event-details">
                                        <h4>Walking Cricket</h4>
                                        <h6>Ekota Academy is now offering free sessions on Walking Cricket in Goodmayes Park!.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 ">
                            <div className="col-md-12 d-flex justify-content-center">
                                    <div className="col-md-3 event-date">
                                        <h4>29th July</h4>
                                    </div>
                                    <div className="col-md-9 event-details">
                                        <h4>Walking Cricket</h4>
                                        <h6>Ekota Academy is now offering free sessions on Walking Cricket in Goodmayes Park!.</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            <Bounce bottom>
            <div className="testimonials coach text-center  ">
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
            </div>
            </Bounce>


           
            <div className="sponsorship">
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
            </div>
          





            <Footer></Footer>
        </div>
    );
};

export default Contact;