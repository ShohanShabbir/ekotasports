import React from 'react';
import Particles from 'react-particles-js';
import image from '../../image/Rhns9QftfkRlWWBAri5rHBZArvxvEt4RygLPueojztEeJxFPc.jfif';
import image1 from '../../image/w29AnzRvddYhL8qZM_tAO2mzE62pRWHp-AdFzPYC70seJxFPc.jfif';
import image2 from '../../image/WlHzIft4vXCIj0hAebsU-4VivWE-w-eTwFB8qb1gevYeJxFPc.jfif';
import './About.css';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div className="about">
            <Fade left>
            <h1>Outstanding education and <br /> elite <span style={{color: '#e15430'}}>sport performance</span>  organisation.</h1>
            </Fade>
            <div className="container mt-5 ">
           
                <div class="row row-cols-1  row-cols-md-3 g-4">
                <Fade left>
                    <div class="col">
                       
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image1} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Academy of Sports</h5>
                                <p class="card-text">The organisation offers a range of sporting, education and community-based activities provided by our highly-skilled, experienced and knowledgeable team. </p>
                            </div>
                            {/* <div class="card-footer bg-transparent">
                                <a href="#" class="btn disabled">Discover More</a>
                            </div> */}
                        </div>
                        
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">NXT LVL.</h5>
                                <p class="card-text">
                                    Ekota has designed Performance Programme specifically for every aspiring athlete in various sports 
                                    .</p>
                            </div>
                            {/* <div class="card-footer bg-transparent">
                                <a href="#" class="btn btn-danger disabled">Discover More</a>
                            </div> */}
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image2} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Talent Pathway</h5>
                                <p class="card-text">Ekota Academy works to help children and adults improve their learning, sporting abilities and skills through teaching, empowerment and embedding self-confidence. Opportunities are available to learn new skills, get active, build networks and improve physical and mental well being. .</p>
                            </div>
                            {/* <div class="card-footer bg-transparent">
                                <a href="#" class="btn btn-danger disabled">Discover More</a>
                            </div> */}
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;