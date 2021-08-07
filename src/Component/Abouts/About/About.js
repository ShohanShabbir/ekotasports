import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Inspiration from '../Inspiration/Inspiration';
import './About.css';


const About = () => {
    return (
        <div className="abouts ">
            <div className="overlay">
                <Navbar></Navbar>
                
                <h1>ABOUt US.</h1>
                
            </div>
            <Inspiration></Inspiration> 

        </div>
    );
};

export default About;