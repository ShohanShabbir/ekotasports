import React from 'react';
import Navbar from '../Navbar/Navbar';
import seal from '../../image/seal-01.png';
import summer from '../../image/WhatsApp Image 2021-07-30 at 5.46.07 PM.jpeg';
import hub from '../../image/WhatsApp Image 2021-07-30 at 5.50.51 PM.jpeg';
import './Community.css';
import community from '../../image/communityjpeg.jpeg';
import logo from '../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../image/City-bridge-trust-removebg-preview.png';

import facebook from '../../image/021-facebook.png';
import instagram from '../../image/025-instagram.png';
import twitter from '../../image/043-twitter.png';
import Footer from '../Footer/Footer';


import cross from '../../image/cross-sign.png';

const Community = () => {
    function action() {
        var action = document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div>
            <div className="community">
                <Navbar></Navbar>

                <h1>Community.</h1>

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

            
            {/* <div className="projects">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-md-5  health  col-sm-6 col-12">
                            <img className="img-fluid" src={community} alt="" />
                        </div>

                        <div className="col-md-7  col-sm-6 col-12">
                            <h4 className="mb-5">Population Health and Tackling Inequalities</h4>
                            <p>The work of Ekota aims to contribute to tackling health inequalities that exist in our local communities. Covid -19 has exacerbated existing challenges which makes our work harder but even more important. The people and groups we work with face some of the greatest social and economic challenges with higher rates of deprivation and poorer health outcomes from birth and throughout their lives.

                                Our work involves partnership working, prevention, community integration and networks, individual and group development opportunities, physical health and mental well-being interventions, encouraging behaviour changes, providing virtual and physical community space and delivering engagement mechanisms, all of which are at the heart of successful population health improvement.We believe that Ekota can only be successful through working in partnership with individuals within our communities, other voluntary organisations, health and social care providers, local authorities, national sporting organisations and a wide range of other stakeholders.  This is why we consider our work as being part of a wider social movement and framework in which we unite, take action and maximise resources working towards change and the betterment of our communities.

                                There is a range of work taking place and planned in regard to delivering population health approaches and tackling health inequalities and we at Ekota are a key champion of this work.

                                Do get in touch with us if you would like to find out more about our work or want to work with us.

                            </p>
                        </div>




                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-md-7  col-sm-6 col-12">
                            <h3> <span style={{ color: '#e15430' }}>Summer </span> Camps </h3>
                            <p>Ekota has been commissioned to deliver a number of summer camps in 2021. Look out for details of programmes </p>
                        </div>


                        <div className="col-md-5  col-sm-6 col-12">
                            <img className="img-fluid" src={summer} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="container">

                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5 col-sm-6 col-12">
                            <img className="img-fluid" src={hub} alt="" />
                        </div>
                        <div className="col-md-7 col-sm-6 col-12">
                            <h3>Launch of the <span style={{ color: '#e15430' }}>Ekota Hub </span> in Goodmayes Park</h3>
                            <p>Over the past year Ekota has been working with Redbridge Council, England Cricket Board and Vision to develop a community hub and to support grassroots sports in Goodmayes Park.  We are now the leaseholder of the Goodmayes Park Pavilion and are currently developing the premises included a café which is due to open soon. </p>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="population" id="population">
                <div className="container containers" id="section">
                   
                    <div className="population-right">
                        <div className="content">
                        <h4 className="mb-5">Population Health and Tackling Inequalities</h4>
                            <p>The work of Ekota aims to contribute to tackling health inequalities that exist in our local communities. Covid -19 has exacerbated existing challenges which makes our work harder but even more important. The people and groups we work with face some of the greatest social and economic challenges with higher rates of deprivation and poorer health outcomes from birth and throughout their lives.

                                Our work involves partnership working, prevention, community integration and networks, individual and group development opportunities, physical health and mental well-being interventions, encouraging behaviour changes, providing virtual and physical community space and delivering engagement mechanisms, all of which are at the heart of successful population health improvement.We believe that Ekota can only be successful through working in partnership with individuals within our communities, other voluntary organisations, health and social care providers, local authorities, national sporting organisations and a wide range of other stakeholders.  This is why we consider our work as being part of a wider social movement and framework in which we unite, take action and maximise resources working towards change and the betterment of our communities.

                                There is a range of work taking place and planned in regard to delivering population health approaches and tackling health inequalities and we at Ekota are a key champion of this work.

                                Do get in touch with us if you would like to find out more about our work or want to work with us.

                            </p>
                        </div>
                    </div>
                    <div className="population-left"></div>
                </div>
            </div>

            <div className="summer-camp">
                <div className="container containers" id="section">
                    <div className="summer-left"></div>
                    <div className="summer-right">
                        <div className="content">
                        <h3> <span style={{ color: '#e15430' }}>Summer </span> Camps </h3>
                            <p>Ekota has been commissioned to deliver a number of summer camps in 2021. Look out for details of programmes </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ekota-hub">
                <div className="container containers" id="section">
                    <div className="ekota-right">
                        <div className="content">
                        <h3>Launch of the <span style={{ color: '#e15430' }}>Ekota Hub </span> in Goodmayes Park</h3>
                            <p>Over the past year Ekota has been working with Redbridge Council, England Cricket Board and Vision to develop a community hub and to support grassroots sports in Goodmayes Park.  We are now the leaseholder of the Goodmayes Park Pavilion and are currently developing the premises included a café which is due to open soon. </p>
                        </div>

                    </div>
                    <div className="ekota-left"></div>
                </div>
            </div>

           

            <Footer></Footer>
        </div>
    );
};

export default Community;