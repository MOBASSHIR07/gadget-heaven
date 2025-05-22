import React, { useState, useEffect, useContext } from 'react';
import { getCart } from '../utilities/addtoCard';
import ShowCart from '../components/ShowCart';
import toast from 'react-hot-toast';
import { FaSort } from "react-icons/fa6";
import { CartContext } from '../Layouts/MainLayout';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, updateCart] = useState([]);
  const [cartLength, setCartLength] = useContext(CartContext);
  const navigate = useNavigate();
  // Calculate total from cart - 
  const totalCost = cart.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2);

  useEffect(() => {
    const storedCart = getCart();
    updateCart(storedCart);
    setCartLength(storedCart.length);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCart(updatedCart);
    setCartLength(getCart.length);
    toast.success("Product Removed Successfully");
  };

  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) => Number(b.price) - Number(a.price));
    updateCart(sortedCart);
  };

  const handlePurchase = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    Swal.fire({
      title: 'Confirm Purchase?',
      text: `Total Amount: $${totalCost}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Purchase',
      cancelButtonText: 'No, Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear the cart
        localStorage.removeItem('cart');
        updateCart([]);
        setCartLength(0);
        
        Swal.fire(
          'Purchased!',
          'Thank you for your purchase.',
          'success'
        );
      }
    }).then(()=>{
      navigate('/');
    });
    
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Cart Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h3 className="text-2xl font-bold">Cart</h3>

        <div className="flex items-center gap-4 flex-wrap">
          <p className="text-lg font-medium">Total: ${totalCost}</p>

          <button
            className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-500 hover:bg-purple-500 hover:text-white rounded transition"
            onClick={handleSort}
          >
            Sort By Price
            <FaSort className="text-sm" />
          </button>

          <button
            className="px-4 py-2 bg-purple-500 text-white hover:bg-white hover:text-purple-500 hover:border border-purple-400 rounded transition"
            onClick={handlePurchase} 
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <ShowCart key={item.product_id} item={item} onRemove={handleRemove} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;