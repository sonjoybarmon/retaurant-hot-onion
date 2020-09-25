import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Comporents/Menu/Menu';
import Banner from './Comporents/Banner/Banner';
import Food from './Comporents/Food/Food';
import Home from './Comporents/Home/Home';
import BreakFast from './Comporents/BreakFast/BreakFast';
import Lunch from './Comporents/Lunch/Lunch';
import Dinner from './Comporents/Dinner/Dinner';
import NotFound from './Comporents/NotFound/NotFound';
import FoodDetails from './Comporents/FoodDetails/FoodDetails';
import Login from './Comporents/Login/Login';
import PrivateRoute from './Comporents/PrivateRoute/PrivateRoute';
import Delivery from './Comporents/Delivery/Delivery';

export const UserContext = createContext();

function App() {
  const [logInUser , setLogInUser] = useState({
    isSignIn : false,
    name :'',
    email:'',
    photo :'',
    password :'',
    confirmPassword :'',
    message :'',
  })
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
    <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
              <BreakFast></BreakFast>
            </Route>
            <Route exact path="/home">
              <Home></Home>
              <BreakFast></BreakFast>
            </Route>
            <Route path="/breakfast">
              <Home></Home>
              <BreakFast></BreakFast>
            </Route>
            <Route path="/lunch">
                <Home></Home>
                <Lunch></Lunch>
            </Route>
            <Route path="/dinner">
                <Home></Home>
                <Dinner></Dinner>
            </Route>
            <PrivateRoute path="/delivery/:id">
                <Menu />
                <Delivery></Delivery>
            </PrivateRoute>
            <Route path="/foodDetails/:id">
                <Menu />
                <FoodDetails />
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="*">
                <Menu />
                <NotFound />
            </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
