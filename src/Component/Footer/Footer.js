import React from 'react';
import facebook from '../../image/021-facebook.png';
import twitter from '../../image/043-twitter.png';
import instagram from '../../image/025-instagram.png';
import linkedin from '../../image/045-linkedin.png';

import './Footer.css';


const Footer = () => {
    return (
        
            <div className="footers ">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-4">
                            <div className="line-footer"></div>
                        </div>
                        <div className="col-md-3 text">
                            <h3>Ekota</h3>
                            <h5>Academy</h5>
                        </div>
                        <div className="col-md-5"><div className="line-footer1"></div></div>
                    </div>
                </div>

                <div className="container details-footer">
                    <div className="detail1">
                        <h6>Privacy Policy</h6>
                        <h6 className="one">Club Policy </h6>
                        <h6 className="two" >About</h6>
                    </div>
                    <div className="detail2 d-flex justify-content-center align-items-center">
                        <img className="img-fluid "src={facebook} alt="" />
                        <img className="img-fluid "src={instagram} alt="" />
                        <img className="img-fluid "src={twitter} alt="" />
                        <img className="img-fluid "src={linkedin} alt="" />
                    </div>
                    <div className="detail3">
                        <h6>Cookie  Policy</h6>
                        <h6>News & Events </h6>
                        <h6>Sports</h6>
                    </div>
                </div>

            </div>
   
    );
};

export default Footer;