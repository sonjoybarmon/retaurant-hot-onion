import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='banner_area'>
            <div className='banner-content'>
                <h1>Best Food Waiting For Your belly </h1>
                <div className="bannerInput">
                    <input className='form-control form_input' type="text"/>
                    <div className='input-btn'>
                        <button className='color-btn'>Search</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Banner;