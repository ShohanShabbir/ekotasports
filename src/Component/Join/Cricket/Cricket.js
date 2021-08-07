import React from 'react';
import Navbar from '../../Navbar/Navbar';
import pictures from '../../../image/tSvrnmQSHpIhzlio4mPp51iKhOwA9hNbW5N8wNt63LgeJxFPc.jfif';
import img from '../../../image/MMTOR49NEwvCfEzvuAHuhuwvy4et_p55KiRIx4D9AMUeJxFPc.jfif';
import img1 from '../../../image/1X_u4PD9kdIdelCkR0rAx4aVDWE_wMwBQrgpC_XoeQ8eJxFPc.jfif';
import dynamo from '../../../image/186067240_3820979101333082_1895083144967816894_n.png';

import './Cricket.css';
import Footer from '../../Footer/Footer';


const Cricket = () => {
    return (
        <div>
            <div className="cricket-background">
                <Navbar></Navbar>

                <h1>Cricket.</h1>

            </div>

            {/* <div className=" text-center academy">

                <div className="row w-100 d-flex justify-content-center align-items-center">

                    <div className="col-md-7">
                        <div className="para container">
                            <h1 style={{ fontWeight: '700', padding: '20px 40px', fontFamily: 'Poppins', fontSize: '50px', textAlign: 'left' }}> Cricket...</h1>
                            <p>
                                Ekota offers a range of coaching courses for children of 5-16 years on a weekly basis. Along with special programmes which run during school holidays.

                                Ekota in collaboration and association with the Essex Cricket Board (ECB) with our exhaustive cricket curriculum aims to develop every aspect of the game, build on existing talent, and create future cricketing stars.

                                Our students receive extensive coaching and training sessions to develop every aspect of the game – starting from increasing fitness levels through strength and conditioning training to perfecting skills and expertise. Coaches will focus on the strengths and weaknesses of the individual; whether it be batting, bowling, wicket keeping or fielding, and offer the unique opportunity to work on individual areas of improvement in a comfortable environment.

                                Our year-round training programme includes indoor and outdoor facilities for all.

                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img style={{ objectFit: 'cover' }} className="img-fluid" src={cricket} alt="" />
                    </div>
                </div>


            </div> */}
            <div className="all-star">
                <div className="container">
                    <div className="row all-star d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <img   src={dynamo} alt="" />
                        </div>
                        <div className="col-md-5 content">
                            <h2>All-Stars  and Dynamo Cricket programme ( April-August): </h2>
                            <h5>All-Stars Cricket and Dymano Cricket are the England and Wales Cricket Board’s entry-level participation programmes, aimed at providing children aged five to twelve with a great first experience in cricket.</h5>
                            <p>
                                Programme features:
                                <ul>
                                    <li>	For all boys and girls aged five to twelve </li>
                                    <li>	Eight one-hour sessions, held over eight weeks</li>
                                    <li>	Emphasis on fun and being active</li>
                                    <li>	Focus on developing your child's movement skills</li>
                                    <li>	Safe and fully accredited</li>
                                    <li>	Valuable time with your kids – mums, dads and guardians are encouraged to take part too </li>
                                    <li> 	Easy online registration </li>
                                    <li> 	Includes a bonus pack of personalised cricket kit</li>

                                </ul>
                            </p>
                            <h5>In addition every child that registers for the All Stars programme will receive a backpack full of goodies including a cricket bat, ball, personalised shirt and cap all sent straight to your door.

                                By registering for All Stars and Dynamo Cricket, your child will be guaranteed eight weeks of jam-packed fun, activity and skills development. The programme is suitable for all children new to cricket and sport as the sessions are designed to teach the basic skills of the game.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="girls-cricket">

                <div className="girl">

                    <h4>Female led and Girls only sessions </h4>
                    <p>Ekota has developed girls only sessions to provide focussed development opportunities for our female participants. These sessions are led by our all female ECB trained coaches who share their expertise, provide a supportive environment and provide positive role models to those who attend.

                    </p>

                </div>


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
            <div className="female">

                <div className="girl">

                    <h3>Cricket For Girls</h3>
                    <p>Ekota academy encourages and provides empowering sporting experience for girls from the grassroots level.</p>

                </div>


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

export default Cricket;