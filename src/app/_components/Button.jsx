"use client";
import React, { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useCart } from "./Cart";

const Button = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    setAmount((prevAmount) => prevAmount + 1);
  };

  return (
    <div>
      <span className="flex space-x-2 border ml-6 border-[#626260] rounded-md bg-transparent">
        <BiMessageSquareAdd size={20} color="green" onClick={handleAddToCart} />
        <p>{amount}</p>
      </span>
    </div>
  );
};

export default Button;
