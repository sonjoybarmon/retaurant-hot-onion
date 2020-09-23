import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = () => {
    return (
        <div>
            <div className="container">
                <div className='food_area'>
                    <Link to='/breakfast' className='menu_list'>Breakfast</Link>
                    <Link to='/lunch' className='menu_list'>Lunch</Link>
                    <Link to='/dinner' className='menu_list'>Dinner</Link>
                </div>
            </div>
        </div>
    );
};

export default Food;