import React, {useState, useEffect } from 'react';
import { getCart, getWishList } from '../utilities/addtoCard';

const Wishlist = () => {

    const[wishlist,setWishlist] = useState([]);
    useEffect(()=>{

         const Wishlist = getWishList();
        setWishlist(Wishlist);
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Wishlist;