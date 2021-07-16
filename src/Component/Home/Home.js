import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../../Component/About/About';
import Banner from '../../Component/Banner/Banner';
import Success from '../../Component/Success/Success';
import Footer from '../../Component/Footer/Footer';
import seal from '../../image/seal-01.png';
import facebook from '../../image/021-facebook.png';
import instagram from '../../image/025-instagram.png';
import twitter from '../../image/043-twitter.png';
import Fade from  'react-reveal/Fade';
import cross from '../../image/cross-sign.png';
import video from '../../video/website video.mp4';
import './Home.css';

const Home = () => {
    function action() {
        var action =document.querySelector('.action');
        action.classList.toggle('active');
    }

    return (
       
        <div>
            <video className="video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
         
            <Navbar></Navbar>
            <Header></Header>
         
            <div className="action" onClick={action}>
            
                <span className="text-center">Be a part of <br />  Unity</span>
                
                <div className="popup">
                   
                  <div className="container ml-5">
                      
                      <div className="row pb-3  d-flex justify-content-center align-items-center">
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
           
           
            <About></About>
            <Banner></Banner>
            <Success></Success>
            <Footer></Footer>

        </div>
    );
};

export default Home;