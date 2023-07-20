"use client";
import React from "react";
import { useCart } from "../_components/Cart";
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const {
    cartItems,
    isItemInCart,
    addToCart,
    clearCart,
    calculateTotalPrice,
    decreaseQuantity,
    increaseQuantity,
  } = useCart();

  const fixCartItems = () => {
    if (cartItems.length === 0) {
      return <p>cart is currently empty.</p>;
    }
    return cartItems.map((item) => (
      <div key={item?.id} className="mr-6 ml-6 mb-6">
        <div className="rounded-md">
          <Image src={item?.image} height={-1} width={1000} alt="image" />
          <div className="w-full border rounded-md hover:scale-105 shadow-xl shadow-[#262620] transition-all duration-300 border-[#626260]">
            <p>Item: {item?.name}</p>
            <p>Price: ₦{item?.price}</p>
            <p>Quantity: {item?.quantity}</p>
            <div className="flex gap-6 mr-6 ml-6">
              <button
                type="button"
                className="rounded-lg p-2 mt-2 hover:scale-105 transition-transform duration-300"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <span className="mt-3">{item?.quantity}</span>
              <button
                type="button"
                className="rounded-lg p-2 mt-2 hover:scale-105 transition-transform duration-300"
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-md mb-4">Cart Items</h1>
      <div className="grid grid-cols-2 gap-4">{fixCartItems()}</div>
      <p className="mt-8 font-bold">Total Price: ₦{calculateTotalPrice()}</p>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default Cart;
