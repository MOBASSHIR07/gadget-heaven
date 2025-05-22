// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getCart,getWishList } from '../utilities/addtoCard';


function Dashboard() {


    const[index ,setIndex] = useState(0);



  return (
    <>
    <div className=" p-4 bg-purple-600 flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-sm md:text-base max-w-xl mb-8">
        Explore the latest gadgets that will take your experience to the next level.
        From smart devices to the coolest accessories, we have it all!
      </p>

      <div className="flex gap-4">
        <Link onClick={()=>{setIndex(0)}}
          to="."
          className={`px-6 py-2 border  border-white   font-semibold rounded-full shadow-md
             transition 
             ${index==0 ? 'bg-white text-purple-600 ': 'hover:bg-white hover:text-purple-600 '}`}
          
        >
          Cart
        </Link>

        <Link onClick={()=>{setIndex(1)}}
          to="wishlist"
          className={`px-6 py-2 border  border-white   font-semibold rounded-full shadow-md
             transition 
             ${index==1 ? 'bg-white text-purple-600 ': 'hover:bg-white hover:text-purple-600 '}`}
        >
          Wishlist
        </Link>
      </div>
    </div>

    <div>
        <Outlet></Outlet>
    </div>
    </>
  );
}

export default Dashboard;
