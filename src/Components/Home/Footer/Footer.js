import React from 'react';

const Footer = () => {
    return (
        <div className="row d-flex justify-content-center mt-5 pt-5" style={{ backgroundColor: '#0C090A', color: 'white', height: '100%' }}>
            <div className="col-md-2">
                <h2>POWER <span style={{ color: 'orange' }}>X</span></h2>

            </div>
            <div className="col-md-2">
                <p>Need Help?</p>
                <p>Help Center</p>
                <p>Email Support</p>
                <p>Live Chat</p>
                <p>Send Us Feedback</p>
            </div>
            <div className="col-md-2">
                <p>Digital Resource</p>
                <p>Articles</p>
                <p>E-Books</p>
            </div>
            <div className="col-md-2">
                <p>Contact with Us</p>

            </div>
            <div className="col-md-2">
                <p>Join Our Newsletter</p>
                <p>Get exclusive News, Forums</p>

            </div>

        </div>
    );
};

export default Footer;