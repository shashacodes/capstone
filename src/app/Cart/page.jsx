"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../_components/Cart";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = (item) => {
  const {
    cartItems,
    // removeFromCart,
    clearCart,
    calculateTotalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div>
      <span className="flex justify-center mt-3">
        <h2 className="text-2xl font-bold text-center justify-center">
          Cart Items
        </h2>
        <span className="ml-[20%] hover:text">
          <RiDeleteBin5Line
            size={20}
            onClick={clearCart}
            title="Clear cart items?"
          />
        </span>
      </span>
      {cartItems.length === 0 ? (
        <p className="text-center">No items in the cart.</p>
      ) : (
        <ul className="grid grid-cols-2 ml-8 rounded-md gap-5">
          {cartItems.map((item, index) => (
            <div key={index} className="rounded-md gap-5  p-2 bg-white">
              <Image src={item.image} width={200} height={100} alt="image" />
              <li>{item.name}</li>
              <li>{item.description}</li>
              <li>₦{item.price}</li>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className=" rounded-lg p-2 mt-2  hover:scale-105 transition-transform duration-300"
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  className=" rounded-lg p-2 mt-2  hover:scale-105 transition-transform duration-300"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
              </div>
              {/* <button
                className=" rounded-lg p-2 mt-2"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button> */}
            </div>
          ))}
        </ul>
      )}
      <div className="text-center text-lg font-bold mt-4">
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
