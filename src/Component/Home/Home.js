import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../../Component/About/About';
import Banner from '../../Component/Banner/Banner';
import Footer from '../../Component/Footer/Footer';

import facebook from '../../image/021-facebook.png';
import instagram from '../../image/025-instagram.png';
import twitter from '../../image/043-twitter.png';
import logo from '../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../image/City-bridge-trust-removebg-preview.png';

import cross from '../../image/cross-sign.png';
import video from '../../video/Comp 1.mp4';
import './Home.css';
import Testimonials from '../Testimonials/Testimonials';
import Gallery from '../Gallery/Gallery';


const Home = () => {
    function action() {
        var action =document.querySelector('.action');
        action.classList.toggle('active');
    }

    return (
       
        <div className="home">
           
            <video className="video" autoPlay loop muted>
                <source src={video} type="video/mp4" />

               
            </video>
          
         
            <Navbar></Navbar>
            <h1 className="home-text">The Place to Be</h1>
            <Header></Header>
         
            <div className="action" onClick={action}>
            
                <span className="text-center">Be  part of <br />  Ekota</span>
                
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
           
           
            <About></About>
            <Banner></Banner>
            <Testimonials></Testimonials> 
            <Gallery></Gallery>    
            <Footer></Footer>

        </div>
    );
};

export default Home;