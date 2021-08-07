import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Youth.css';

const Youth = () => {
    return (
        <div className="youth ">
            <div >
                <Navbar></Navbar>
            </div>
            <div >
                <h2>Signposting to other youth services</h2>
                <h5 className="ml-5">Ekota is here to support you working in partnership with a range of organisations. Whatever your situation - do contact us or others for help <br /> and to access opportunities. If you need further support, there are a range of services you can access</h5>
            </div>

            <div className="container">
                <div className="row youth-description-row d-flex justify-content-center align-items-center">
                    <div className="col-md-4">
                        <h1>"We must equip our youth to thrive in a changing worlds"</h1>
                    </div>

                    <div className="col-md-8  d-flex justify-content-center align-items-center youth-card">
                        <div className="row  youth-row">
                            <div className="col-md-12  youth-description-row">
                                <div className="row  youth-card-row">
                                    <div className="col-md-4">
                                        <div className="square square-one">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <div className="content">
                                                <h3>Barking & Dagenham</h3>
                                                <ul>
                                                    <li><a href="https://www.lbbd.gov.uk/youth-offending">Youth Offender Service</a></li>
                                                    <li><a href="https://www.lbbd.gov.uk/young-people-and-youth-services">Youth Forum</a></li>
                                                    <li><a href="https://www.lbbd.gov.uk/children-young-people-and-families">Children, young people & families</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="square">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <div className="content">
                                            <h3>Barking & Dagenham</h3>
                                                <ul>
                                                    
                                                 
                                                    <li><a href="https://www.futureyouthzone.org/">Youth Center for age 8-19</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="square">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <div className="content">
                                            <h3>Barking & Dagenham</h3>
                                                <ul>
                                                    
                                                   
                                                    <li><a href="https://www.nelft.nhs.uk/barking-and-dagenham-age-11-18/">NHS Foundation Trust</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row  youth-card-row">
                                <div className="col-md-4">
                                        <div className="square">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <div className="content">
                                                <h3>Youth Access</h3>
                                                <ul>
                                                    <li><a href="https://www.youthaccess.org.uk/">Advice & Counselling Network</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="square">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <div className="content">
                                                <h3>Supports Parents cares & individuals</h3>
                                                <ul>
                                                    <li><a href="http://www.sycamoretrust.org.uk/">sycamore trust autistic specturm</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="square square-one">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <div className="content">
                                                <h3>Young Mind</h3>
                                                <ul>
                                                    <li><a href="https://youngminds.org.uk/about-us/">Fighting for young children mental health</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

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

export default Youth;