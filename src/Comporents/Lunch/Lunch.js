import React from 'react';
import { Card } from 'react-bootstrap';
import lunchFakeData from '../../FakeData/Lunch/Lunch';
import { Link } from 'react-router-dom';

const Lunch = () => {
    return (
            <div className='container'>
                 <div className='row d-flex'>
                {
                lunchFakeData.map( lunch => 
                        <div className='col-md-4'>
                            <Link className='cart_dec' to={'/foodDetails/' + lunch.id}>
                                <Card className='card_hover' style={{padding:'10px',marginTop:'10px'}}>
                                    <div>
                                        <Card.Img variant="top" src={lunch.img} alt='food'/>
                                        <Card.Body className='text-center'>
                                            <Card.Title>{lunch.name}</Card.Title>
                                            <Card.Text>{lunch.shortDescription}</Card.Text>
                                            <Card.Text><h1>$ {lunch.price}</h1> </Card.Text>
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

export default Lunch;