import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
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
        </div>
    );
};

export default Home;