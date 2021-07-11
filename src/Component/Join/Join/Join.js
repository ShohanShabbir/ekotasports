import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Join.css';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';


import { Link } from 'react-router-dom';
const Join = () => {
    return (
        <div>
            <div className="join">
                <Navbar></Navbar>
                <h1>Join Us.</h1>
            </div>

            <div className="main-section">
                <h1>Our purpose is to improve every <br /> young athlete in every session.</h1>
                <p>It is in-line with our mission to support world-class offers to ensure that <br /> you receive the best information, advice, guidance and resources to develop, <br /> professionally, as a young athlete.</p>
            </div>
            <div className="football">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">
                    <div className="left"></div>
                    <div className="right">
                        <div className="content">
                            <h3>Football.</h3>
                            <p>Ekota FC has been running Saturday clubs from 2014 in Goodmayes Park. We provide an opportunity for children to improve their skills and be a part of a competitive football team.Children from ages 5-16 of all abilities are welcome to join our weekly training sessions. The club is registered with the FA and the sessions are being facilitated by FA qualified coaches.</p>
                            <Link to='/football'><a href="#" class="discover-btn">Discover  More</a></Link>
                        </div>
                    </div>
                </div>

            </div>
            <Banner></Banner>
            <div className="cricket">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="right1">
                        <div className="content">
                            <h3>Cricket.</h3>

                            <p className="mb-5">Ekota aims to teach future cricketers new skills and to give them the very best first experience in the world of cricket.  A chance to play, learn great skills and meet new friends!
                                Ekota cricket programmes are designed for players wanting to get that competitive edge over their opponents. It is a high intense and structured program ensuring all facets of batting, bowling, and fielding are covered and that all players gain some more knowledge about becoming a cricket maestro.
                            </p>
                            <Link to='/cricket'> <a href="#" class="discover-btn">Discover  More</a></Link>
                        </div>
                    </div>
                    <div className="left1"></div>
                </div>
            </div>
            <div className="line1"></div>
            <div className="performance">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-4">
                            <h3>Performance Sports.</h3>
                        </div>
                        <div className="col-md-8">
                            <h5>Our world-class offer is driven by a range of performance sports under our ‘Academy of Sport’. All performance sports receive elite-level quality training, whilst additional sports science; nutrition, health, wellbeing, analytical, physical and lifestyle support for our student-athletes form our unrivalled performance programmes.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Join;