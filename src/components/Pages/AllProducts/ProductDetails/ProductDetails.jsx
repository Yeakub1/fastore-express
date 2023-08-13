import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    const { name, recipe, image ,price} = products;
    return (
        <div className='mt-20 max-w-screen-xl mx-auto px-5'>
            <div className="grid md:grid-cols-2 justify-between items-center">
                <div className="">
                    <img src={image} alt="" />
                </div>
                <div className="">
                    <h1 className='text-2xl font-bold'>Name: {name}</h1>
                    <p className='text-xl font-bold mt-3'>Price: { price}</p>
                    <p className='mt-4 txt-lg'>{ recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;