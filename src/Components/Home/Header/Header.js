import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from './HeaderMain';
import frame from '../../../images/Image & Icon/headerbg.jpg'

const Header = () => {
    const mystyle = {
        backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${frame})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        height:'700px'

    }
    return (
        <div className="header-container" style={mystyle}>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>


    );
};

export default Header;