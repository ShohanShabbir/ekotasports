import React from 'react';
import Navbar from '../../Navbar/Navbar';
import pictures from '../../../image/hc8rhiIVhocyf4AFOZ3kfmePi0u-EdJ17HhLrZdUeU4eJxFPc.jfif';
import pictures1 from '../../../image/_6eXHo5z9xPNbksmoSg59VGOOgJti88zwJlE0ko3TzoeJxFPc.jfif';
import pictures2 from '../../../image/MZgeGYnnxdc73At89dvvAAvrDl2EVQ7GtrVsPPP1Ja4eJxFPc.jfif';
import './Football.css';
import Footer from '../../Footer/Footer';


const Football = () => {
    return (
        <div>
            <div className="navbar_background">
                <Navbar></Navbar>
               
                    <h1>Football.</h1>
             
            </div>

            <div className="foundation">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5">
                         
                                <figure className="images">
                                    <img className="img-fluid " src={pictures} alt="" />
                                </figure>
                        
                        </div>
                        <div className="col-md-7 foundation1">
                         
                                <h3>Foundation Programme.</h3>

                                <p>
                                    This course is designed to make the participants very first experience of football training an enjoyable one. The aim is to keep it exciting, rewarding and fun for the children.

                                    This is designed to provide a basic introduction to the game of football, focusing on developing the movement and skills needed for becoming a footballer. Fair play, team spirit and discipline are just a few of the many values taught during these sessions.

                                </p>
                         
                            <a href="#" class="btn">Express Your Interest</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foundation">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-md-7">
                         
                                <h3>Intermediate programme. </h3>

                                <p>
                                    This course focuses on developing the all-round footballing skills of participants with the help of extensive coaching sessions. The tailored course aids students to develop their footballing skills further including team working, leadership and communication.

                                    The course intends to fine-tune the footballing skills of the students on a group basis as well as one-on-one coaching sessions. The students are also provided with the option of playing tournaments and representing the academy through various activities and tours.


                                </p>
                           
                            <a href="#" class="btn">Express Your Interest</a>
                        </div>
                        <div className="col-md-5">
                       
                                <figure className="images">
                                    <img className="img-fluid " src={pictures1} alt="" />
                                </figure>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="foundation">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5">
                       
                                <figure className="images">
                                    <img className="img-fluid " src={pictures2} alt="" />
                                </figure>
                         
                        </div>
                        <div className="col-md-7 foundation1">
                          
                                <h3>Advance Programme.</h3>

                                <p>
                                    Building on the foundation and intermediate programme this course is designed to accelerate players through high-quality, structured coaching sessions designed to challenge participants.

                                    We scaffold a player's learning process, to create intelligent footballers. Player’s will be exposed to coordination, strength and agility work, tested cognitively and challenged with specific game-related exercises.


                                </p>
                        
                            <a href="#" class="btn">Express Your Interest</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Football;