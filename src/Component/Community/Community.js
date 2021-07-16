import React from 'react';
import Navbar from '../Navbar/Navbar';
import seal from '../../image/seal-01.png'
import './Community.css';

import facebook from '../../image/021-facebook.png';
import instagram from '../../image/025-instagram.png';
import twitter from '../../image/043-twitter.png';
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
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
                <Bounce left cascade>
                    <h1>Community.</h1>
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
                        {/* <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-8">
                                <input style={{ border: '1px solid #000' }} type="text" placeholder="Your Email" />
                                <a href="#" className="btn">Subscribe</a>
                            </div>
                            <div className="col-md-4 icon">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-4">
                                        <h6>Follow Us On:</h6>
                                    </div>
                                    <div className="col-md-8">
                                        <ul>
                                            <li> <img className="img-fluid " src={facebook} alt="" />  </li>
                                            <li><img className="img-fluid " src={instagram} alt="" /></li>
                                            <li><img className="img-fluid " src={twitter} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="health">
                    <Fade left>
                        <h1>Community Projects</h1>
                    </Fade>
                    <Bounce left>
                        <h4 className="mb-5">Population Health and Tackling Inequalities</h4>
                        <div className="para para1">
                            <h1>&#8221;</h1>
                            <p>The work of Ekota aims to contribute to tackling health inequalities that exist in our local communities. Covid -19 has exacerbated existing challenges which makes our work harder but even more important. The people and groups we work with face some of the greatest social and economic challenges with higher rates of deprivation and poorer health outcomes from birth and throughout their lives.

                                Our work involves partnership working, prevention, community integration and networks, individual and group development opportunities, physical health and mental well-being interventions, encouraging behaviour changes, providing virtual and physical community space and delivering engagement mechanisms, all of which are at the heart of successful population health improvement.We believe that Ekota can only be successful through working in partnership with individuals within our communities, other voluntary organisations, health and social care providers, local authorities, national sporting organisations and a wide range of other stakeholders.  This is why we consider our work as being part of a wider social movement and framework in which we unite, take action and maximise resources working towards change and the betterment of our communities.

                                There is a range of work taking place and planned in regard to delivering population health approaches and tackling health inequalities and we at Ekota are a key champion of this work.

                                Do get in touch with us if you would like to find out more about our work or want to work with us.

                            </p>
                        </div>
                    </Bounce>

                </div>
            </div>
            <div className="projects">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <Bounce left>
                            <div className="col-md-7  col-sm-6 col-12">
                                <h3> <span style={{ color: '#e15430' }}>Summer </span> Camps </h3>
                                <p>Ekota has been commissioned to deliver a number of summer camps in 2021. Look out for details of programmes </p>
                            </div>


                            <div className="col-md-5  col-sm-6 col-12">
                                <img className="img-fluid" src={seal} alt="" />
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="container">
                    <Bounce right>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-5 col-sm-6 col-12">
                                <img className="img-fluid" src={seal} alt="" />
                            </div>
                            <div className="col-md-7 col-sm-6 col-12">
                                <h3>Launch of the <span style={{ color: '#e15430' }}>Ekota Hub </span> in Goodmayes Park</h3>
                                <p>Over the past year Ekota has been working with Redbridge Council, England Cricket Board and Vision to develop a community hub and to support grassroots sports in Goodmayes Park.  We are now the leaseholder of the Goodmayes Park Pavilion and are currently developing the premises included a café which is due to open soon. </p>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </div>

            <div className="testimonials community-slider project text-center  ">
                <h1 style={{ fontSize: '28px' }} className="mb-5"><Fade left cascade> <span style={{ color: '#e15430', fontSize: '45px' }}>Projects</span></Fade> </h1>
                <Bounce right>
                    <div className="container">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <h4>Youth Outreach and Detached Project </h4>
                                    <p>‘’During lockdown we developed a project to engage with young people to encourage them to maintain their mental well-being, support each other through networks and participate in virtual sporting sessions. The project was successful in helping young people navigate challenging situations and connect through periods of isolation. ’’</p>
                                   

                                </div>
                                <div class="carousel-item">
                                <h4>Leadership Coaching Sessions </h4>
                                    <p>‘’A range of Ekota volunteers are currently progressing through a leadership programme. They are being taught key leadership theories, given real life task to undertake and connected to a peer network.’’</p>
                                   

                                </div>
                                <div class="carousel-item">
                                <h4>Covid Community Response Project </h4>
                                    <p>‘’The pandemic created challenges for the organisations outreach work. Working with Sports England and City Bridge Trust Ekota has developed new ways of engaging virtually and is working to strengthen its social media and digital platforms to support this work.’’</p>
                                   

                                </div>
                                <div class="carousel-item">
                                     <h4>2021 International Women’s day </h4>

                                    <p>‘’On International Women’s Day, Ekota in partnership with Barking and Dagenham Council brought together a diverse group of outstanding women to share their lived experience focussing on this year’s theme of ‘Choose to Challenge’. This content was shared virtually and through social network platforms with high levels of measured engagement. The networks created from that day continue to be built upon and we will continue to develop this further’’</p>
                                  
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '100px' }} className="img-fluid mb-5 " src={seal} alt="" />
                                    <p>‘’- This project is aimed at supporting a range of at-risk individuals with direct support to help them through mental health challenges such as anxiety. Qualified coaches provide ongoing support to help provide coping mechanisms, access support and build resilience.’’</p>
                                    <h4>Mental Health and Wellbeing 1-2-1 Support</h4>

                                </div>
                                <div class="carousel-item">
                                <h4>Activities and Games using a Social Distancing Model</h4>
                                    <p>‘’During the many periods of lockdown Ekota organised a range of virtual sporting sessions such as cricket and football. This was challenging but our coaches managed to develop sessions which allowed us to engage and work around what could and could not be done!  In addition during the periods when restrictions were lifted a number of social events such as ‘zorb’ football was held to encourage young people to return to activities in a safe and fun manner. ’’</p>
                                  

                                </div>
                                <div class="carousel-item">
                                <h4>Health Education Project </h4>
                                    <p>‘’This project was developed through the support of Sports England.  Adults and teenagers were encouraged to learn more about physical and mental well-being, how to cope with issues such as isolation and participated in Ekota sporting activities - in person or virtually. Many of those who got involved through this project are still currently involved with the organisation resulting in a strong legacy for all. ’’</p>
                                 

                                </div>
                                <div class="carousel-item">
                                <h4>Soul Volunteers Training  </h4>
                                    <p>‘’I Soul Volunteer’s training package is a project delivered, in partnership with the Department for Digital, Culture, Media and Sport and The National Lottery Community Fund. This fantastic programme involved training several volunteers in leadership, risk management and strengthening broader voluntary skills. Those involved have given excellent feedback on this learning opportunity and its impact. ’’</p>
                                 

                                </div>
                                <div class="carousel-item">
                                    <h4>Access to Coaching Training  </h4>
                                    <p>‘’Ekota is always keen to work with our volunteers to strengthen their skills. We have provided a number of opportunities to individuals to achieve coaching qualifications including recent training of a number of female cricketing coaches.  ’’</p>


                                </div>
                                <div class="carousel-item">
                                    <h4 className="mb-5">Community Events and Promotion  </h4>
                                    <p>‘’Ekota has held a number of community celebration  events in The Vibe, in Goodmayes Park and at other local venues. Covid has limited our ability to bring people together in physical spaces, but we are currently planning an event in 2021 to mark the end of our Dynamo’s and All Stars’ programme and the launch of the Hub. ’’</p>


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
                </Bounce>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Community;