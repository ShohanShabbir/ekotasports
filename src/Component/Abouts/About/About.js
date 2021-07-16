import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Inspiration from '../Inspiration/Inspiration';
import './About.css';
import Bounce from  'react-reveal/Bounce';

const About = () => {
    return (
        <div className="abouts ">
            <div className="overlay">
                <Navbar></Navbar>
                <Bounce left cascade>
                <h1>ABOUt US.</h1>
                </Bounce>
            </div>
            <Inspiration></Inspiration> 

        </div>
    );
};

export default About;