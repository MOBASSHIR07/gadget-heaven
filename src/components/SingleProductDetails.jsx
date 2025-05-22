import React from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { setCart, setWishList, getCart, getWishList } from '../utilities/addtoCard';
import { CartContext, WishlistContext } from '../Layouts/MainLayout';
import { useContext,useState,useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';




const SingleProductDetails = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification = [],
    availability,
    rating = 0,
    brand,
    colors = [],
    weight,
    ports = [],
    strap_options = [],
    noise_cancellation,
    compatibility = [],
  } = product;


  const [wishlistDisabled, setWishlistDisabled] = useState(false)

  const [cartLength, setCartLength] = useContext(CartContext);
  const [wishlistLength, setwishlistLength] = useContext(WishlistContext);

  useEffect(() => {
    const existingWishlist = getWishList();
    const alreadyInWishlist = existingWishlist.some(item => item.product_id === product.product_id);
    if (alreadyInWishlist) {
      setWishlistDisabled(true);
    }
  }, []);

  const handleSetcart = () => {
    setCart(product);
    const updatedCartLength = getCart().length;
    setCartLength(updatedCartLength);
  };

  const handleSetwishlist = () => {
    setWishList(product);
    const updatedWishlistLength = getWishList().length;
    setwishlistLength(updatedWishlistLength);
    setWishlistDisabled(true);


  }


  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="w-full md:w-1/3">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-lg w-full h-[300px] object-contain bg-gray-100"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-2/3 space-y-4">
        <h2 className="text-2xl font-semibold">{product_title}</h2>

        <p className="text-green-600 font-semibold text-lg">Price: ${price}</p>

        <span className={`px-3 py-1 rounded-full text-sm font-medium inline-block ${availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
          {availability ? 'In Stock' : 'Out of Stock'}
        </span>

        <p className="text-gray-700">{description}</p>

        {specification.length > 0 && (
          <div>
            <h3 className="font-semibold mb-1">Specification:</h3>
            <ul className="list-decimal ml-5 text-gray-800">
              {specification.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {rating > 0 && (
          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating</span>
            <FaStar className="text-yellow-400" />
            <div className="flex gap-1 text-yellow-500">
              {Array(Math.floor(rating)).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-500">{rating}</span>
          </div>
        )}

        {colors.length > 0 && (
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Available Colors:</span>
            {colors.map((color, i) => (
              <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">{color}</span>
            ))}
          </div>
        )}

        {brand && <p className="text-sm text-gray-500">Brand: {brand}</p>}

        {weight && <p className="text-sm text-gray-500">Weight: {weight}</p>}

        {ports.length > 0 && (
          <div>
            <h3 className="font-semibold mb-1">Ports:</h3>
            <div className="flex flex-wrap gap-2">
              {ports.map((port, i) => (
                <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">{port}</span>
              ))}
            </div>
          </div>
        )}

        {strap_options.length > 0 && (
          <div>
            <h3 className="font-semibold mb-1">Strap Options:</h3>
            <div className="flex flex-wrap gap-2">
              {strap_options.map((option, i) => (
                <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">{option}</span>
              ))}
            </div>
          </div>
        )}

        {noise_cancellation !== undefined && (
          <p className="text-sm text-gray-500">
            Noise Cancellation: {noise_cancellation ? 'Yes' : 'No'}
          </p>
        )}

        {compatibility.length > 0 && (
          <div>
            <h3 className="font-semibold mb-1">Compatibility:</h3>
            <div className="flex flex-wrap gap-2">
              {compatibility.map((os, i) => (
                <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded">{os}</span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 pt-3">
          <button onClick={handleSetcart} className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-medium">
            Add To Cart
          </button>
          <button
            onClick={handleSetwishlist}
            disabled={wishlistDisabled}
            className={`${wishlistDisabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-125 hover:text-red-500'
              }`}
          >
            {wishlistDisabled ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-red-400 text-xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;