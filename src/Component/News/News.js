import React from 'react';
import pictures from '../../image/sx4GAJRVn1zCUV784eb8xNyeaGihP6BjmdIBCbkPWHMeJxFPc.jfif';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import image from '../../image/1X_u4PD9kdIdelCkR0rAx4aVDWE_wMwBQrgpC_XoeQ8eJxFPc.jfif';
import news from '../../image/Screenshot-2021-03-26-at-18.52.38-1500x844.png';
import image2 from '../../image/Screenshot-2021-03-29-at-11.26.58-1500x844.png';
import image1 from '../../image/Grouppic-1500x803.jpg';
import image3 from '../../image/20200826_112019-1500x701.jpg';
import logo from '../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../image/Eagles_in_the_Community_Logo_2018_1-removebg-preview.png';
import logo2 from '../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../image/CCSF-HM-removebg-preview.png';
import logo4 from '../../image/National-Lottery-removebg-preview.png'
import logo5 from '../../image/City-bridge-trust-removebg-preview.png';


import facebook from '../../image/021-facebook.png';
import instagram from '../../image/025-instagram.png';
import twitter from '../../image/043-twitter.png';
import './News.css';

import cross from '../../image/cross-sign.png';


const News = () => {
    function action() {
        var action = document.querySelector('.action');
        action.classList.toggle('active');
    }
    return (
        <div>
            <div className="news-background">
                <Navbar></Navbar>

                <h1>News & Blogs.</h1>

            </div>
            <div className="action" onClick={action}>

                <span className="text-center">Be  part of <br />  Ekota</span>

                <div className="popup">

                    <div className="container ml-5">

                        <div className="row  d-flex justify-content-center align-items-center">
                            <div className="col-md-4">
                                <h4>Sponsor</h4>
                                <h3>Ekota Sports</h3>
                                <small>Be a Member</small>
                                <div className="action">
                                    <span> <img className="cross" src={cross} alt="" /> </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h4>Career At</h4>
                                <h3>Ekota Sports</h3>
                                <small>Join the team</small>
                                <div className="action">
                                    <span> <img className="cross" src={cross} alt="" /> </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h4>Join</h4>
                                <h3>Ekota Sports</h3>
                                <small>Be a Volunteer</small>
                                <div className="action">
                                    <span> <img className="cross" src={cross} alt="" /> </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container-fluid subscribe mt-5">
                      <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-md-8 partner-1">
                             <div className="row d-flex justify-content-center align-items-center">
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo1} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo2} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid "src={logo3} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid logos"src={logo4} alt="" />
                                 </div>
                                 <div className="col-md-2">
                                     <img className="img-fluid logos"src={logo5} alt="" />
                                 </div>
                             </div>
                         </div>
                      <div className="col-md-4 icon ">
                              <div className="row d-flex justify-content-center align-items-center">
                                  <div className="col-md-5">
                                      <h6>Follow Us On:</h6>
                                  </div>
                                  <div className="col-md-7">
                                  <img className="img-fluid "src={facebook} alt="" />
                                  <img className="img-fluid "src={instagram} alt="" />
                                  <img className="img-fluid "src={twitter} alt="" />
                                  </div>
                              </div>
                          </div>

                        
                      </div>
                  </div>

                </div>
            </div>

            <div className="container  ">
                <div className="row news d-flex justify-content-center align-items-center">
                    <div className="col-md-5 news-img">
                        <img className="img-fluid "  src={news} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>ISOUL Volunteer’s Training</h2>
                        <p>
                            As Ekota Academy approaches the end of the year, we continue to offer a range of programmes and opportunities. One of these is the I Soul Volunteer’s training package, which was delivered, in partnership with the Department for Digital, Culture, Media and Sport and The National Lottery Community Fund.

                            This fantastic programme involved training several volunteers in leadership, risk management and broader voluntary skills. Those involved have given excellent feedback on this learning opportunity and its impact.

                            Sharmin Begum, one of the participants, said,” I found it a good course. It was hard at first, but I really enjoyed the chance to meet new people, think about my leadership and learn more about volunteering.”

                            The programme focused on helping all those involved to develop and strengthen their volunteering skills. The aim was also to use the learning gained to inspire and be a platform for further individual development.

                            The volunteers will hopefully be working with Ekota on many of our programmes over the next year, so they have been empowered further to confidently work and contribute to our shared goals. Well done to all those involved in the delivery and to those participating!
                            <br />
                            Sultana Rahman
                            <br />
                            Chair
                            <br />
                            Ekota Academy
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="container news1 mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row ">
                            <div className="col-md-12 mb-5 d-flex justify-content-center align-items-center">
                                <img className="img-fluid " src={news} alt="" />
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.</h4>
                            </div>
                            <div className="col-md-12 mb-5 d-flex justify-content-center align-items-center">
                                <img className="img-fluid " src={news} alt="" />
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.</h4>
                            </div>
                            <div className="col-md-12 mb-5 d-flex justify-content-center align-items-center">
                                <img className="img-fluid " src={news} alt="" />
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.</h4>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <img className="img-fluid " src={news} alt="" />
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 news2">
                        <div className="row ">
                            <div className="col-md-12 mb-5 ">
                                <img className="img-fluid " src={news} alt="" />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum veritatis neque rerum! Obcaecati praesentium illo officia quos neque dolorum magni nisi. Iure numquam quod veritatis architecto soluta animi consequatur nulla.</p>
                            </div>
                            <div className="col-md-12 mb-5 ">
                                <img className="img-fluid " src={news} alt="" />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum veritatis neque rerum! Obcaecati praesentium illo officia quos neque dolorum magni nisi. Iure numquam quod veritatis architecto soluta animi consequatur nulla.</p>
                            </div>
                            <div className="col-md-12 ">
                                <img className="img-fluid " src={news} alt="" />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum veritatis neque rerum! Obcaecati praesentium illo officia quos neque dolorum magni nisi. Iure numquam quod veritatis architecto soluta animi consequatur nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <h2 className="text-center mt-5">Popular Posts</h2>
            <div className="container news3 mt-5 ">

                <div class="row  row-cols-1  row-cols-lg-4 row-cols-md-3 g-4">



                    <div class="col">

                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image3} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Developing youngsters</h5>
                                <p class="card-text">At Ekota Academy, we are dedicated to not only developing sporting prowess, but we try to lead by example at all times. Cricket is only one of many sports we are delivering, and includes, football, running, martial arts. In a short space of time, we have also sent our young players for various trials, and we thrive on engaging </p>
                                <a href="#" class="news-btn">Read More</a>
                            </div>

                        </div>

                    </div>



                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid" src={image} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Impact of coaching</h5>
                                <p class="card-text">
                                    A Coach will impact more young people in a year than the average person does in a lifetime!

                                    Our Academy started after we decided to look into providing accessible sports for young people in our locality. We serve our community through sports, but it’s a lot more than just that as we mentor, guide and teach every young person we work with.
                                </p>
                                <a href="#" class="news-btn">Read More</a>
                            </div>

                        </div>
                    </div>


                    <div class="col">
                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image2} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">International Women’s Day</h5>
                                <p class="card-text">International Women’s day is always an important day for Ekota Academy. With our strong female leadership team and focus on empowering women and girls through our work, the day is always a key point of reflection and celebration.

                                    This year we held a virtual webinar, sponsored by Barking and Dagenham Council

                               
                                </p>
                                <a href="#" class="news-btn">Read More</a>
                            </div>

                        </div>
                    </div>

                    <div class="col">

                        <div class="card h-100">
                            <figure className="image">
                                <img className="img-fluid " src={image1} class="card-img-top" alt="..." />
                            </figure>
                            <div class="card-body">
                                <h5 class="card-title">Winning is Infectious!</h5>
                                <p class="card-text"> Winning is infectious! Mayfield Cup Champions! Well done boys!

                                    At Ekota Academy we coach sports and also mentor, guide and inspire.

                                    We keep the kids busy and sessions are always fun, always vigorous. The idea is they’re too tired afterwards to get up to any hanky panky.

                                      
                                 </p>
                                 <a href="#" class="news-btn">Read More</a>
                            </div>
                        
                           

                        </div>

                    </div>

                </div>
            </div>

            <div className="tournament">
                <h2>Tournaments</h2>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid " src={image3} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4>We provide on-ground competitive experience to our students through regular tournaments. To support participants all-round development – installing confidence, increasing concentration, and creating the right mental attitude to play competitive sports – students will have the opportunities to take part in various tournaments throughout the year.
                                These tournaments will help in enriching a child’s social environment, cultivating key sporting talent, along with shaping the youngster’s leadership, communication, teamwork, and organisational skill sets.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default News;