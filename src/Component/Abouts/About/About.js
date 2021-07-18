import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Inspiration from '../Inspiration/Inspiration';
import './About.css';

import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div className="abouts ">
            <div className="overlay">
                <Navbar></Navbar>
                <Fade left cascade>
                <h1>ABOUt US.</h1>
                </Fade>
            </div>
            <Inspiration></Inspiration> 

        </div>
    );
};

export default About;