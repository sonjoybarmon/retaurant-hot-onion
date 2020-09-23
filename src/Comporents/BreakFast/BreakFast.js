import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BreakFastFakeData from '../../FakeData/BreakFast/BreakFast';
import './BreakFast.css'


const BreakFast = (props) => {
    return (
    <div className='container'>
        <div className='row d-flex'>
            {
            BreakFastFakeData.map( (breakfast) => 
                <div className='col-md-4'>
                    <Link className='cart_dec' to={'/foodDetails/' + breakfast.id}>
                        <Card className='card_hover' style={{padding:'10px' , marginTop:'10px'}}>
                            <div>
                                <Card.Img variant="top" src={breakfast.img} alt='food'/>
                                <Card.Body className='text-center'>
                                    <Card.Title>{breakfast.name}</Card.Title>
                                    <Card.Text>{breakfast.shortDescription}</Card.Text>
                                    <Card.Text>$ {breakfast.price}</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                </div>
            )
            }
        </div>
        <div style={{padding:'30px 0'}} className='d-flex justify-content-center'>
            <button className="btn btn-success" >Checkout Your Foods </button>
        </div>
    </div>
    );
};
export default BreakFast;