import React from 'react';
import plus from '../../image/plus.png';
import './Success.css';

const Success = () => {

    // function loadDetails() {
    //     const update = document.getElementById('details');
    //     update.innerHTML = `
    //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut architecto, neque nesciunt facere commodi magni similique voluptate ipsum, nam incidunt officia et ea, praesentium expedita tenetur reiciendis exercitationem totam quo consectetur molestiae! Qui at, molestias minus nam nemo unde.</p>

    //     `;
    // };
    // function loadDetails1() {
    //     const update = document.getElementById('details1');
    //     update.innerHTML = `
    //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut architecto, neque nesciunt facere commodi magni similique voluptate ipsum, nam incidunt officia et ea, praesentium expedita tenetur reiciendis exercitationem totam quo consectetur molestiae! Qui at, molestias minus nam nemo unde.</p>
    //     `;
    // };
    // function loadDetails2() {
    //     const update = document.getElementById('details2');
    //     update.innerHTML = `
    //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut architecto, neque nesciunt facere commodi magni similique voluptate ipsum, nam incidunt officia et ea, praesentium expedita tenetur reiciendis exercitationem totam quo consectetur molestiae! Qui at, molestias minus nam nemo unde.</p>
    //     `;
    // };

    const show = document.getElementsByClassName('answer');
    for (let index = 0; index <show.length; index++){
        show[index].addEventListener('click', function(){
            this.classList.toggle('active');
        })
       
    }
    return (
        <div className="success">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-5">
                        <h1>Founded Our three pillar of Success</h1>
                    </div>
                    <div className="col-md-7 mt-4 ">
                        <div className="col-md-12 mb-4  d-flex justify-content-center align-items-center education">
                            <h5>Education.</h5>
                            <img  style={{ height: '16px' }} className="img-fluid" src={plus} alt="" />
                        </div>
                        <div className="col-12">
                            <p style={{fontFamily: 'Poppins', fontSize: '14px', marginLeft: '90px'}} id="details2"></p>
                        </div>
                        <div className="col-md-12 mb-4  d-flex justify-content-center align-items-center crickets">
                            <h5>Performance.</h5>
                            <img  style={{ height: '16px' }} className="img-fluid" src={plus} alt="" />
                        </div>
                        <div className="col-12">
                            <p style={{fontFamily: 'Poppins', fontSize: '14px', marginLeft: '90px'}} id="details2"></p>
                        </div>
                        <div className="col-md-12 mb-4  d-flex justify-content-center align-items-center karate">
                            <h5>Opportunity.</h5>
                            <img  style={{ height: '16px' }} className="img-fluid" src={plus} alt="" />
                        </div>
                        <div className="col-12">
                            <p style={{fontFamily: 'Poppins', fontSize: '14px', marginLeft: '90px'}} id="details2"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;