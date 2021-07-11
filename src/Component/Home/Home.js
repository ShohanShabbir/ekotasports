import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../../Component/About/About';
import Banner from '../../Component/Banner/Banner';
import Success from '../../Component/Success/Success';
import Footer from '../../Component/Footer/Footer';

import video from '../../video/Untitled.mov';
import './Home.css';

const Home = () => {
    return (
        <div>
            <video className="video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Banner></Banner>
            <Success></Success>
            <Footer></Footer>

        </div>
    );
};

export default Home;