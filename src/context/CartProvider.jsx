import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productId === product.productId
      );
      let updatedCart;

      if (existingProductIndex >= 0) {
        
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.productId !== productId
      );
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};