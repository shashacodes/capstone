"use client";
import { foods, items } from "../object";
import Image from "next/image";
import Button from "./Button";
import { useCart } from "./Cart";
import { useState } from "react";
import Link from "next/link";
import Fav from "./Favorite";

const FoodItem = ({ food }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={food.id}
      className={`border border-transparent rounded-lg ${
        isHovered ? "scale-105 transition-all duration-300" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border border-[#626260] bg-[#E6F7F0] shadow-xl shadow-[#262620] md:p-4">
        <div className="h-[130px] relative">
          <div
            className={`absolute inset-0 ${
              isHovered ? "border-2 border-[#E6F7F0] rounded-md" : ""
            }`}
          />
          <Image
            src={food.image}
            width={1000}
            height={-1}
            style={{ objectFit: "cover" }}
            alt={food.name}
            className={`w-full h-full rounded-md ${
              isHovered ? "border-2 border-[#E6F7F0] rounded-md" : ""
            }`}
          />
        </div>
        <div className="p-4 border-t border-black">
          <p className="text-xl font-medium text-center">{food.name}</p>
          <p className="text-lg mt-2">₦{food.price}/kg</p>
          <Button item={food} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
