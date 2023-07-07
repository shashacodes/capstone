"use client";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import FoodList from "../_components/FoodList";
import object from "/src/app/object";

const PopularItems = () => {
  return (
    <div className="border rounded-lg space-x-8 ">
      <section className="border rounded-lg  w-[30px]">
        <Link href="/">
          <span className="pt-5">
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <FoodList foodList={object.food} />
      <Link href="/Cart">
        <button className="border rounded-lg p-2">Go To Cart</button>
      </Link>
    </div>
  );
};
export default PopularItems;
