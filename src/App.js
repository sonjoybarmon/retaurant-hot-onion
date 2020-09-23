import React from 'react';
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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
