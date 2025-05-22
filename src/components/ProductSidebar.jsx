import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaLaptop, 
  FaMobileAlt, 
  FaHeadphones, 
  FaClock, 
  FaApple,
  FaTh,
  FaBars,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const ProductSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      name: 'All Products',
      icon: <FaTh />,
      path: 'category/allproducts'
    },
    {
      name: 'Laptops',
      icon: <FaLaptop />,
      path: 'category/laptops',
      submenu: [
        { name: 'All Laptops', path: 'category/laptops' },
        { name: 'MacBook', icon: <FaApple />, path: 'category/macbook' }
      ]
    },
    {
      name: 'Phones',
      icon: <FaMobileAlt />,
      path: 'category/phones',
      submenu: [
        { name: 'All Phones', path: 'category/phones' },
        { name: 'iPhone', icon: <FaApple />, path: 'category/iphone' }
      ]
    },
    {
      name: 'Accessories',
      icon: <FaHeadphones />,
      path: 'category/accessories'
    },
    {
      name: 'Smart Watches',
      icon: <FaClock />,
      path: 'category/smart-watches'
    }
  ];

  return (
    <>
      {/* Mobile menu button - only shows on small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-700 text-white p-3 rounded-lg shadow-lg"
        >
          {isOpen ? 'Close' : <FaBars />}
        </button>
      </div>

      {/* Sidebar - hidden on mobile unless toggled */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block fixed inset-0 md:relative z-40`}>
        <div className="bg-purple-50 h-full w-64 p-4 shadow-lg md:shadow-none overflow-y-auto">
          <h2 className="text-xl font-bold text-purple-800 mb-6 pt-2">Categories</h2>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg ${activeSubmenu === item.name ? 'bg-purple-100 text-purple-800' : 'hover:bg-purple-100'}`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      {activeSubmenu === item.name ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    
                    {activeSubmenu === item.name && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) => 
                              `flex items-center p-2 rounded-lg ${isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-200'}`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.icon && <span className="mr-3">{subItem.icon}</span>}
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg ${isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-200'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop - only shows on mobile when menu is open */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProductSidebar;