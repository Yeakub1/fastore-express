import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Products from '../Products/Products';
import SubBanner from '../SubBanner/SubBanner';
import Blog from './Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <Products />
            <SubBanner />
            <Blog/>
        </div>
    );
};

export default Home;