import toast from "react-hot-toast";


const getCart = ()=>{

const product = localStorage.getItem('cart');
if(product){
    return JSON.parse(product);
}
return []


}


const setCart = (item)=>{
    console.log(item);

const products = getCart();
console.log(products)

products.push(item);
localStorage.setItem('cart',JSON.stringify(products));
toast.success('Product added to cart');
console.log(products)


}


const getWishList = () => {
    const wishlist = localStorage.getItem('wishlist');
    if (wishlist) {
        return JSON.parse(wishlist);
    }
    return [];
};

// Add item to wishlist
const setWishList = (item) => {


    const wishlist = getWishList();
    if(wishlist.some(p=>p.product_id ===item.product_id))
    {
        toast.error("Already Added To WishList")
        return;
    }

    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Product added to wishlist');
    
};
export {setCart,getCart,setWishList,getWishList};