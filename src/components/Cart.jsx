import React, { useState, useEffect, useContext } from 'react';
import { getCart, setCart } from '../utilities/addtoCard';
import ShowCart from '../components/ShowCart';
import toast from 'react-hot-toast';

import { CartContext } from '../Layouts/MainLayout';


const Cart = () => {
  const [cart, updateCart] = useState([]);

  const [cartLength, setCartLength] = useContext(CartContext);

  useEffect(() => {
    const storedCart = getCart();
    updateCart(storedCart);
    setCartLength(storedCart.length)
    
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCart(updatedCart);
    setCartLength(updatedCart.length)
    toast.success("Product Removed Successfully")
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
