import React from 'react';
import './testimonial.css';
import Fade from  'react-reveal/Fade';

const testimonial = () => {
    return (
        <div>
            <div className=" testimonial mt-5">
            <div className="background">
                <div className="description">
                    .
                    <Fade left>
                    <h2 className="mb-5">Ekota has helped my child to develop new skills and I can see the week on week physical improvements and he is always excited to attend the sessions</h2>
                    
                
                    
                    
                    <a style={{marginLeft:'20px'}} href="#" className="description-btn mt-3">Express Your Interest</a>
                    </Fade>
                </div>
            </div>
        </div>
        </div>
    );
};

export default testimonial;