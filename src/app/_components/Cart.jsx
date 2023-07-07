import React, { useState, useEffect } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem !== item)
    );
  };

  const isItemInCart = (item) => {
    return cartItems.includes(item);
  };
  const calculateTotalPrice = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = Number(item.price);
      const itemQuantity = parseInt(item.quantity);

      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        return total + itemPrice * itemQuantity;
      } else {
        return total;
      }
    }, 0);

    return totalPrice;
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
    alert("clear cart");
    console.log("Cart cleared.");
  };

  return {
    cartItems,
    isItemInCart,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotalPrice,
  };
};
