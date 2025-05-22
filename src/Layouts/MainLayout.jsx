import React, { createContext, useState } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
import Nav from '../components/Nav';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';

export const CartContext = createContext();
export const WishlistContext = createContext();

const MainLayout = () => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const location = useLocation();
  const match = useMatch('/details/:id');

  return (
    <WishlistContext.Provider value={[wishlistLength, setWishlistLength]}>
      <CartContext.Provider value={[cartLength, setCartLength]}>
        <div className="min-h-screen flex flex-col">
          {/* Header Section */}
          <div className="w-11/12 mx-auto my-4 rounded-xl">
            <Nav />
            {location.pathname === '/' && <HeroBanner />}
          </div>

          {/* Main Content with responsive padding */}
          <main 
            id="main-content"
            className={`flex-grow w-11/12 mx-auto ${
              location.pathname === '/' 
                ? 'pt-[280px] sm:pt-[320px] md:pt-[350px] lg:pt-[380px]' 
                : 'pt-4'
            } mb-8`}
          >
            <Outlet />
          </main>

          {/* Footer with conditional spacing */}
          <footer className={`${match ? 'mt-[300px] sm:mt-[360px]' : 'w-full bg-gray-100'}`}>
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