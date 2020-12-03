import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{ height: '100%' }} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1" style={{color:'white'}}>
            <h1 className="text-bolt">Lets Grow Your  <br /> Brand To The <br /> Next Level</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Itaque reiciendis rem, nisi ratione quisquam inventore.</p>
            <button className="btn btn-dark" style={{backgroundColor:'#FDD017',color:'black'}} >JOIN US</button>
        </div>
       

    </main>
    );
};

export default HeaderMain;