import React from 'react';
import logo from '../../image/ekota sports.png';
import facebook from '../../image/021-facebook.png';
import twitter from '../../image/043-twitter.png';
import instagram from '../../image/025-instagram.png';
import youtube from '../../image/011-youtube.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footers ">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-4">
                        <div className="line-footer"></div>
                    </div>
                    <div className="col-md-4 text">
                        <h3>Ekota</h3>
                        <h5>Sports</h5>
                    </div>
                    <div className="col-md-4"><div className="line-footer"></div></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 detail-section">
                        <h6 className="mb-3"> <a href="#">Privacy policy</a> </h6>
                        <h6 className="mb-3"><a href="#">Club policy</a></h6>
                        <h6><a href="#">About</a></h6>
                    </div>
                    <div className="col-md-4 ">
                        <div className="social-icon">
                            <ul className="d-flex justify-content-center align-items-center">
                                <li> <a href="https://www.facebook.com/ekotasports"><img className="img-fluid" src={facebook} alt="" /> </a> </li>
                                <li> <img className="img-fluid" src={instagram} alt="" /> </li>
                                <li> <img className="img-fluid" src={twitter} alt="" /> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 detail-section">
                        <h6 className="mb-3"> <a href="#">Cookies policy</a> </h6>
                        <h6 className="mb-3"><a href="#">News & Events</a></h6>
                        <h6><a href="#">About</a></h6>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <h5>WEEKLY NEWSLETTER</h5>
                <input type="text" required="required" placeholder="Name@gmail.com" /> <br />
                <a href="#" className="button">Subscribe</a>

            </div>

        </div>
    );
};

export default Footer;