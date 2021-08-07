import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Join.css';

import Footer from '../../Footer/Footer';

import facebook from '../../../image/021-facebook.png';
import instagram from '../../../image/025-instagram.png';
import twitter from '../../../image/043-twitter.png';
import cross from '../../../image/cross-sign.png';
import logo from '../../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../../image/City-bridge-trust-removebg-preview.png';

import { Link } from 'react-router-dom';
import Cricket from './Cricket';

const Join = () => {
    function action() {
        var action = document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div>
            <div className="join">
                <Navbar></Navbar>

                <h1>Sports.</h1>

            </div>

            <div className="main-section">


                <p>Ekota believes in the power of sport and works to help individuals to get healthy, <br /> connect with others, as well as helping to develop the next generation of sporting stars. <br /> Our expert coaches will help everyone find their true potential .</p>


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
                                     <img className="img-fluid logos"src={logo4} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid logos"src={logo5} alt="" />
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

            <div className="football footballs">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="left"></div>

                    <div className="right">
                        <div className="content">
                            <h3>Football.</h3>
                            <p>Ekota FC has been running Saturday clubs from 2014 in Goodmayes Park. We provide an opportunity for children to improve their skills and be a part of a competitive football team.Children from ages 5-16 of all abilities are welcome to join our weekly training sessions. The club is registered with the FA and the sessions are being facilitated by FA qualified coaches.</p>
                            <a href="#" class="discover-btn " data-bs-toggle="modal" data-bs-target="#exampleModal">Read  More</a>
                        </div>
                    </div>



                    <div style={{ fontFamily: 'Poppins' }} class="modal   fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Football</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Ekota FC has been running Saturday clubs from 2014 in Goodmayes Park. We provide an opportunity for children to improve their skills and be a part of a competitive football team.Children from ages 5-16 of all abilities are welcome to join our weekly training sessions. The club is registered with the FA and the sessions are being facilitated by FA qualified coaches.
                                    Sessions are taught in small groups based on age and ability. During the session, participants will undertake drills, improve their fitness and play matches.  The aim is to help improve footballing, fitness and social skills.
                                    We aim to provide a friendly environment, which motivates participants but also gives them a framework to grow and develop.
                                    The club has developed strong networks with other football teams and organisations to provide additional opportunities for our club members.
                                    All those involved in the organisation including parents and players are expected to follow the code of conduct and failure to do adhere to the terms will not be accepted.

                                </div>
                                <div class="modal-footer">
                                    <Link to='/football'> <button class="discover-btn" type="button" data-bs-dismiss="modal">Discover More</button></Link>
                                    {/* <a href="#" class="discover-btn ">Discover  More</a>> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="cricket">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="right1">
                        <div className="content">
                            <h3>Cricket.</h3>

                            <p className="mb-5">Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                                Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                            </p>
                            <Link to='/cricket'> <a href="#" class="discover-btn">Discover  More</a></Link>
                        </div>
                    </div>

                    <div className="left1"></div>

                </div>
            </div> */}

            <Cricket></Cricket>



            <div className="football footballs" id="martial">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="martial-arts"></div>

                    <div className="right">
                        <div className="content">
                            <h3>Martial Arts.</h3>
                            <p>Ekota FC has been running Saturday clubs from 2014 in Goodmayes Park. We provide an opportunity for children to improve their skills and be a part of a competitive football team.Children from ages 5-16 of all abilities are welcome to join our weekly training sessions. The club is registered with the FA and the sessions are being facilitated by FA qualified coaches.</p>

                        </div>
                    </div>

                </div>

            </div>
            <div className="cricket footballs" id="badminton">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="right1">
                        <div className="content">
                            <h3>Badminton.</h3>

                            <p className="mb-5">Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                                Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                            </p>

                        </div>

                    </div>

                    <div className="badminton"></div>

                </div>
            </div>
            <div className="football footballs " id="walking">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="walking"></div>

                    <div className="right">
                        <div className="content">
                            <h3>Walking Cricket</h3>
                            <p>Ekota Academy is now offering free sessions on Walking Cricket in Goodmayes Park!
                                Walking Cricket is a slower version of the traditional game played at walking pace with adapted rules and has been specially designed for people that love the game of cricket but can no longer play the traditional version due to:
                                <br />
                                Age
                                <br />
                                Medical conditions
                                <br />
                                Inactivity
                                <br />
                                Disabilities
                                <br />
                                Recovery/ rehabilitation from medical operations
                                <br />
                                Social isolation and loneliness
                                <br />
                                Inability to play the traditional game for any other reason.
                               </p>

                        </div>
                    </div>

                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Join;