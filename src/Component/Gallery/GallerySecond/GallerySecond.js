import React from 'react';
import Navbar from '../../Navbar/Navbar';
import image from '../../../image/ZQgXhC84UabKkGfmeXpsDnR3q8jBok0ZJIJUkXQ86FoeJxFPc (1).jfif';
import image1 from '../../../image/1X_u4PD9kdIdelCkR0rAx4aVDWE_wMwBQrgpC_XoeQ8eJxFPc.jfif';
import image2 from '../../../image/27Yoy53ty915jjw2-4k43pqxxnoxY7dTcoHg8zM6SI0eJxFPc.jfif';
import image3 from '../../../image/WlHzIft4vXCIj0hAebsU-4VivWE-w-eTwFB8qb1gevYeJxFPc.jfif';
import image4 from '../../../image/w29AnzRvddYhL8qZM_tAO2mzE62pRWHp-AdFzPYC70seJxFPc.jfif';
import image5 from '../../../image/XiVfsE3_dyVTYXplNBI0SGqgLj4oqJouGcBKGtoOYhkeJxFPc.jfif';
import image6 from '../../../image/ZxwIyWXZeplybiE7OC2sWG4dkAj9MMRTQFw1uMIG3WAeJxFPc.jfif';
import image7 from '../../../image/w29AnzRvddYhL8qZM_tAO2mzE62pRWHp-AdFzPYC70seJxFPc.jfif';
import image8 from '../../../image/vrGKTI-jGfxrSQiS6CCOmvCOlZ_sb6gI452cZV5AwzseJxFPc.jfif';
import image9 from '../../../image/06oT2scMvgjJ0A0-IGD0QTJ5FCmzzQzwHjzpU0VU_WkeJxFPc.jfif';
import image10 from '../../../image/8aTcZC1rSosgoBywMEKoIZpvPHaIZfqMUxYg1NCJvUseJxFPc.jfif';
import image11 from '../../../image/4-Gwi2ybKO94JlYR-sO5rQW19QssOArQ0UJ8-lxdm-geJxFPc.jfif';
import image12 from '../../../image/6LCp6XpB5SjCW6S5TAuaEyxjHI2Rrb8TssarkCAAebYeJxFPc.jfif';
import image13 from '../../../image/_6eXHo5z9xPNbksmoSg59VGOOgJti88zwJlE0ko3TzoeJxFPc - Copy.jfif';
import image14 from '../../../image/bdP0BJ6gXq2mZUjvEzW_yT6pSkelIqPFbdONzKwQm0MeJxFPc.jfif';
import video from '../../../video/Comp 1.mp4';
import './GallerySecond.css'
import Footer from '../../Footer/Footer';

const GallerySecond = () => {
    return (
        <div >
            <div className="gallery-bg">
                <Navbar></Navbar>
            </div>

            <div className="container-fluid">
                <h1 className="text-center mt-5 mb-5">Ekota Academy Pictures & Videos</h1>

                <div className="row mb-2 g-1">
                    <div className="col-md-7">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <img src={image1} alt="" className="img-fluid gallery-img1" />
                    </div>
                </div>
                <div className="row mb-2 g-1">
                    <div className="col-md-5">
                        <img src={image2} alt="" className="img-fluid gallery-img1" />
                    </div>
                    <div className="col-md-7">
                        <img src={image3} alt="" className="img-fluid gallery-img2 w-100 " />
                    </div>
                </div>
                <div className="row mb-2 g-1">
                    <div className="col-md-4">
                        <img src={image4} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={image5} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={image6} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-md-6">
                        <video className="gallery-video" autoPlay loop muted>
                            <source src={video} type="video/mp4" />


                        </video>
                    </div>
                    <div className="col-md-6">
                        <video className="gallery-video" autoPlay loop muted>
                            <source src={video} type="video/mp4" />


                        </video>
                    </div>
                </div>
                <div className="row mb-2 g-1">
                    <div className="col-md-4">
                        <img src={image7} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={image8} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={image9} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row mb-2 g-1">
                    <div className="col-md-7">
                        <img src={image10} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <img src={image11} alt="" className="img-fluid gallery-img1" />
                    </div>
                </div>
                <div className="row mb-2 g-1">
                    <div className="col-md-4">
                        <img src={image12} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={image13} alt="" className="img-fluid gallery-img13" />
                    </div>
                    <div className="col-md-4">
                        <img src={image14} alt="" className="img-fluid " />
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default GallerySecond;