import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProductDetails from './SingleProductDetails';

const DetailsMap = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    return (
        <div>

            {
                detailsData.map(product=><SingleProductDetails product={product} key={product.product_id}></SingleProductDetails>)
            }
            
        </div>
    );
};

export default DetailsMap;