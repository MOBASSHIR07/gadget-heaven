import React from 'react';

const Loader = () => {
    return (
        
               <div className='flex flex-col items-center justify-center min-h-screen'>
            <ScaleLoader
                color="#f92fd3"
                height={35}
                width={5}
                radius={2}
                margin={2}
                speedMultiplier={1.5}
            />
            <p className='text-lg font-semibold mt-4'>Loading...</p>
            <p className='text-sm text-gray-500'>Please wait a moment.</p>
            
        </div>
        
    );
};

export default Loader;