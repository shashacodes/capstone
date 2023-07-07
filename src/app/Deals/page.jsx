"use client";
import React, { useState } from "react";
import { deals } from "../object";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "../_components/Button";
import Fav from "../_components/Favorite";
import Cart from "../Cart/page";

export default function Deals() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="p-4">
      <Link href="/">
        <span className="pt-5">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <div className="grid grid-cols-2 gap-4 mt-3 p-3 border border-[#626260]">
        {deals.map((deal) => (
          <div key={deal.name}>
            <h1 className="font-bold text-xl mt-3">{deal.name}</h1>
            <Image src={deal.image} alt="image" width={200} height={200} />
            <div className="border rounded-md border-[#626260] p-3">
              {deal.items.map((item) => (
                <section key={item.name} className="flex gap-2">
                  <h2>{item.name}</h2>
                  <h2>{item.quantity}</h2>
                </section>
              ))}
              <span className="flex gap-3">
                <h2>price: {deal.price}</h2>
                <Button
                  item={deal}
                  onClick={() => handleAddToCart(deal)}
                  label="Add to Cart"
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
