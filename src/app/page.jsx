import React from "react";
import Image from "next/image";
import pic from "./media/basket.png";

import { TiLocation } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
import Link from "next/link";

export default function page() {
  return (
    <div className="max-w-[640px] ">
      <div className="flex flex-col-1  justify-between ">
        <Link href="/side-bar">
          <span className="ml-6">
            <BsFilterLeft size={45} />
          </span>{" "}
        </Link>
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
        <section className="flex justify-between">
          <h1>Categories</h1>
          <Link href="/Categories">
            <p>see all</p>{" "}
          </Link>
        </section>

        <div className="grid grid-cols-4 border rounded-xl border-transparent gap-8 p-5 font-extrabold text-xl text-black">
          <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/vegg.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl">
            Vegetables
          </h1>
          <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/fruits.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl">
            Fruits
          </h1>
          <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/milk%26eggs.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl">
            Milk & Eggs
          </h1>
          <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/drinks.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl">
            Drinks
          </h1>
        </div>
      </div>
      <div>
        <section className="flex justify-between">
          <h1>Deals</h1>
          <p>see all</p>
        </section>
        <div className="grid grid-cols-2 border w-[500px] bg-gray-400 ml-12 h-[200px] rounded-xl ">
          <h2 className="text-xl font-bold mx-10 mb-5 pt-5">
            50% off <br />
            On Grocery Combo packs
          </h2>
          <aside className="ml-[50%] grid-cols-1 my-6">
            <Image className="" src={pic} alt="food" width={120} height={100} />{" "}
          </aside>
          <button className="border w-[120px] h-[40px] mx-7 bg-slate-600 rounded-lg mb-10 ">
            order now
          </button>
        </div>
      </div>
      <div>
        <section className="flex justify-between">
          <h1>Popular Items</h1>
          <p>see all</p>
        </section>
        <div className="grid grid-cols-3 border rounded-xl border-transparent gap-8 p-5">
          <h1 className="bg-slate-500 p-8 border rounded-xl">Apple</h1>
          <h1 className="bg-slate-400 p-8 border rounded-xl">Orange</h1>
          <h1 className="bg-slate-300 p-8 border rounded-xl">Pineapple</h1>
        </div>
      </div>
      <footer>
        <div className="flex justify-between">
          <span className="flex gap-1">
            Home <AiFillHome size={20} />
          </span>
          <span className="flex gap-1">
            Favorite <GrFavorite size={20} />
          </span>
          <span className="flex gap-1">
            Wallet <GiWallet size={25} />
          </span>
          <span className="flex gap-1">
            Cart <FiShoppingCart size={20} />
          </span>
          <span className="flex gap-1">
            Profile <BsPerson size={25} />
          </span>
        </div>
      </footer>
    </div>
  );
}
