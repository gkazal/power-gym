import React from 'react';
import img from '../../../images/Image & Icon/aboutus-img.jpg'

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5 pt-5">
                <div className="col-md-6">
                    <img style={{ width: '100%', height: '80%', objectFit: 'cover' }} src={img} alt="" />

                </div>
                <div className="col-md-6">
                    <h2>ABOUT US</h2>
                    <h2 style={{ color: 'orange' }}>WE ARE HERER TO DREAM</h2>
                    <h2>OUR TEAM HERE TO SERVE YOU</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi quo temporibus in, vitae nostrum repellat placeat totam incidunt deleniti suscipit! Rerum velit eveniet, exercitationem nam porro optio! Suscipit, alias?</p>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;