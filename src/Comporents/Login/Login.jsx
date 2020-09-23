import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Login.css'

const Login = () => {
    return (
        <div className='login-img'>
            <div style={{paddingTop:'120px', paddingBottom:'50px'}} className='d-flex justify-content-center'>
              <Link to='/home'><img width='250px' src={logo} alt="login"/></Link>  
            </div>
            <div className='container'>
                <Form style={{width: '400px',margin:'auto'}}>
                    {<Form.Group>
                        <Form.Control className='form-control' 
                        style={{width: '400px',margin:'15px 0'}} type="email" placeholder="Name" />
                    </Form.Group>}
                    <Form.Group>
                        <Form.Control className='form-control' 
                        style={{width: '400px',margin:'15px 0'}} type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control className='form-control' 
                        style={{width: '400px',margin:'15px 0'}} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <div className='d-flex justify-content-center'>
                        <Button 
                        style={{width: '200px',marginTop:'20px'}}
                         variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>

                <div style={{marginTop:'30px'}} 
                className='d-flex justify-content-center'>
                    <div>
                        <button style={{width:'300px'}}
                         className='btn btn-info my-2'>Continue With Google</button>
                        <br/>
                        <button style={{width:'300px'}}
                         className='btn btn-info my-2'>Continue With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;