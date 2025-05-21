import React, { useState, useEffect } from 'react';
import { getCart, setCart } from '../utilities/addtoCard';
import ShowCart from '../components/ShowCart';

const Cart = () => {
  const [cart, updateCart] = useState([]); // ✅ avoid conflict with utility function

  useEffect(() => {
    const storedCart = getCart();
    updateCart(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCart(updatedCart);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto shadow-xl">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <ShowCart
            key={index}
            item={item}
            onRemove={handleRemove} 
          />
        ))
      )}
    </div>
  );
};

export default Cart;
