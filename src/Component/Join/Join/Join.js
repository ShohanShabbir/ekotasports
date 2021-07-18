import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Join.css';

import Footer from '../../Footer/Footer';

import facebook from '../../../image/021-facebook.png';
import instagram from '../../../image/025-instagram.png';
import twitter from '../../../image/043-twitter.png';
import Fade from 'react-reveal/Fade';
import cross from '../../../image/cross-sign.png';

import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
const Join = () => {
    function action() {
        var action =document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div>
            <div className="join">
                <Navbar></Navbar>
                <Fade left cascade>
                <h1>Sports.</h1>
                </Fade>
            </div>

            <div className="main-section">
                <Bounce left>
                <h1 className="mb-5">Our purpose is to <span style={{color: '#e15430' }}>improve</span>  every <br /> young athlete in every session.</h1>
                <p>It is in-line with our mission to support world-class offers to ensure that <br /> you receive the best information, advice, guidance and resources to develop, <br /> professionally, as a young athlete.</p>
                </Bounce>
                
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
                          <div className="col-md-8">
                              <input style={{border: '1px solid #000'}} type="text" placeholder="Your Email" />
                              <a href="#" className="btn">Subscribe</a>
                          </div>
                        
                      </div>
                  </div>
               
            </div>
        </div>

            <div className="football">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <Bounce left>
                    <div className="left"></div>
                    </Bounce>
                    <Bounce right>
                    <div className="right">
                        <div className="content">
                            <h3>Football.</h3>
                            <p>Ekota FC has been running Saturday clubs from 2014 in Goodmayes Park. We provide an opportunity for children to improve their skills and be a part of a competitive football team.Children from ages 5-16 of all abilities are welcome to join our weekly training sessions. The club is registered with the FA and the sessions are being facilitated by FA qualified coaches.</p>
                            <Link to='/football'><a href="#" class="discover-btn">Discover  More</a></Link>
                        </div>
                    </div>
                    </Bounce>
                </div>

            </div>
            <div className="cricket">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <Bounce left>
                    <div className="right1">
                        <div className="content">
                            <h3>Cricket.</h3>

                            <p className="mb-5">Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                                Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                            </p>
                            <Link to='/cricket'> <a href="#" class="discover-btn">Discover  More</a></Link>
                        </div>
                    </div>
                    </Bounce>
                    <Bounce right>
                    <div className="left1"></div>
                    </Bounce>
                </div>
            </div>
            
          

            <div className="football">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <Bounce left>
                    <div className="martial-arts"></div>
                    </Bounce>
                    <Bounce right>
                    <div className="right">
                        <div className="content">
                            <h3>Martial Arts.</h3>
                            <p>Ekota FC has been running Saturday clubs from 2014 in Goodmayes Park. We provide an opportunity for children to improve their skills and be a part of a competitive football team.Children from ages 5-16 of all abilities are welcome to join our weekly training sessions. The club is registered with the FA and the sessions are being facilitated by FA qualified coaches.</p>
                            
                        </div>
                    </div>
                    </Bounce>
                </div>

            </div>
            <div className="cricket">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <Bounce left>
                    <div className="right1">
                        <div className="content">
                            <h3>Badminton.</h3>

                            <p className="mb-5">Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                                Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                            </p>
                            
                        </div>
                        
                    </div>
                    </Bounce>
                    <Bounce right>
                    <div className="left1"></div>
                    </Bounce>
                </div>
            </div>
            
            <div className="line1"></div>
            <div className="performance">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-4">
                            <Fade left>
                            <h3>Performance <br /> Sports.</h3>
                            </Fade>
                        </div>
                        <Fade right>
                        <div className="col-md-8">
                            <h5>Our world-class offer is driven by a range of performance sports under our ‘Academy of Sport’. All performance sports receive elite-level quality training, whilst additional sports science; nutrition, health, wellbeing, analytical, physical and lifestyle support for our student-athletes form our unrivalled performance programmes.</h5>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Join;