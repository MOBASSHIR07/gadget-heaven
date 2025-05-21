import React from 'react';
import Nav from '../components/Nav';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import ProductSidebar from '../components/ProductSidebar';
import AllProducts from '../components/AllProducts';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
     <div>
       <motion.h1
      className="text-4xl font-bold text-center mb-6 text-transparent"
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      style={{
        backgroundImage: 'linear-gradient(90deg, #FFD700, #FF69B4, #800080)', // gold, pink, purple
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    >
      Explore Cutting-Edge Gadgets
    </motion.h1>
     </div>
            
            <div className=' flex flex-col md:flex-row w-11/12 mx-auto  items-start  my-16 rounded-xl gap-4'>
                <div className=' rounded-sm '>
                    <ProductSidebar></ProductSidebar>
                </div>
                <div className=' flex flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Home;