import React from 'react';
import logo from '../../image/ekota sports.png';
import facebook from '../../image/021-facebook.png';
import twitter from '../../image/043-twitter.png';
import instagram from '../../image/025-instagram.png';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="menubar" style={{ fontFamily: 'Poppins' }}>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <img className="img-fluid" src={logo} alt="" /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                             <Link to='/home'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>   
                            </li>
                           
                            <li class="nav-item">
                          <Link to='/abouts'><a class="nav-link active" href="#">About Us</a></Link> 
                            </li>
                           
                            <li class="nav-item">
                             <Link to='/club'><a class="nav-link active" href="#">Club</a></Link>   
                            </li>
                            <li class="nav-item">
                                <Link to='/join'><a class="nav-link active" aria-current="page" href="#">Join</a></Link>   
                            </li>
                            <li class="nav-item">
                             <Link to='/contact'><a class="nav-link active" href="#">Contact</a></Link>   
                            </li>
                            <div className="icon d-flex justify-content-center align-items-center">
                                <li class="nav-item img">
                                    <a class="nav-link active" href="https://www.facebook.com/ekotasports"> <img className="img-fluid" style={{ height: '16px', filter: 'invert(1)' }} src={facebook} alt="" /> </a>
                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link active" href="https://mysportshive.com/dashboard/pages/authentication/signup/player" className="btn">Sign Up</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link active" href="https://mysportshive.com/dashboard/pages/authentication/login" className="btn">Log In</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;