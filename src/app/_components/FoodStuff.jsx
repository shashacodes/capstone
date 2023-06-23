"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { items } from "../object";
import object from "/src/app/object.js";

const FoodStuff = ({ item }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className="border border-transparent mr-3  rounded-lg ">
      <Image
        src={item.image}
        width={1000}
        height={-1}
        style={{ objectFit: "cover" }}
        alt={item.name}
        className="border rounded-xl "
      />
      <section className=" border-t-black pt-5 md:text-xl text-sm">
        <p> {item.name}</p>
        <div className="flex gap-3">
          <p> {item.price}</p>
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

export default FoodStuff;
