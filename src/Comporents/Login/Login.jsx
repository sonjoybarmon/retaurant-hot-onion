import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo2.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [logInUser ,setLogInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    console.log(logInUser)
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
        const {displayName , email} = result.user;
        const newUser= {
            isSignIn: true,
            name: displayName,
            email : email,
        }
        setLogInUser(newUser);
        history.replace(from);
        console.log(newUser)
        })
        .catch(function(error) {
            const newUserInfo = { ...logInUser };
            newUserInfo.message = error.message;
            setLogInUser(newUserInfo);
        });
    }
    const FbLogin = () => {
        const Fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(Fbprovider)
        .then(function(result) {
            const {displayName , email} = result.user;
            const newUser= {
                isSignIn: true,
                name: displayName,
                email : email,
            }
            setLogInUser(newUser);
            history.replace(from);
          })
          .catch(function(error) {
            const newUserInfo = { ...logInUser };
                newUserInfo.message = error.message;
                setLogInUser(newUserInfo);
          });

    }
//form submit handle 
    const handleSubmit = (e) => {
        if (logInUser.email && logInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(logInUser.email, logInUser.password)
             .then(res => {
                 const {displayName , email } = res.user;
                 const googleNewUser = {name:displayName , email:email}
                 setLogInUser(googleNewUser);
                 console.log(res.user)
                //  logInUser.updateProfile({
                //      displayName: logInUser.name,
                //  })
                 history.replace(from);
                 
         })
         .catch(function(error) {
             const newUserInfo = { ...logInUser };
                     newUserInfo.message = error.message;
                     newUserInfo.success = false;
                     setLogInUser(newUserInfo);
           });
         }
         if(!logInUser.email && logInUser.password){
             firebase.auth().signInWithEmailAndPassword(logInUser.email, logInUser.password)
             .then(res => {
                 const {displayName , email} = res.user;
                 const googleNewUser = {name : displayName , email:email}
                 setLogInUser(googleNewUser);
                 history.replace(from);
             })
             .catch(error => {
                 const newUserInfo = { ...logInUser };
                 newUserInfo.message = error.message;
                 newUserInfo.success = false;
                 setLogInUser(newUserInfo);
             });
         } 
        e.preventDefault();
    }
//form blue handle
    const inputValue = (e) => {
        let emailValid = true;
        if (e.target.name === 'email'){
          emailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(emailValid)
        }
        if(e.target.name === "password"){
            const passwordValid = e.target.value.length >= 6;
            emailValid = passwordValid;
            console.log(emailValid)
        }
        if(emailValid) {
            const newUserInfo = {...logInUser};
            newUserInfo[e.target.name] = e.target.value;
            setLogInUser(newUserInfo);
        }
    }

    return (
        <div className='login-img'>
            <div style={{paddingTop:'80px', paddingBottom:'50px'}} className='d-flex justify-content-center'>
              <Link to='/home'><img width='250px' src={logo} alt="login"/></Link>  
            </div>
            <div className='container'>
                <Form onSubmit={handleSubmit} style={{width: '400px',margin:'auto'}}>
                    <div className='text-center'>
                        <h1>
                            Account Login
                        </h1>
                    </div>
                    
                    <Form.Group>
                        {
                        logInUser && 
                        <Form.Control onBlur={inputValue}
                        className='form-control' name='name'
                        style={{width: '400px',margin:'25px 0'}}
                        type="text" placeholder="Name" /> 
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                        onBlur={inputValue} name='email'
                        className='form-control' 
                        style={{width: '400px',margin:'15px 0'}}
                        type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control
                        onBlur={inputValue} name='password'
                        className='form-control' 
                        style={{width: '400px',margin:'15px 0'}} 
                        type="password" placeholder="Password" />
                    </Form.Group>
                    { 
                    logInUser &&
                    <Form.Group >
                    <Form.Control
                    onBlur={inputValue} name='confirmPassword'
                    className='form-control' 
                    style={{width: '400px',margin:'15px 0'}}
                    type="password" 
                    placeholder="Confirm Password" />
                    </Form.Group>}
                    
                    <div className='d-flex justify-content-center'>
                        <button style={{width: '200px',}}
                         className='btn btn-info'
                         type="submit"
                         >Create Account</button>
                        {/* <input style={{width: '200px',}}
                        variant="primary" 
                        type="submit" value="Create Account" /> */}
                    </div>
                    <div style={{cursor:'pointer'}} className='my-2 d-flex justify-content-center'>
                        { logInUser ? 
                        <span>You already have an account?  
                            <a className='mx-3' onClick={() =>setLogInUser(!logInUser)}> <u>Log in</u> </a> </span>: 
                            <span>Don’t have an account? <a className='mx-3'
                            onClick={() => setLogInUser(!logInUser)}
                            > <u>Create an account</u></a> </span>
                        }
                    </div>
                </Form>

                <div className='d-flex justify-content-center'>
                    <div>
                        <button style={{width:'300px'}}
                         className='btn btn-info my-2'
                         onClick={googleSignIn}
                         >Continue With Google</button>
                        <br/>
                        <button style={{width:'300px'}}
                         className='btn btn-info my-2'
                         onClick={FbLogin}
                         >Continue With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;