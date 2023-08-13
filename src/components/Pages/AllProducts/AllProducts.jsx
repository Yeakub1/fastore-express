import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import Allitems from './AllItems/Allitems';

const AllProducts = () => {
    return (
        <div>
            <ProductBanner />
            <Allitems/>
        </div>
    );
};

export default AllProducts;