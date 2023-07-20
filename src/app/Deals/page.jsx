"use client";
import React from "react";
import { deals } from "../object";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "../_components/Button";
import Fav from "../_components/Favorite";
import { useCart } from "../_components/Cart";

export default function Deals() {
  const { addToCart } = useCart();
  const { cartItems } = useCart();

  const handleAddToCart = (deal, newItem) => {
    addToCart((prevItems) => {
      const updatedItems = { ...prevItems };
      if (!updatedItems[deal.name]) {
        updatedItems[deal.name] = [];
      }
      updatedItems[deal.name].push(newItem);
      return updatedItems;
    });
  };

  return (
    <div className="p-4">
      <Link href="/">
        <span className="pt-5">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <div className="grid grid-cols-2 gap-4 mt-3 p-3 border rounded-md">
        {deals.map((deal) => (
          <div key={deal.id} className="rounded-md ">
            <h1 className="font-bold text-xl mt-3">{deal.name}</h1>
            <Image src={deal.image} alt="image" width={300} height={200} />
            <div className="border rounded-md hover:scale-105 shadow-xl shadow-[#262620] transition-all duration-300 border-[#626260] p-3">
              {deal.items.map((item) => (
                <section key={item.name} className="flex gap-2">
                  <h2>{item.name}</h2>
                  <h2>{item.quantity}</h2>
                </section>
              ))}
              <span className="flex gap-3">
                <h2>price:₦ {deal.price}</h2>
                <Button
                  deal={deal}
                  addToCart={(newItem) => handleAddToCart(deal, newItem)}
                  cartItems={cartItems[deal.name] || []}
                />
              </span>
              <Fav id={deal} />
            </div>
          </div>
        ))}
        <Link href="/Cart">
          <button className="bg-green-500 border rounded-lg p-2 hover:bg-green-700">
            Go To Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
