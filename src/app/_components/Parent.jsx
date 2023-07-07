"use client";
import React from "react";
import { useCart } from "./useCart";
import Button from "./Button";

export default function ParentComponent() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <Button onClick={() => handleAddToCart(item)} label="Add to Cart" />
    </div>
  );
}
