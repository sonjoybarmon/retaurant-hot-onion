import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BreakFast from '../../FakeData/BreakFast/BreakFast';
import lunch from '../../FakeData/Lunch/Lunch';
import dinner from '../../FakeData/Dinner/Dinner';
import './FoodDetails.css'

const FoodDetails = (props) => {
    const {id} = useParams();
    const AllFood = [...BreakFast, ...lunch, ...dinner];
    const exactFood = AllFood.find(food => food.id === Number(id));
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 d-flex align-items-center my-5">
                    <div className="food_info">
                        <h2> <strong> {exactFood.name}</strong></h2>
                        <p>{exactFood.shortDescription}</p>
                        <div className='d-flex my-3'>
                            <h1>$ {exactFood.price}</h1>
                            <div className='d-flex'
                             style={{width:'100px', height:'40px', borderRadius:'15px',fontSize:'20px',marginLeft:'100px'}}>
                                <button className='btn btn-primary'> - </button>
                                <input 
                                style={{width:'50px',textAlign:'center',border:'1px solid #666666'}}
                                type="text" value='1'/>
                                <button className='btn btn-primary'> + </button>
                            </div>
                        </div>
                       <Link to={`/delivery/${exactFood.id}`}>
                            <button className='btn btn-info'>ADD CART</button>
                       </Link> 
                    </div>
                </div>
                <div className='col-md-6 my-5'>
                    <div className='food_img d-flex justify-content-center'>
                        <img src={exactFood.img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;

// id: price: foodDetail: img: price: shortDescription: name