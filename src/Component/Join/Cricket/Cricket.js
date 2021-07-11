import React from 'react';
import Navbar from '../../Navbar/Navbar';
import pictures from '../../../image/tSvrnmQSHpIhzlio4mPp51iKhOwA9hNbW5N8wNt63LgeJxFPc.jfif';
import img from '../../../image/MMTOR49NEwvCfEzvuAHuhuwvy4et_p55KiRIx4D9AMUeJxFPc.jfif';
import img1 from '../../../image/1X_u4PD9kdIdelCkR0rAx4aVDWE_wMwBQrgpC_XoeQ8eJxFPc.jfif';
import './Cricket.css';
import Footer from '../../Footer/Footer';

const Ceicket = () => {
    return (
        <div>
            <div className="cricket-background">
                <Navbar></Navbar>
                <h1>Cricket.</h1>
            </div>
            <div className="foundation-cricket">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <figure className="image">
                                <img className="img-fluid " src={pictures} alt="" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <h3>Foundation Programme</h3>
                           
                            <p>Building up from the All-Star programme we aim to provide children aged five to ten with a great foundation to develop their experience in cricket. The course designed to provide a basic introduction to the game of cricket, focusing on developing movement and skills needed for becoming a cricketer. Along with developing skills such as running, jumping, hand-eye coordination, catching, throwing and hitting, social skills such as listening, concentration and observation are also harnessed.</p>
                            <a href="#" class="btn">Express Your Interest</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foundation-cricket">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 foundations">
                            <h3>Intermediate programme</h3>
                           
                            <p>The course focuses on developing the all-round cricketing skills of the youngsters with the help of extensive coaching sessions. The tailored course aids students to gain expertise in catching, throwing, bowling, along with practising at the net and with the batting-bowling machine. The course intends to fine-tune the cricketing skills of the students with the group as well as one-on-one coaching sessions. The students are also provided with the option of playing tournaments and representing the academy through various activities & tours.</p>
                            <a href="#" class="btn">Express Your Interest</a>
                        </div>
                        <div className="col-md-6">
                            <figure className="image">
                                <img className="img-fluid " src={img} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="girls-cricket">
                .
                <h3>Cricket For Girls</h3>
                <p>Ekota academy encourages and provides empowering sporting experience for girls from the grassroots level. We give equal opportunities for girls to access cricket coaching at all of our sessions. Ekota provides a friendly and safe environment to all its trainees</p>
                <a href="#"className="btn">Express Your Interest</a>
            </div>
            <div className="foundation-cricket">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <figure className="image">
                                <img className="img-fluid " src={img1} alt="" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <h3>Advance  Programme</h3>
                            
                            <p> Building on the foundation and developing programme, this programme is designed to accelerate players through high-quality, structured coaching sessions designed to challenge the participants so that they can improve their skills.

                                These games are based on learning, testing on psychology and decision making, strength and conditioning, communication and leadership. Building upon the experiences, giving knowledge, skills and confidence to help individuals improve their game as well as developing a wide area of expertise on working within teams.
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

export default Ceicket;