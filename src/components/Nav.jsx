import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext, WishlistContext } from '../Layouts/MainLayout';
import { useMatch } from 'react-router-dom';

const Nav = () => {
  const [cartLength, setCartLength] = useContext(CartContext);
  const [wishlistLength, setWishlistLength] = useContext(WishlistContext);
  const match = useMatch('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`${match ? 'bg-purple-700 text-white rounded-t-2xl' : 'bg-white text-purple-500 p-4 shadow-sm'}`}>
      <div className="w-11/12 mx-auto">
        <nav className="flex justify-between items-center py-4 relative">
          {/* Left side - Logo */}
          <div className="text-2xl font-bold">Gadget Heaven</div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-6 text-base md:text-lg font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-semibold underline underline-offset-4'
                      : 'hover:text-purple-400 transition-colors'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-semibold underline underline-offset-4'
                      : 'hover:text-purple-400 transition-colors'
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-semibold underline underline-offset-4'
                      : 'hover:text-purple-400 transition-colors'
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right side - Icons */}
          <div className="flex space-x-4">
            <button className="relative bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
              <FaShoppingCart />
              {cartLength > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartLength}
                </span>
              )}
            </button>
            <button className="relative bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
              <FaHeart />
              {wishlistLength > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistLength}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-purple-700 rounded-lg shadow-lg mt-2 py-3">
            <ul className="flex flex-col space-y-3 px-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-semibold underline underline-offset-4 block py-2'
                      : 'hover:text-purple-400 transition-colors block py-2'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-semibold underline underline-offset-4 block py-2'
                      : 'hover:text-purple-400 transition-colors block py-2'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-semibold underline underline-offset-4 block py-2'
                      : 'hover:text-purple-400 transition-colors block py-2'
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;