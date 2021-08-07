import React from 'react';
import logo from '../../image/Sport-England-Logo-Blue-(CMYK).png';
import logo1 from '../../image/Eagles in the Community Logo 2018 1.png';
import logo2 from '../../image/Vision Logo 2018 FINAL transparent.png';
import logo3 from '../../image/CCSF-HM.png';
import logo4 from '../../image/National-Lottery.png'
import logo5 from '../../image/City-bridge-trust.png';
import './Partner.css';

const Partner = () => {

    

 
    return (
        <div className="partner">

            <div className="container-fluid">
                <h1>Our Partners & Sponsors</h1>
                <div className="partner-img">
                    <div>
                        <img src={logo1} alt="" />
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <img src={logo3} alt="" />
                    </div>
                    <div>
                        <img src={logo4} alt="" />
                    </div>
                    <div>
                        <img src={logo5} alt="" />
                    </div>
                    <div>
                        <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner