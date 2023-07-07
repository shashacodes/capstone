"use client";
import { foods, items } from "../object";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";
import Fav from "./Favorite";

const FoodItem = ({ food }) => {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   const NewCartItems = [...cartItems, item];
  //   setCartItems(NewCartItems);
  //   localStorage.setItem("cartItems", JSON.stringify(NewCartItems));
  // };

  return (
    <div key={foods.id} className="border border-transparent  rounded-lg ">
      <div className="border border-[#626260] shadow-xl shadow-[#626260] w-[100px]">
        <div className="h-[130px]">
          <span className="flex justify-around">
            <Image
              className="mr-3"
              alt="pic"
              src={food.media}
              width={70}
              height={20}
            />
            <span className="mt-2">
              <Fav id={food} />
            </span>
          </span>
          <Image
            src={food.image}
            width={1000}
            height={-1}
            style={{ objectFit: "cover" }}
            alt={food.name}
          />
        </div>
        <section className=" border-t-black pt-5 md:text-xl text-sm">
          <p> {food.name}</p>
          <p> {food.price}</p>

          <Button item={food} />
        </section>
      </div>
    </div>
  );
};

export default FoodItem;
