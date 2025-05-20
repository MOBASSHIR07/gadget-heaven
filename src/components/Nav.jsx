import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="bg-purple-700 text-white rounded-t-2xl ">
      <div className="w-11/12 mx-auto">
        <nav className="flex justify-between items-center py-4 relative">
          {/* Left side - Logo */}
          <div className="text-2xl font-bold">Gadget Heaven</div>
          
        <div className=""> 
  <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-6 text-base md:text-lg font-medium">
    <li>
      <NavLink 
        to="/"
        className={({isActive}) => 
          isActive 
            ? ' font-semibold underline underline-offset-4' 
            : 'text-white hover:text-gray-200 transition-colors'
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/statistics"
        className={({isActive}) => 
          isActive 
            ? ' font-semibold underline underline-offset-4' 
            : 'text-white hover:text-gray-200 transition-colors'
        }
      >
        Statistics
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/dashboard"
        className={({isActive}) => 
          isActive 
            ? ' font-semibold underline underline-offset-4' 
            : 'text-white hover:text-gray-200 transition-colors'
        }
      >
        Dashboard
      </NavLink>
    </li>
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