import React from 'react';
import Particles from 'react-particles-js';
import image from '../../image/Rhns9QftfkRlWWBAri5rHBZArvxvEt4RygLPueojztEeJxFPc.jfif';
import image1 from '../../image/w29AnzRvddYhL8qZM_tAO2mzE62pRWHp-AdFzPYC70seJxFPc.jfif';
import image2 from '../../image/WlHzIft4vXCIj0hAebsU-4VivWE-w-eTwFB8qb1gevYeJxFPc.jfif';
import './About.css';


const About = () => {
    return (
        <div className="about">
            <h1>Outstanding education and <br /> elite sport performance <br /> organisation.</h1>

            <div className="container mt-5 ">
                <div class="row row-cols-1  row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image1} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Academy of Sports</h5>
                                <p class="card-text">An elite full-time academic and sports performance programme housed at world-class facilities with a core focus on student-athlete development</p>
                            </div>
                            <div class="card-footer bg-transparent">
                                <a href="#" class="btn btn-danger">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">NXT LVL.</h5>
                                <p class="card-text">
                                    World-class Football Performance Programme designed specifically for every aspiring football player aged eighteen to twenty-three.
                                    .</p>
                            </div>
                            <div class="card-footer bg-transparent">
                                <a href="#" class="btn btn-danger">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image2} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Talent Pathway</h5>
                                <p class="card-text">As a young-athlete aged between Nine to sixteen years old, develop your performance even further on our aspiring talent pathway.</p>
                            </div>
                            <div class="card-footer bg-transparent">
                                <a href="#" class="btn btn-danger">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;