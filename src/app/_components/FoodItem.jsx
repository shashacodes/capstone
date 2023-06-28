"use client";
import { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { MdArrowBackIosNew, MdFavoriteBorder } from "react-icons/md";
import { foods, items } from "../object";
import Image from "next/image";

const FoodItem = ({ food }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div key={foods.id} className="border border-transparent mr-3  rounded-lg ">
      <div>
        <span className="flex justify-between">
          <Image
            className="mr-3"
            alt="pic"
            src={food.media}
            width={70}
            height={20}
          />
          <MdFavoriteBorder className="mt-4" />
        </span>
        <Image
          src={food.image}
          width={1000}
          height={-1}
          style={{ objectFit: "cover" }}
          alt={food.name}
          className="border rounded-xl "
        />
      </div>
      <section className=" border-t-black pt-5 md:text-xl text-sm">
        <p> {food.name}</p>
        <div className="flex gap-3">
          <p> {food.price}</p>
          <BiMessageSquareAdd
            size={20}
            color="green"
            onClick={() => setAmount(amount + 1)}
          />
          <p>{amount}</p>
        </div>
      </section>
    </div>
  );
};

export default FoodItem;
