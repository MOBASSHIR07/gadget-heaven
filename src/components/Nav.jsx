import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="bg-purple-700 text-white">
      <div className="w-11/12 mx-auto">
        <nav className="flex justify-between items-center py-4 relative">
          {/* Left side - Logo */}
          <div className="text-2xl font-bold">Gadget Heaven</div>
          
          {/* Middle - Centered Menu (absolute positioning) */}
        <div className=''>
              <ul className="absolute left-1/2  transform -translate-x-1/2 flex  space-x-6 text-lg font-medium">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">Statistics</li>
            <li className="hover:text-gray-200 cursor-pointer">Dashboard</li>
          </ul>
        </div>
          
          {/* Right side - Icons */}
          <div className="flex space-x-4">
            <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
              <FaShoppingCart />
            </button>
            <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
              <FaHeart />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;