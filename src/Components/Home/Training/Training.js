import React from 'react';
import img1 from '../../../images/Image & Icon/train1.png'
import img2 from '../../../images/Image & Icon/tain2.jpg'

const Training = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>TRAINING <span style={{ color: 'orange' }}>PROGRAM</span></h2>
            <div className="row d-flex justify-content-center mt-5 pt-5">
                <div class="col-md-5 hero-text">
                    <img style={{ width: '100%', height: '80%', objectFit: 'cover' }} src={img1} alt="" />
                    <div style={{ position: 'absolute', top: '60%' }}>
                        <button style={{ backgroundColor: '#FFD801', padding: '20px' }} class="next btn"><b>CARDIO TRAINING SESSION </b> &raquo;</button>
                    </div>
                </div>
                <div className="col-md-5 w3-bar">
                    <img style={{ width: '100%', height: '80%', objectFit: 'cover' }} src={img2} alt="" />
                    <div style={{ position: 'absolute', top: '60%' }}>
                        <button style={{ backgroundColor: '#FFD801', padding: '20px' }} class="next btn"><b>CARDIO TRAINING SESSION </b> &raquo;</button>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Training;