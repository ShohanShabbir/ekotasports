import React from 'react';
import pictures from '../../image/sx4GAJRVn1zCUV784eb8xNyeaGihP6BjmdIBCbkPWHMeJxFPc.jfif';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import facebook from '../../image/021-facebook.png';
import instagram from '../../image/025-instagram.png';
import twitter from '../../image/043-twitter.png';
import './News.css';
import Bounce from  'react-reveal/Bounce';
import cross from '../../image/cross-sign.png';
import Fade from 'react-reveal/Fade';

const News = () => {
    function action() {
        var action =document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div>
            <div className="news-background">
                <Navbar></Navbar>
                <Fade left cascade>
                <h1>News & Blogs.</h1>
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
            <div className="container events ">
                <div className="row container d-flex justify-content-center align-items-center">
                    <div className="col-md-4 col-sm-6">
                        <Bounce left>
                        <div className="boxs">
                            <div className="avatars">
                                <img src={pictures} alt="" />
                            </div>
                            <div className="box_contents">
                                <h3 className="title">Ekota Active New Year</h3>
                                <span className="post">Thank you to everyone who attended the Ekota Active New Year Event on the 7th February 2015.....</span>

                            </div>
                            <div className="btn-news">
                                <a href="#" className="btn1">Read More</a>
                            </div>
                        </div>
                        </Bounce>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Bounce bottom>
                        <div className="boxs">
                            <div className="avatars">
                                <img src={pictures} alt="" />
                            </div>
                            <div className="box_contents">
                                <h3 className="title">The Indoor Tournament</h3>
                                <span className="post">The indoor tournament, activities and food were enjoyed by all. Prizes were given to the successful teams and recognition was given for individual efforts across the season.</span>

                            </div>
                            <div className="btn-news">
                                <a href="#" className="btn1">Read More</a>
                            </div>
                        </div>
                        </Bounce>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Bounce right>
                        <div className="boxs">
                            <div className="avatars">
                                <img src={pictures} alt="" />
                            </div>
                            <div className="box_contents">
                                <h3 className="title">Successful Events</h3>
                                <span className="post">It was a successful event which brought the community together to connect and celebrate our achievements.  </span>

                            </div>
                            <div className="btn-news">
                                <a href="#" className="btn1">Read More</a>
                            </div>
                        </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default News;