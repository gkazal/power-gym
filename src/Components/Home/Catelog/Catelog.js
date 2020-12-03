import React from 'react';
import img1 from '../../../images/Image & Icon/catlog1.jpg'
import img2 from '../../../images/Image & Icon/catlog2.jpg'
import img3 from '../../../images/Image & Icon/catlog3.jpg'
import logoimg1 from '../../../images/Image & Icon/Group 80.png'
import logoimg2 from '../../../images/Image & Icon/Group 81.png'
import logoimg3 from '../../../images/Image & Icon/Group 82.png'


const Catelog = () => {

    return (
        <div className="catelog container pb-3 pb-3">
            <div className="row d-flex justify-content-center mt-5 pt-5 " style={{ textAlign: 'center' }}>
                <div className="col-md-4">
                    <div style={{ backgroundImage: ` url(${img1})`, width: '100%', height: '300px', backgroundPosition: 'center ', backgroundSize: 'cover' }} class="mt-5 pt-5">
                        <div style={{ margin: '5px', padding: '5px', color: 'white' }}>
                            <img src={logoimg1} alt="" />
                            <h2>PROGRESSION</h2>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non?</small>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div style={{ backgroundImage: ` url(${img2})`, width: '100%', height: '300px', backgroundPosition: 'center ', backgroundSize: 'cover' }} class="mt-5 pt-5">
                        <div style={{ margin: '5px', padding: '5px', color: 'white' }}>
                            <img src={logoimg2} alt="" />
                            <h2>WORKOUT</h2>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non?</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ backgroundImage: ` url(${img3})`, width: '100%', height: '300px', backgroundPosition: 'center ', backgroundSize: 'cover' }} class="mt-5 pt-5">
                        <div style={{ margin: '5px', padding: '5px', color: 'white' }}>
                            <img src={logoimg3} alt="" />
                            <h2>NUTRITION</h2>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non?</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Catelog;