import React from 'react';

import Testimonial from '../Testimonial/testimonial';

import facebook from '../../../image/021-facebook.png';
import twitter from '../../../image/043-twitter.png';
import instagram from '../../../image/025-instagram.png';
import Footer from '../../Footer/Footer';
import logo from '../../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../../image/City-bridge-trust-removebg-preview.png';

import question from '../../../image/images.png';

import cross from '../../../image/cross-sign.png'



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

                    <div className="left2"></div>

                    <div className="right">
                        <div className="content">
                            <h2 className="mb-4">Ekota.</h2>
                            <h4 className="mb-3" style={{ color: '#e15430', fontWeight: '600' }} >What Does Ekota Mean?</h4>
                            <p className="mb-5">The word Ekota in Sanskrit means “Unity” and in Cree, it means “The place to be”, we aim to achieve both of these things by unifying the community and by providing a positive environment.where children and adults can thrive, access opportunities, connect and improve their physical and mental well-being.
                            </p>

                        </div>
                    </div>

                </div>

            </div>


            <div className="missions">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="rights1">
                        <div className="content">
                            <h2 className="">Who we are</h2>


                            <p>Ekota originally started with a sporting focus but has expanded into a social movement.
                                Our vision at Ekota is “Empowering communities and future generations through sports, education, knowledge andopportunities’’
                                <br />

                                Ekota Academy works to help children and adults improve their learning, sporting abilities and skills through teaching, empowerment and embedding self-confidence. Opportunities are available to learn new skills, get active, build networks and improve physical and mental well being.
                                <br />
                                The organisation offers a range of sporting, education and community-based activities provided by our highly-skilled, experienced and knowledgeable team.
                                <br />
                                Since our establishment, we have been working to bring communities together and increase social cohesion, improve fitness, technical skills and the general health and well being of local populations.
                                <br />
                                Our ethos is to encourage all who are involved with our organisation to adhere to behaviours, which centre on respect and unity.

                            </p>

                        </div>
                    </div>

                    <div className="left3"></div>

                </div>
            </div>


            {/* <div className=" text-center academy">

                <h1>Ekota Academy</h1>
                <h2>Who we are</h2>

                <div className="row w-100 d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <img className="img-fluid " src={question} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="para">
                            <h1> &#8221;</h1>
                            <p>Ekota originally started with a sporting focus but has expanded into a social movement.
                                Our vision at Ekota is “Empowering communities and future generations through sports, education, knowledge andopportunities’’
                                <br />

                                Ekota Academy works to help children and adults improve their learning, sporting abilities and skills through teaching, empowerment and embedding self-confidence. Opportunities are available to learn new skills, get active, build networks and improve physical and mental well being.
                                <br />
                                The organisation offers a range of sporting, education and community-based activities provided by our highly-skilled, experienced and knowledgeable team.
                                <br />
                                Since our establishment, we have been working to bring communities together and increase social cohesion, improve fitness, technical skills and the general health and well being of local populations.
                                <br />
                                Our ethos is to encourage all who are involved with our organisation to adhere to behaviours, which centre on respect and unity.

                            </p>
                        </div>
                    </div>
                </div>


            </div> */}
            {/* <div className="football">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="left3"></div>

                    <div className="right">
                        <div className="content">
                            <h2 className="mb-4">Governance.</h2>
                            <p className="mb-5">At Ekota we ensure that appropriate governance and safeguarding is in place for the interest of our organisation and the local populations we work with. We have two qualified welfare officers and ensure that DBS checks are undertaken with any volunteers and coaches who work at the club. We have also developed safeguarding and fair play policies, which we share and make available.
                            </p>

                        </div>
                    </div>

                </div>

            </div> */}


            <Testimonial></Testimonial>

            <div className="missions">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="rights1">
                        <div className="content">
                            <h2 className="">Our Aims.</h2>


                            <p className="">Our aim is to bring communities together, nurture and support individuals and groups to flourish and to continue to give back to create a cycle of success.  At our heart is the message of being resilient, unique, and connected.
                            </p>

                        </div>
                    </div>

                    <div className="left1"></div>

                </div>
            </div>

            <div className="football">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="left-2"></div>

                    <div className="right">
                        <div className="content">
                            <h2 className="mb-4">Ekota.</h2>
                            <h4 className="mb-3" style={{ color: '#e15430', fontWeight: '600' }} >Our Objectives</h4>
                            <p style={{fontSize:'13px'}}>To operate as virtual and physical health and well-being community hub. This would include receiving and delivering on social prescribing referrals to help tackle inequalities and a range of societal issues from childhood obesity to loneliness
                                <br />
                                To deliver sporting activities to increase participation in sport for young people and adults at all levels to support improved physical and mental well-being.  <br />
                                To lead on grassroots activities to create a foundation to nurture future sporting talent and provide opportunities for progression for individuals with the potential and interest in pursuing their sporting ambitions. <br />
                                To be a voice and support local community integration to ensure that no groups are excluded and that communities connect to understand their commonalities through sport and other activities. <br />
                                Increase female involvement in sport, leadership roles and empower women from all backgrounds. <br />
                                Ensure the resilience and leadership capabilities of future generations through mentoring, coaching and leadership development.
                            </p>

                        </div>
                    </div>

                </div>

            </div>






            <div className="action" onClick={action}>

                <span className="text-center">Be a part of <br />  Ekota</span>

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


            {/* <div className="teams">
                
                <div className="container text-center">
                    <div className="row">
                        <Fade left>
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
                        </Fade>
                        <Fade bottom>
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
                        </Fade>
                        <Fade right>
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
                        </Fade>
                    </div>
                </div>

            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Inspiration;