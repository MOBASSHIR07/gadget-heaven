import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { 
  FaLaptop, 
  FaMobileAlt, 
  FaHeadphones, 
  FaClock, 
  FaApple,
  FaTh 
} from 'react-icons/fa';

const ProductSidebar = () => {
  return (
    <Sidebar 
      width="250px"
      style={{ height: "100vh" ,
        backgroundColor: "#ebdef0",
        borderRight: "1px solid #aeb6bf",
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            // Active state styling
            '&.active': {
              backgroundColor: '#7e22ce',
              color: 'white',
              fontWeight: '600',
            },
            '&:hover': {
              backgroundColor: '#e9d5ff',
              color: '#7e22ce',
            },
          },
        }}
      >
        {/* All Products */}
        <MenuItem 
          icon={<FaTh />}
          component={<NavLink to="category/allproducts" />}
        >
          All Products
        </MenuItem>

        {/* Laptops */}
        <MenuItem 
          icon={<FaLaptop />}
          component={<NavLink to="category/laptops" />}
        >
          Laptops
        </MenuItem>

        {/* Phones */}
        <MenuItem 
          icon={<FaMobileAlt />}
          component={<NavLink to="category/phones" />}
        >
          Phones
        </MenuItem>

        {/* Accessories */}
        <MenuItem 
          icon={<FaHeadphones />}
          component={<NavLink to="category/accessories" />}
        >
          Accessories
        </MenuItem>

        {/* Smart Watches */}
        <MenuItem 
          icon={<FaClock />}
          component={<NavLink to="category/Smart Watches" />}
        >
          Smart Watches
        </MenuItem>

        {/* MacBook - Could also be nested under Laptops */}
        <MenuItem 
          icon={<FaApple />}
          component={<NavLink to="category/macbook" />}
        >
          MacBook
        </MenuItem>

        {/* iPhone - Could also be nested under Phones */}
        <MenuItem 
          icon={<FaApple />}
          component={<NavLink to="category/iphone" />}
        >
          iPhone
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default ProductSidebar;