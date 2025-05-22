import React from 'react';
import img from '../assets/banner.jpg';


const HeroBanner = () => {


  return (
    <div className="relative bg-purple-700 text-white pt-20 pb-60 rounded-b-2xl ">
      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Upgrade Your Tech Accessories <br /> with Gadget Heaven Accessories
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
        {/* scroll in the outlet , id is in the main, under main outlet exist */}
        <button onClick={() => {
          const section = document.getElementById("main-content");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
          className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white transition px-6 py-3 rounded-full font-semibold">
          Shop Now
        </button>
      </div>

      {/* Floating Image */}
      <div className="absolute left-1/2 right-1/2 md:-bottom-2  transform -translate-x-1/2 translate-y-1/2 w-[70%]  max-w-4xl">
        <div className="bg-white p-3 rounded-2xl shadow-xl">
          <img
            src={img}
            alt="Gadget"
            className="rounded-xl w-full md:h-[500px] h-[200px]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;