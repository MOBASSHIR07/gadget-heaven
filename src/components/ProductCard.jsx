import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const {
        product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        rating,
        brand
    } = product;

    return (
        <div className="border rounded-xl shadow p-4 bg-white hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-full">
            <div>
                <img
                    src={product_image}
                    alt={product_title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold">{product_title}</h2>
                <p className="text-sm text-gray-600">{brand} • {category}</p>
                <p className="text-sm text-gray-500 mt-1 line-clamp-3">{description}</p>
                <div className='flex justify-between items-center mt-3'>
                    <p className="text-blue-600 font-semibold">${price}</p>
                    <p className="text-yellow-500 text-sm">⭐ {rating}</p>
                </div>
            </div>

            {/* ✅ Link to details page */}
            <Link
                to={`/details/${product_id}`}
                className="text-center border border-purple-500 text-purple-600 px-4 py-2 rounded mt-4 hover:bg-purple-100 transition duration-200"
            >
                View Details
            </Link>
        </div>
    );
};

export default ProductCard;
