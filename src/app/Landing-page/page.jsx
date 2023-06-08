import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";

export default function page() {
  return (
    <div className="max-w-[640px] ">
      <div className="flex flex-col-1  justify-between ">
        <span className="ml-6">
          <BsFilterLeft size={50} />
        </span>
        <section>
          <h1>Location</h1>
          <span className="flex">
            <TiLocation size={20} />
            <p>New York, USA</p>
            <RiArrowDropDownLine size={30} />
          </span>
        </section>
        <span className="mr-6">
          <BsFillBellFill size={30} />
        </span>
      </div>
      <div className="border rounded-2xl justify-between w-[480px] mx-auto p-4 flex">
        <BsSearch size={20} className="mr-3" />
        <input
          type="text"
          name=""
          id=""
          placeholder="search food, drink, etc"
          className="text-xl"
        />
        <span className="">
          <LuSettings2 size={25} style={{ color: "green" }} />
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <h1>Categories</h1>
          <p>see all</p>
        </div>
        <div className="grid grid-cols-4 border border-transparent gap-8 rounded-xl p-5">
          <h1 className="bg-red-400 p-8">Vegetables</h1>
          <h1 className="bg-red-400 p-8">Fruits</h1>
          <h1 className="bg-yellow-300">Milk & Eggs</h1>
          <h1>Drinks</h1>
        </div>
      </div>
    </div>
  );
}
