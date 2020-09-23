import React from 'react';
import { Card } from 'react-bootstrap';
import dinnerFakeData from '../../FakeData/Dinner/Dinner';
import { Link } from 'react-router-dom';

const Dinner = (props) => {
    return (
            <div className='container'>
                <div className='row d-flex'>
                {
                dinnerFakeData.map( dinner => 
                        <div className='col-md-4'>
                            <Link className='cart_dec' to={'/foodDetails/' + dinner.id}>
                                <Card className='card_hover' style={{padding:'10px' , marginTop:'10px'}}>
                                    <div>
                                        <Card.Img variant="top" src={dinner.img} alt='food'/>
                                        <Card.Body className='text-center'>
                                            <Card.Title>{dinner.name}</Card.Title>
                                            <Card.Text>{dinner.shortDescription}</Card.Text>
                                            <Card.Text>$ {dinner.price}</Card.Text>
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

export default Dinner;