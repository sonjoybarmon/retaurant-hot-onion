import React from 'react';
import Banner from '../Banner/Banner';
import Food from '../Food/Food';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Food></Food>
        </div>
    );
};

export default Home;