import React from 'react';
import images from '../../../../assets/images/broduct-banner.png'

const ProductBanner = () => {
    return (
        <div className='mt-16'>
            <img src={images} alt="" draggable='false' />
        </div>
    );
};

export default ProductBanner;