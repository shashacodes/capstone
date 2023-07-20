import React, { useState, useEffect } from "react";

export const useCart = (id, item) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (newItem) => {
  //   let cartItems = [];
  //   setCartItems((prevItems) => {
  //     const newItems = [...prevItems];
  //     newItems.push(newItem);
  //     localStorage.setItem("cartItems", JSON.stringify(newItems));
  //     return newItems;
  //   });
  // };
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item === newItem);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        const updatedItems = [...prevItems, newItem];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      }
    });
  };

  const isItemInCart = (item) => {
    return cartItems.includes(item);
  };

  const calculateTotalPrice = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = Number(item?.price);
      const itemQuantity = parseInt(item?.quantity);

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
  }, [cartItems]);

  const increaseQuantity = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((prevItem) => {
        if (prevItem?.id === item?.id) {
          return { ...prevItem, quantity: prevItem?.quantity + 1 };
        }
        return prevItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((prevItem) => {
        if (prevItem?.id === item?.id) {
          const updatedQuantity = prevItem.quantity - 1;
          if (updatedQuantity >= 0) {
            return { ...prevItem, quantity: updatedQuantity };
          }
        }
        return prevItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return {
    cartItems,
    isItemInCart,
    addToCart,
    // removeFromCart,
    clearCart,
    calculateTotalPrice,
    decreaseQuantity,
    increaseQuantity,
  };
};
