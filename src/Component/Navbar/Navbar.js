import React from 'react';
import logo from '../../image/ekota academy white-01.png';

import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="menubar" style={{ fontFamily: 'Poppins' }}>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">

                <div class="container-fluid">
                    <Link to='/home'><a class="navbar-brand" href="#"> <img className="img-fluid" src={logo} alt="" /> </a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/home'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                            </li>

                            {/* <li class="nav-item">
                                <Link to='/abouts'><a class="nav-link active" href="#">About Us</a></Link>
                            </li> */}
                            <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                               
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/abouts'>
                                    <li><a class="dropdown-item" href="#">About Ekota</a></li>
                                    </Link>
                                    
                                    <Link to='/governance'>
                                    <li><a class="dropdown-item" href="#">Governance</a></li>
                                    </Link>
                                    
                                   
                                   
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                                <Link to='/club'><a class="nav-link active" href="#">Our Team</a></Link>
                            </li> */}
                            <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Team
                                </a>
                               
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/club'>
                                    <li><a class="dropdown-item" href="#">Team</a></li>
                                    </Link>
                                    
                                      <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/club/#management">Trustees</a></li>
                                    
                                   
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/club/#volunteer">Volunteer</a></li>
                                   
                                   
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                                <Link to='/join'><a class="nav-link active" aria-current="page" href="#">Sports</a></Link>
                            </li> */}
                            <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sports
                                </a>
                               
                                <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <Link to='/join'>
                                    <li><a class="dropdown-item" href="#">Sports</a></li>
                                    </Link>
                                    
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/football">Football</a></li>
                                    
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/cricket">Cricket</a></li>
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/join/#martial">Martial Arts</a></li>
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/join/#badminton">Badminton</a></li>
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/join/#walking">Walking Cricket</a></li>
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/join/#">Futsal</a></li>
                                   
                                   
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                                <Link to='/community'><a class="nav-link active" href="#">Community</a></Link>
                            </li> */}
                            <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle active"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-hover="dropdown" aria-expanded="false">
                                    Communities
                                </a>
                               
                                <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <Link to='/community'>
                                    <li><a class="dropdown-item" href="#">Community</a></li>
                                    </Link>
                                    
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/community/#population">Population Health and Inequalities </a></li>
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/projects">Projects</a></li>
                                    <li><a class="dropdown-item" href="http://ekotasportsacademy.web.app/youth">Youth Support</a></li>
                                   
                                   
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to='/news'><a class="nav-link active" href="#">News</a></Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to='/youth'><a class="nav-link active" href="#">Youth Support</a></Link>
                            </li> */}

                            <li class="nav-item">
                                <Link to='/contact'><a class="nav-link active" href="#">Contact</a></Link>
                            </li>
                            <div className="icon d-flex justify-content-center align-items-center">


                               
                                <li class="nav-item ">
                                    <a class="nav-link active" href="https://mysportshive.com/dashboard/pages/authentication/ekotaacademy/login" className="btn">Log In</a>
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