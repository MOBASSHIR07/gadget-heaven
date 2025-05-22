import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';


const ShowCart = ({ item, onRemove}) => {
  const { product_id, product_image, product_title, price,description } = item;
 
 
  

  return (
    <div className="relative flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{product_title}</h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
        <p className="text-sm font-medium text-gray-900 mt-1">Price: ${price}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(product_id);
        }}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        aria-label="Remove from cart"
      >
        <FiX className="text-xl" />
      </button>
    </div>
  );
};

export default ShowCart;
