import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Router , Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    return (
            <Navbar bg="light" variant="light">
                <div className="container">
                    <Link to='/home'>
                        <Navbar.Brand className = 'logo-img'>
                            <img src={logo} alt=""/>
                        </Navbar.Brand>
                    </Link>
                    <Nav className="ml-auto">
                        <Link to="/home">
                            <span style={{lineHeight:'40px'}}><FontAwesomeIcon icon={faCartPlus} /></span>
                        </Link>
                        <Link to='/login'>
                            <button className='btn menu_btn'>Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className='btn color-btn'>Sign up</button>
                        </Link>
                    </Nav>
                </div>
                
               
            </Navbar>
    );
};

export default Menu;