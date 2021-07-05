import React from 'react';
import logo from '../../image/ekota sports.png';
import facebook from '../../image/021-facebook.png';
import twitter from '../../image/043-twitter.png';
import instagram from '../../image/025-instagram.png';
import youtube from '../../image/011-youtube.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer ">
            <div className="subscribe">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5">
                            <h6>Subscribe to Ekota sports</h6>
                            <small>To know latest news & events about the academy</small>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center align-items-center">
                            <div className="col-md-9">
                                <input type="text" placeholder="Your email address*" />
                            </div>
                            <div className="col-md-3">
                                <a href="#" className="btn btn-danger">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-part">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-3 logo">
                            <img  src={logo} alt="" />
                        </div>
                        <div className="col-md-3 address">
                            <h6>Aberdour Road <br />
                                Goodmayes
                                Ilford, Essex<br />
                                IG3 9SP
                            </h6>
                            <h6 className="mt-3">
                                +44 1253569872 <br />
                                info@ekotasports.com
                            </h6>

                        </div>
                        <div className="col-md-3 list">
                            <ul>
                                <li>About</li>
                                <li>Partners</li>
                                <li>Policies</li>
                                <li>Club</li>
                                <li>Success Stories</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="social">
                                <ul>
                                    <li><img style={{ height: '32px' }} className="img-fluid" src={facebook} alt="" /> </li>
                                    <li><img style={{ height: '32px' }} className="img-fluid mt-2" src={twitter} alt="" /></li>
                                    <li><img style={{ height: '32px' }} className="img-fluid mt-2" src={youtube} alt="" /></li>
                                    <li><img style={{ height: '32px' }} className="img-fluid mt-2" src={instagram} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="copyright">
                    <h6>Copyright © 2021 | All Rights Reserved | BitByteServ LTD</h6>
                </div>
            </div>

        </div>
    );
};

export default Footer;