import React from 'react';
import Nav from '../components/Nav';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import AllProducts from '../components/AllProducts';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1 className='text-3xl bold text-center mb-6'>Explore Cutting-Edge Gadgets</h1>
      <div className=' flex flex-col md:flex-row  items-start  my-4 rounded-xl gap-4'>
        <div className=' rounded-sm '>
            <ProductSidebar></ProductSidebar>
        </div>
        <div className='w-2/3'>
            <Outlet></Outlet>
        </div>
      </div>
      </>
    );
};

export default Home;