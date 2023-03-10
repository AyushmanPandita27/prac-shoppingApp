import { useEffect } from 'react';
import {createContext, useState}  from 'react';




const addCartItemHelper = (cartItems,productToAdd)=>{
    //find if cart items contains product to add
const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id === productToAdd.id
);
    //if found inc qty
if(existingCartItem){
    return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ?
 {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
}
    //return new array with modifired cartItems/new cart item
return [...cartItems, {...productToAdd, quantity: 1}];
};


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart :()=>{},
    cardCount:0,
});

export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen]=useState(false);
    const [cartItems, setCartItems]= useState([]);
    const [count, setCount]= useState(0)
useEffect(()=>{
    const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
    setCount(newCartCount);
},[cartItems])

    const addItemToCart =(productToAdd)=>{
           setCartItems(addCartItemHelper(cartItems, productToAdd));
    }
    const value = {isCartOpen,setIsCartOpen, addItemToCart, cartItems, count};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}