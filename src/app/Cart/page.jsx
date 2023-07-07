"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../_components/Cart";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const { cartItems, calculateTotalPrice, removeFromCart, clearCart } =
    useCart();

  return (
    <div>
      <span className="flex justify-center mt-3">
        <h2 className="text-2xl font-bold text-center justify-center">
          Cart Items
        </h2>
        <span className="ml-[20%]">
          <RiDeleteBin5Line size={20} onClick={clearCart} />
        </span>
      </span>
      {cartItems.length === 0 ? (
        <p className="text-center">No items in the cart.</p>
      ) : (
        <ul className="grid grid-cols-2 ml-8">
          {cartItems.map((item, index) => (
            <div key={index}>
              <Image src={item.image} width={150} height={100} alt="image" />
              <li>{item.name}</li>
              <li>{item.price}</li>
              <button
                className="bg-red-500 hover:bg-red-700 rounded-lg p-2 mt-2"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      )}
      <div className="text-center mt-4">
        <h3>Total Price: ₦{calculateTotalPrice()}</h3>
      </div>
      <Link href="/">
        <button className="bg-green-500 hover:bg-green-700 rounded-lg p-2">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Cart;
