import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact-navbar">
                <Navbar></Navbar>
                <h1>Contact Us.</h1>
            </div>

            <div className="contact">
                <h3>Contact Us for your queries</h3>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 col-sm-6">
                            <div className="boxs">
                                <div className="box_contents">
                                    <input type="text" placeholder="Your Name" required="required" />
                                    <br />
                                    <input type="text" placeholder="Your Email" required="required" />
                                    <br />
                                    <input type="text" placeholder="Your Question" required="required" />
                                    <br />
                                    <textarea placeholder="Message"></textarea>

                                </div>
                                <div className="btn-news">
                                    <a href="#" className="btn1">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;