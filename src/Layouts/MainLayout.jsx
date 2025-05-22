import React, { createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import { useState } from 'react';

  export const CartContext = createContext();
  export const WishlistContext = createContext();


const MainLayout = () => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setwishlistLength] = useState(0);
  



  return (
    <WishlistContext.Provider value={[wishlistLength, setwishlistLength]}>
    <CartContext.Provider value={[cartLength, setCartLength ]}>
    <div className="min-h-screen flex flex-col">
      
      {/* giving that value to Nav */}
        <div className="w-11/12 mx-auto my-4 rounded-xl">
        
          <Nav />
        
          <HeroBanner />
        </div>
      
{/* getting value from singleProductDetails when products are added to cart */}
   
      <main className="flex-grow w-11/12 mx-auto pt-64 md:pt-72 mb-8"> 
        <Outlet />
      </main>
   

   <footer className="w-full bg-gray-100">
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