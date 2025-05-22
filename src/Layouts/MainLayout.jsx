import React, { createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMatch } from 'react-router-dom';//react-router v6 , alternative of useloaction

  export const CartContext = createContext();
  export const WishlistContext = createContext();


const MainLayout = () => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setwishlistLength] = useState(0);
  

const location = useLocation();
const match = useMatch('/details/:id');//alternative

  return (
    <WishlistContext.Provider value={[wishlistLength, setwishlistLength]}>
    <CartContext.Provider value={[cartLength, setCartLength ]}>
    <div className="min-h-screen flex flex-col">
      
      {/* giving that value to Nav */}
        <div className="w-11/12 mx-auto my-4 rounded-xl">
        
          <Nav />
        
        {location.pathname==='/'&&<HeroBanner></HeroBanner>}
        </div>
      
{/* getting value from singleProductDetails when products are added to cart */}
   
      {/* Main Content with conditional top padding */}
          <main
            className={`flex-grow w-11/12 mx-auto ${
              location.pathname === '/' ? 'pt-64 md:pt-72 ' : 'pt-1 '
            } mb-8`}
          >
            <Outlet />
          </main>
   
<footer className={`${match ? 'mt-96' : 'w-full bg-gray-100'}`}>
        <div className="">
          <Footer />
        </div>
      </footer>
      
    </div>
    </CartContext.Provider>
    </WishlistContext.Provider>
  );
};

export default MainLayout;