"use client";
import Image from "next/image";
import { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { foods } from "../object";

const FoodItem = ({ food }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className="border border-transparent mr-3  rounded-lg ">
      <Image
        src={food.image}
        width={1000}
        height={-1}
        style={{ objectFit: "cover" }}
        alt={food.name}
        className="border rounded-xl "
      />
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
    //   <div className="border rounded-lg space-x-8 ">
    //     <section className="border rounded-lg bg-slate-200 w-[30px]">
    //       <Link href="/">
    //         <span className="pt-5">
    //           <MdArrowBackIosNew size={20} />
    //         </span>
    //       </Link>
    //     </section>
    //     <FoodList foodList={object.foods} />
    //   </div>
  );
};

export default FoodItem;
