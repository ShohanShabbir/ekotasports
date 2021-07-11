import React from 'react';
import pic from '../../../image/Group 1.png';
import pic2 from '../../../image/Group 2.png';
import pic3 from '../../../image/Group 3.png';
import Testimonial from '../Testimonial/testimonial';
import pictures from '../../../image/WhatsApp Image 2021-07-07 at 11.23.27.jpeg';
import facebook from '../../../image/021-facebook.png';
import twitter from '../../../image/043-twitter.png';
import instagram from '../../../image/025-instagram.png';
import Footer from '../../Footer/Footer';



import './Inspiration.css';
const Inspiration = () => {
    return (
        <div className="inspiration ">
        
            {/* <div className="container info">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5 col-12 ">
                        <figure className="image">
                            <img src={pic} alt="" />
                        </figure>
                    </div>
                    <div className="col-md-7 text col-12">
                        <h2>Values.</h2>
                        <div className="line"></div>
                        <h4>Who we are.</h4>
                        <p>Ekota originally started with a sporting focus but is expanding into other areas.
                            Our vision at Ekota is “Empowering Communities and future generations through sports, education, Knowledge, Opportunity, Teamwork, and Activities”.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container info">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-7 text">
                        <h2>Priority.</h2>
                        <div className="line"></div>
                        <h4>The student-athlete at the heart of everything we do.</h4>
                        <p>Ekota Academy works to help children and young adults improve their learning, sporting abilities and skills through teaching, empowerment and embedding self-confidence
                        </p>
                    </div>
                    <div className="col-md-5 ">
                        <figure className="image">
                            <img src={pic2} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="container info">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5 ">
                        <figure className="image">
                            <img src={pic3} alt="" />
                        </figure>
                    </div>
                    <div className="col-md-7 text">
                        <h2>Our Team.</h2>
                        <div className="line"></div>
                        <h4>Like-minded individuals as a high-performance collective.</h4>
                        <p>Our team has a range of expertise and backgrounds with a track record of successful delivery of projects. The existing team is made up of 3 trustees, a chief officer, consultants and a number of coaches in their speciality of the field who work for the club.
                        </p>
                        <a href="#" class="btn btn-danger">Meet Our Team</a>
                    </div>
                </div>
            </div> */}
            <div style={{margin: '0', padding: '0', boxSizing: 'border-box'}} className="container containers" id="section">
                <div className="left"></div>
                <div className="right">
                    <div className="content">
                        <h2>Values.</h2>
                        <h4>Who we are.</h4>
                        <p className="mb-5">Ekota originally started with a sporting focus but is expanding into other areas.
                            Our vision at Ekota is “Empowering Communities and future generations through sports, education, Knowledge, Opportunity, Teamwork, and Activities”.
                        </p>
                        <a href="#" class="discover-btn">Discover  More</a>
                    </div>
                </div>
            </div>

           
            <Testimonial></Testimonial>
           
            <div style={{margin: '0', padding: '0', boxSizing: 'border-box'}} className="container containers" id="section">
               
               <div className="rights1">
                   <div className="content">
                    <h2>Priority.</h2>
                        
                        <h4>The student-athlete at the heart of everything we do.</h4>
                        <p className="mb-5">Ekota Academy works to help children and young adults improve their learning, sporting abilities and skills through teaching, empowerment and embedding self-confidence
                        </p>
                       <a href="#" class="discover-btn">Discover  More</a>
                   </div>
               </div>
               <div className="left1"></div>
           </div>

            {/* <div className="team">
                <h3>Our Team.</h3>

                <div className="container mt-5">
                    <div class="row container row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <figure className="image">
                                    <img src={pictures} class="card-img-top" alt="..." />
                                </figure>
                                <div class="card-body">
                                    <h5 class="card-title">Emdad Rahman</h5>
                                    <p class="card-text">Football Coach</p>
                                    <div className="socials">
                                        <ul>
                                            <li> <img className="img-fluid" src={facebook} alt="" /> </li>
                                            <li> <img className="img-fluid" src={instagram} alt="" /></li>
                                            <li> <img className="img-fluid" src={twitter} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <figure className="image">
                                    <img src={pictures} class="card-img-top" alt="..." />
                                </figure>
                                <div class="card-body">
                                    <h5 class="card-title">Emdad Rahman</h5>
                                    <p class="card-text">Football Coach</p>
                                    <div className="socials">
                                        <ul>
                                            <li> <img className="img-fluid" src={facebook} alt="" /> </li>
                                            <li> <img className="img-fluid" src={instagram} alt="" /></li>
                                            <li> <img className="img-fluid" src={twitter} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <figure className="image">
                                    <img src={pictures} class="card-img-top" alt="..." />
                                </figure>
                                <div class="card-body">
                                    <h5 class="card-title">Emdad Rahman</h5>
                                    <p class="card-text">Football Coach</p>
                                    <div className="socials">
                                        <ul>
                                            <li> <img className="img-fluid" src={facebook} alt="" /> </li>
                                            <li> <img className="img-fluid" src={instagram} alt="" /></li>
                                            <li> <img className="img-fluid" src={twitter} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

            <div className="teams">
                <h1 className="mb-5">Meet Our team</h1>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                                <div className="box">
                                    <div className="avatar">
                                        <img className="img-fluid "src={pictures} alt="" />
                                    </div>
                                    <div className="box_content">
                                        <h3 className="title">Emadad Rahamn</h3>
                                        <span className="post">football Coach</span>

                                    </div>
                                    <ul className="icons-social">
                                        <li><a href="#"><img  className="img-fluid img" src={facebook} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                                <div className="box">
                                    <div className="avatar">
                                        <img className="img-fluid "src={pictures} alt="" />
                                    </div>
                                    <div className="box_content">
                                        <h3 className="title">Emadad Rahamn</h3>
                                        <span className="post">football Coach</span>

                                    </div>
                                    <ul className="icons-social">
                                        <li><a href="#"><img  className="img-fluid img" src={facebook} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                                <div className="box">
                                    <div className="avatar">
                                        <img className="img-fluid "src={pictures} alt="" />
                                    </div>
                                    <div className="box_content">
                                        <h3 className="title">Emadad Rahamn</h3>
                                        <span className="post">football Coach</span>

                                    </div>
                                    <ul className="icons-social">
                                        <li><a href="#"><img  className="img-fluid img" src={facebook} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={instagram} alt="" /></a></li>
                                        <li><a href="#"><img className="img-fluid img" src={twitter} alt="" /></a></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inspiration;