import React from 'react';
import './Banner.css';

import {Link} from 'react-router-dom';
const Banner = () => {
    return (
        <div className="banner ">
            <div className="background">
                <div className="description">
                    .
                 
                  <h1>Free Trial</h1>
                 <Link to='/contact'> <a href="#" className="btn btn-danger">Book Now</a></Link>  
                 
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;