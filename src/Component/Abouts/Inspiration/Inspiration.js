import React from 'react';

import Testimonial from '../Testimonial/testimonial';

import facebook from '../../../image/021-facebook.png';
import twitter from '../../../image/043-twitter.png';
import instagram from '../../../image/025-instagram.png';
import Footer from '../../Footer/Footer';
import Bounce from 'react-reveal/Bounce';
import cross from '../../../image/cross-sign.png'
import Fade from 'react-reveal/Fade';



import './Inspiration.css';
const Inspiration = () => {
    function action() {
        var action = document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div className="inspiration ">
            <div className="football">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <Bounce left>
                        <div className="left2"></div>
                    </Bounce>
                    <Bounce right cascade>
                        <div className="right">
                            <div className="content">
                                <h2 className="mb-4">Values.</h2>
                                <h4 className="mb-3" style={{ color: '#e15430', fontWeight: '600' }} >What Does Ekota Mean.</h4>
                                <p className="mb-5">The word Ekota in Sanskrit means “Unity” and in Cree, it means “The place to be”, we aim to achieve both of these things by unifying the community and by providing a positive environment where children and adults can thrive, access opportunities, connect and improve their physical and mental well-being.
                                </p>

                            </div>
                        </div>
                    </Bounce>
                </div>

            </div>
            
            <div className="container text-center academy">
               <Fade left cascade>
                   <h1>Ekota Academy</h1>
                <h2>Who are we?</h2>
                </Fade> 
                <Fade left>
                <div className="para">
                <h1> &#8221;</h1>
                <p>Ekota originally started with a sporting focus but has expanded into a social movement.
                    Our vision at Ekota is “Empowering communities and future generations through sports, education, knowledge and opportunities’’

                    Ekota Academy works to help children and adults improve their learning, sporting abilities and skills through teaching, empowerment and embedding self-confidence. Opportunities are available to learn new skills, get active, build networks and improve physical and mental well being.
                    The organisation offers a range of sporting, education and community-based activities provided by our highly-skilled, experienced and knowledgeable team.
                    Since our establishment, we have been working to bring communities together and increase social cohesion, improve fitness, technical skills and the general health and well being of local populations.
                    Our ethos is to encourage all who are involved with our organisation to adhere to behaviours, which centre on respect and unity.
                </p>
                </div>
                </Fade>
             
            </div>


            <Testimonial></Testimonial>

            <div className="missions">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <Bounce left>
                        <div className="rights1">
                            <div className="content">
                                <h2 className="">Mission & Aims.</h2>

                                <h4 className="" style={{ color: '#e15430', fontWeight: '600' }} >The student-athlete at the heart of everything we do.</h4>
                                <p className="">Our aim is to bring communities together, nurture and support individuals and groups to flourish and to continue to give back to create a cycle of success.  At our heart is the message of being resilient, unique, and connected.
                                </p>
                               
                            </div>
                        </div>
                    </Bounce>
                    <Bounce right>
                        <div className="left1"></div>
                    </Bounce>
                </div>
            </div>
            <div className="container text-center academy">
                <Fade left cascade>
                <h1>Our Mission & Aims</h1>
                </Fade>
                <Fade left>
                <div className="para">
                <h1> &#8221;</h1>
                <ul style={{textAlign:'left'}} >
                    <li className="mb-3">	To operate as virtual and physical health and well-being community hub. This would include receiving and delivering on social prescribing referrals to help tackle inequalities and a range of societal issues from childhood obesity to loneliness</li>
                    <li className="mb-3">	To deliver sporting activities to increase participation in sport for young people and adults at all levels to support improved physical and mental well-being.</li>
                    <li className="mb-3">	To lead on grassroots activities to create a foundation to nurture future sporting talent and provide opportunities for progression for individuals with the potential and interest in pursuing their sporting ambitions. </li>
                    <li className="mb-3">	To be a voice and support local community integration to ensure that no groups are excluded and that communities connect to understand their commonalities through sport and other activities.</li>
                    <li className="mb-3">	Increase female involvement in sport, leadership roles and empower women from all backgrounds. </li>
                    <li className="mb-3">	Ensure the resilience and leadership capabilities of future generations through mentoring, coaching and leadership development. </li>
                </ul>
                </div>
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


            {/* <div className="teams">
                
                <div className="container text-center">
                    <div className="row">
                        <Bounce left>
                            <div className="col-md-4 col-sm-6">
                                <div className="box">
                                    <div className="avatar">
                                        <img className="img-fluid " src={pictures} alt="" />
                                    </div>
                                    <div className="box_content">
                                        <h3 className="title">Emadad Rahamn</h3>
                                        <span className="post">football Coach</span>

                                    </div>
                                    <ul className="icons-social">
                                        <li><a href="#"><img className="img-fluid img" src={facebook} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Bounce>
                        <Bounce bottom>
                            <div className="col-md-4 col-sm-6">
                                <div className="box">
                                    <div className="avatar">
                                        <img className="img-fluid " src={pictures} alt="" />
                                    </div>
                                    <div className="box_content">
                                        <h3 className="title">Emadad Rahamn</h3>
                                        <span className="post">football Coach</span>

                                    </div>
                                    <ul className="icons-social">
                                        <li><a href="#"><img className="img-fluid img" src={facebook} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Bounce>
                        <Bounce right>
                            <div className="col-md-4 col-sm-6">
                                <div className="box">
                                    <div className="avatar">
                                        <img className="img-fluid " src={pictures} alt="" />
                                    </div>
                                    <div className="box_content">
                                        <h3 className="title">Emadad Rahamn</h3>
                                        <span className="post">football Coach</span>

                                    </div>
                                    <ul className="icons-social">
                                        <li><a href="#"><img className="img-fluid img" src={facebook} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Bounce>
                    </div>
                </div>

            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Inspiration;