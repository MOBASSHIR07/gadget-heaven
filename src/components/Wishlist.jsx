import React, { useState, useEffect } from 'react';
import { getWishList } from '../utilities/addtoCard';
import ShowWishlist from '../components/ShowWishlist';
import toast from 'react-hot-toast';

const Wishlist = () => {
  const [wishlist, updateWishlist] = useState([]); 

  useEffect(() => {
    const storedWishlist = getWishList();
    updateWishlist(storedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter(item => item.product_id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    updateWishlist(updatedWishlist);
    toast.success("Product Succesfully Removed")
  };

  return (
    <div className="p-6 max-w-4xl mx-auto shadow-xl">
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        wishlist.map((item, index) => (
          <ShowWishlist
            key={index}
            item={item}
            onRemove={handleRemove}
          />
        ))
      )}
    </div>
  );
};

export default Wishlist;
