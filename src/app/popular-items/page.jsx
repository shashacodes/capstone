"use client";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import FoodList from "../_components/FoodList";
import object from "/src/app/object";

const PopularItems = () => {
  return (
    <div className="border rounded-lg space-x-8 ">
      <section className="border rounded-lg bg-slate-200 w-[30px]">
        <Link href="/">
          <span className="pt-5">
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <FoodList foodList={object.foods} />
    </div>
  );
};
export default PopularItems;
