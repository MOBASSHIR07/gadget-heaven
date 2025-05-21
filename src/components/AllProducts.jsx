import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const lodeData = useLoaderData();
 if (!lodeData || lodeData.length === 0) {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[50vh] text-gray-600">
      <div className="bg-gray-100 p-8 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-2">No Products Found</h2>
        <p className="text-lg text-gray-500">Please check back later or explore other categories.</p>
      </div>
    </div>
  );
}


    
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                
                    lodeData.map(product => (
                        <ProductCard key={product.product_id} product={product} />
                    ))
                }
            </div>
    );
};

export default AllProducts;