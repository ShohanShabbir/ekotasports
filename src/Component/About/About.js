import React from 'react';

import image from '../../image/Rhns9QftfkRlWWBAri5rHBZArvxvEt4RygLPueojztEeJxFPc.jfif';
import image1 from '../../image/w29AnzRvddYhL8qZM_tAO2mzE62pRWHp-AdFzPYC70seJxFPc.jfif';
import image2 from '../../image/WlHzIft4vXCIj0hAebsU-4VivWE-w-eTwFB8qb1gevYeJxFPc.jfif';
import './About.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="about">
           
                .

            
     
            <div className="container about-card mt-5 ">
           
                <div class="row  row-cols-1  row-cols-lg-4 row-cols-md-3 g-4">

                    <Fade left>
               
                    <div class="col">
                       
                        <div class="card h-100">
                            <figure className="image">
                            <Link to='/abouts'><img className="img-fluid " src={image1} class="card-img-top" alt="..." /></Link>    
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Who we are</h5>
                                <p class="card-text">Ekota originally started with a sporting focus but has expanded into a social movement. Our work at Ekota is about Empowering communities  </p>
                            </div>
                            <div class="card-footer bg-transparent">
                           {/* <Link to='/abouts'><a href="#" class="btn">Discover More</a></Link>      */}
                            </div>
                        </div>
                        
                    </div>
                    </Fade>
               
                   
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                            <Link to='/join'><img className="img-fluid " src={image} class="card-img-top" alt="..." /></Link>    
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Sports.</h5>
                                <p class="card-text">
                                There are range of exciting activities you can get involved with either as a participant or a volunteer. At Ekota we welcome everyone.
                                    .</p>
                            </div>
                            <div class="card-footer bg-transparent">
                            {/* <Link to='/join'><a href="#" class="btn">Discover More</a></Link>     */}
                            </div>
                        </div>
                    </div>
                 
                    
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                            <Link to ='/community'><img className="img-fluid " src={image2} class="card-img-top" alt="..." /></Link>    
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Community</h5>
                                <p class="card-text">Communities are at the heart of Ekota and they are our superpower. We undertake a range of projects which bring them together individuals and groups to support and empower all.</p>
                            </div>
                            <div class="card-footer bg-transparent">
                            {/* <Link to ='/community'><a href="#" class="btn">Discover More</a></Link>     */}
                            </div>
                        </div>
                    </div>

                    <div class="col">
                       
                       <div class="card h-100">
                           <figure className="image">
                           <Link to='/news'>   <img className="img-fluid " src={image1} class="card-img-top" alt="..." /></Link>
                           </figure>
                           <div class="card-body">
                               <h5 class="card-title">News</h5>
                               <p class="card-text"> At Ekota there is always an activity and project to get involved with and we aim to keep our communities updated on all our latest developments.   </p>
                           </div>
                           <div class="card-footer bg-transparent">
                        {/* <Link to='/news'><a href="#" class="btn ">Discover More</a></Link>         */}
                           </div>
                       </div>
                       
                   </div>
                   
                </div>
            </div>
        </div>
    );
};

export default About;