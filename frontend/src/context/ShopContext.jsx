/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthDataContext } from './authContext';
import { userDataContext } from './UserContext';

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const { userData } = useContext(userDataContext);

  const currency = '₹';
  const deliveryFee = 40;

  // Fetch all products
  const getProducts = async () => {
    try {
      const response = await axios.get(`https://ai-powered-full-stack-ecommerce-web.onrender.com/api/product/list`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Add item to cart (both local and server-side if user is logged in)
  const addToCart = async (itemId, size) => {
    if (!size) {
      console.warn("Select Product Size");
      return;
    }

    const newCart = { ...cartItem };

    if (!newCart[itemId]) newCart[itemId] = {};
    newCart[itemId][size] = (newCart[itemId][size] || 0) + 1;

    setCartItem(newCart);



    if (userData) {
      try {
        const response = await axios.post(
          `https://ai-powered-full-stack-ecommerce-web.onrender.com/api/cart/add`,
          { itemId, size },
          { withCredentials: true }
        );
        console.log('Cart saved:', response.data);
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }
  };

  // Load cart from server for logged-in users
  const getUserCart = async () => {
    if (!userData) return;
    try {
      const response = await axios.post(
        `https://ai-powered-full-stack-ecommerce-web.onrender.com/api/cart/get`,
        {},
        { withCredentials: true }
      );
      setCartItem(response.data);
    } catch (error) {
      console.error('Error fetching user cart:', error);
    }
  };


  const updateQuantity = async (itemId, size, quantity) =>{
    let cartData = structuredClone(cartItem)
    cartData[itemId][size] = quantity
    setCartItem(cartData)
    if(userData)
    {
        try {
          await axios.post('https://ai-powered-full-stack-ecommerce-web.onrender.com/api/cart/update',{itemId, size ,quantity},{withCredentials:true})
      
    } catch (error) {
      console.log(error)
    }

    }
  

  }

  // Count items in cart
  const getCartCount = () => {
    let total = 0;
    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        const count = cartItem[itemId][size];
        if (typeof count === 'number') {
          total += count;
        }
      }
    }
    return total;
  };

  const getCartAmount = () => {
  let totalAmount = 0;

  if (!cartItem || typeof cartItem !== 'object' || !Array.isArray(products)) return totalAmount;

  for (const [itemId, sizes] of Object.entries(cartItem)) {
    const itemInfo = products.find((product) => product._id === itemId);
    if (!itemInfo || typeof itemInfo.price !== 'number') continue;

    for (const [ quantity] of Object.entries(sizes)) {
      if (typeof quantity === 'number' && quantity > 0) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }

  return totalAmount;
};


  // Initial load
  useEffect(() => {
    getProducts();
  }, []);

  // Load user cart when user data is ready
  useEffect(() => {
    getUserCart();
  }, [userData]);

  const contextValue = {
    products,
    currency,
    
    deliveryFee,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getCartCount,
    addToCart,
    setCartItem,
    cartItem,
    updateQuantity,
    getCartAmount
  };

  return (
    <shopDataContext.Provider value={contextValue}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;
