import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Catelog from '../Catelog/Catelog';
import Choose from '../Choose/Choose';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Catelog></Catelog>
            <AboutUs></AboutUs>
            <Training></Training>
            <Choose></Choose>
            <Footer></Footer>
        </div>

    );
};

export default Home;