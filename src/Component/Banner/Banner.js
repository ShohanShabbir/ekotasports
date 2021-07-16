import React from 'react';
import './Banner.css';
import Fade from  'react-reveal/Fade';
const Banner = () => {
    return (
        <div className="banner ">
            <div className="background">
                <div className="description">
                    .
                  <Fade left>
                  <h1>Free Trial</h1>
                    <a href="#" className="btn btn-danger">Book Now</a>
                  </Fade>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;