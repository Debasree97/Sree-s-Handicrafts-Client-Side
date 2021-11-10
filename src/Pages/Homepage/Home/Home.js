import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProduct from '../HomeProduct/HomeProduct';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Review></Review>
            <HomeProduct></HomeProduct>
        </div>
    );
};

export default Home;