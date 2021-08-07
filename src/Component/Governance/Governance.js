import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Governance.css';

const Governance = () => {
    return (
        <div>
            <div className="governance-bg">
                <Navbar></Navbar>
                <h1>Governance</h1>
            </div>

             <div className="football governance-des">
                <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} className="container containers" id="section">

                    <div className="left3"></div>

                    <div className="right">
                        <div className="content">
                            <h2 className="mb-4">Governance.</h2>
                            <p className="mb-5">At Ekota we ensure that appropriate governance and safeguarding is in place for the interest of our organisation and the local populations we work with. We have two qualified welfare officers and ensure that DBS checks are undertaken with any volunteers and coaches who work at the club. We have also developed safeguarding and fair play policies, which we share and make available.
                            </p>

                        </div>
                    </div>

                </div>
                </div>

                <Footer></Footer>
        </div>
    );
};

export default Governance;