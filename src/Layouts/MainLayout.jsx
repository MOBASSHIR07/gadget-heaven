import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      
        <div className="w-11/12 mx-auto my-4 rounded-xl">
          <Nav />
          <HeroBanner />
        </div>
      

     <main className="flex-grow w-11/12 mx-auto pt-64 md:pt-72 mb-8"> 
        <Outlet />
      </main>

   <footer className="w-full bg-gray-100">
        <div className="">
          <Footer />
        </div>
      </footer>
      
    </div>
  );
};

export default MainLayout;