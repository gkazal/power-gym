import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
 
   
    return (
        <nav  className="navbar navbar-expand-lg nav-contain  col-md-10 offset-md-1 ">

            <a class="navbar-brand" style={{fontWeight:'bold'}} href="#">POWER <span style={{color:'red'}}>X</span></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div  className="collapse navbar-collapse nav-contain" id="navbarSupportedContent">
            
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-3" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li>
                        <a className="nav-link mr-3" href="/home">Our Portfolio</a>
                    </li>
                    <li>
                        <a className="nav-link mr-3" href="/home">Our Team</a>
                    </li>
                    <li>
                        <a className="nav-link mr-3" href="/home">Contact Us</a>
                    </li>
                    

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;