import React from 'react';
import Category from '../Category/Category';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProduct from '../HomeProduct/HomeProduct';
import Review from '../Review/Review';

const Home = () => {
    return (
      <div>
            <HomeBanner></HomeBanner>
            <Category></Category>
        <HomeProduct></HomeProduct>
        <Review></Review>
      </div>
    );
};

export default Home;