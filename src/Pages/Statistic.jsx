import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

const Statistic = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] px-4 text-center">
            {/* Icon */}
            <div className="text-6xl text-red-500 animate-pulse mb-4">
                <MdErrorOutline />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Statistics Not Available
            </h2>

            {/* Description */}
            <p className="text-gray-600 max-w-md mb-6">
                We're working on bringing you insightful statistics soon. Please check back later!
            </p>

            {/* Action Button */}
            <a
                href="/"
                className="inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-white hover:border border-purple-500 hover:text-purple-600 transition"
            >
                Return to Home
            </a>
        </div>
    );
};

export default Statistic;
