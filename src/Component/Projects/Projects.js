import React from 'react';
import Navbar from '../Navbar/Navbar';
import folder from '../../image/folder.png';
import './Projects.css';
import Footer from '../Footer/Footer';

const Projects = () => {
    return (
        <div className="project-youth">
            <div className="project-bg">
                <Navbar></Navbar>
                <h1>Projects</h1>
            </div>
            
            <img style={{marginLeft: '100px'}} className="img-fluid img mt-5" src={folder} alt="" />

            <div className="container  project-des">
                <div className="row w-100 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h2>Youth <span>Outreach and Detached</span>  Project</h2>
                        <p>During lockdown we developed a project to engage with young people to encourage them to maintain their mental well-being, support each other through networks and participate in virtual sporting sessions. The project was successful in helping young people navigate challenging situations and connect through periods of isolation. </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>
                </div>
                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Leadership <span>Coaching</span>  Sessions</h2>
                        <p>A range of Ekota volunteers are currently progressing through a leadership programme. They are being taught key leadership theories, given real life task to undertake and connected to a peer network.</p>
                    </div>

                </div>

                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">

                    <div className="col-md-6">
                        <h2>Covid <span>Community Response</span>  Project </h2>
                        <p>The pandemic created challenges for the organisations outreach work. Working with Sports England and City Bridge Trust Ekota has developed new ways of engaging virtually and is working to strengthen its social media and digital platforms to support this work..</p>
                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>

                </div>

                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>2021 <span>International Women’s</span>  day </h2>
                        <p>On International Women’s Day,Ekotain partnership with Barking and Dagenham Council brought together a diverse group ofoutstanding women to share their lived experience focussing on this year’s theme of ‘Choose to Challenge’. This content was shared virtually and through social network platforms with high levels of measured engagement. The networks created from that day continue to be built upon and we will continue to develop this further.</p>
                    </div>

                </div>

                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                   
                    <div className="col-md-6">
                        <h2>Mental <span>Health and Wellbeing</span>   1-2-1 Support</h2>
                        <p>This project is aimed at supporting a range of at-risk individuals with direct support to help them through mental health challenges such as anxiety. Qualified coaches provide ongoing support to help provide coping mechanisms, access support and build resilience.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>

                </div>

                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Activities and <span>Games using</span>   a Social Distancing Model </h2>
                        <p>During the many periods of lockdown Ekota organised a range of virtual sporting sessions such as cricket and football. This was challenging but our coaches managed to develop sessions which allowed us to engage and work around what could and could not be done!  In addition during the periods when restrictions were lifted a number of social events such as ‘zorb’ football was held to encourage young people to return to activities in a safe and fun manner. </p>
                    </div>

                  

                </div>

                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                   
                    <div className="col-md-6">
                        <h2>Health <span>Education</span>  Project </h2>
                        <p>This project was developed through the support of Sports Lottery Funding.  Adults and teenagers were encouraged to learn more about physical and mental well-being, how to cope with issues such as isolation and participated in Ekotasporting activities - in person or virtually.Many of those who got involved through this project are still currently involved with the organisation resulting in a strong legacy for all.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>

                </div>

                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>I Soul <span>Volunteers</span>  Training  </h2>
                        <p>I Soul Volunteer’s training package is a project delivered, in partnership with the Department for Digital, Culture, Media and Sport and The National Lottery Community Fund.This fantastic programme involved training several volunteers in leadership, risk management and strengthening broader voluntary skills. Those involved have given excellent feedback on this learning opportunity and its impact.</p>
                    </div>

                  

                </div>
                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                    
                    <div className="col-md-6">
                        <h2>Access  <span>to Coaching</span> Training </h2>
                        <p>Ekota is always keen to work with our volunteers to strengthen their skills. We have provided a number of opportunities to individuals to achieve coaching qualifications including recent training of a number of female cricketing coaches. </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>

                </div>
                <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                        <img className="img-fluid" src={folder} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Community <span>Events</span> and Promotion </h2>
                        <p>Ekota has held a number of community celebration  events in The Vibe, in Goodmayes Park and at other local venues. Covid has limited our ability to bring people together in physical spaces, but we are currently planning an event in 2021 to mark the end of our Dynamo’s and All Stars’ programme and the launch of the Hub.</p>
                    </div>

                  

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;