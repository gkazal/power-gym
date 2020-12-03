import React from 'react';
import img1 from '../../../images/Image & Icon/choose1.png'
import img2 from '../../../images/Image & Icon/choose2.png'
import img3 from '../../../images/Image & Icon/choose3.png'
import './Choose.css'


const Choose = () => {
    return (
        <div className="mt-5 pt-5">
            <h2 style={{ textAlign: 'center' }}><span style={{ color: 'orange' }}>WHY</span> CHOOSE US</h2>
            <div className="row d-flex justify-content-center mt-3 pt-3 " style={{textAlign:'center'}}>
                <div className="col-md-3 img-container" >
                    <img src={img1} className="mb-3 pb-3" alt="" />
                    <h5>FREE FITNESS TRAINING</h5>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero maiores consequatur minus eos ullam, dolorum incidunt saepe vel commodi?</small>

                </div>
                <div className="col-md-3 img-container">
                    <img src={img2} className="mb-3 pb-3" alt="" />
                    <h5>TONS OF CARDIO & STRENTH</h5>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero maiores consequatur minus eos ullam, dolorum incidunt saepe vel commodi?</small>

                </div>
                <div className="col-md-3 img-container">
                    <img src={img3} className="mb-3 pb-3" alt="" />
                    <h5>NO COMMETMENT MEMBERSIP</h5>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero maiores consequatur minus eos ullam, dolorum incidunt saepe vel commodi?</small>

                </div>
            </div>

        </div>
    );
};

export default Choose;