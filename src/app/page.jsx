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

async function fetchlist() {
  const response = fetch();
}

export function Page() {
  return (
    <div className="text-[20px]">
      <div className="flex flex-col-1  justify-between ">
        {/* <select name="" id=""> */}
        <Link href="/side-bar">
          <span className="ml-6 ">
            <BsFilterLeft size={40} />
          </span>{" "}
        </Link>
        {/* </select> */}
        <section>
          <h1 className="ml-[15%]">Location</h1>
          <span className="flex space-x-4">
            <TiLocation size={20} />
            <select name="usa" id="">
              <option value="Nigeria">Nigeria,Lagos</option>
              <option value="Australia">Australia, Sydney</option>
              <option value="Dubai">UAE, Dubai</option>
              <option value="Europe">Europe, Italy</option>
              <option value="paris">France,Paris</option>
              <option value="Asia">Asia, South-Korea</option>
            </select>
          </span>
        </section>
        <span className="mr-6 p-2">
          <BsFillBellFill size={30} />
        </span>
      </div>
      <div className="border rounded-2xl justify-between  mx-auto p-4 flex">
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
      <div className="ml-6 mr-6">
        <section className="flex justify-between">
          <h1>Categories</h1>
          <Link href="/Categories">
            <p>see all</p>{" "}
          </Link>
        </section>

        <div className="grid grid-cols-4 border rounded-xl border-transparent gap-8 p-5 font-bold md:text-xl text-sm text-black">
          <section className="flex flex-col p-5  ">
            <h1 className=" bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/vegg.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>{" "}
            <p>Vegetables</p>
          </section>
          <section className="flex flex-col p-5">
            <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/fruits.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>
            <p className="pl-5"> Fruits </p>
          </section>
          <section className="flex flex-col p-5">
            <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/milk%26eggs.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>{" "}
            <p> Milk&Eggs </p>
          </section>
          <section className="flex flex-col p-5">
            <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/drinks.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>{" "}
            <p> Drinks </p>
          </section>
        </div>
      </div>

      <div className="ml-6 mr-6">
        <section className="flex justify-between ">
          <h1>Deals</h1>
          <p>see all</p>
        </section>
        <div className="grid grid-cols-2 border md:w-[500px] w-[300px] bg-gray-400 ml-12 h-[200px] rounded-xl ">
          <h2 className="md:text-xl text-sm font-bold mx-10 mb-5 pt-5">
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
      <div className="ml-6 mr-6">
        <section className="flex justify-between text-xl ">
          <h1>Popular Items</h1>
          <p>see all</p>
        </section>
        <div className="grid grid-cols-3 border rounded-xl border-transparent gap-8 p-5">
          <section className="border-transparent md:w-[200px] w-[100px] border-b p-5">
            <h1 className="bg-[url('https://raw.githubusercontent.com/shashacodes/capstone/4c2b9354a008b8e80af7249bf1baa0da08c29bd2/src/app/media/apple.jpg')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>{" "}
            <p className="ml-2">Apple</p>
            <p></p>
          </section>
          <section className="border-transparent md:w-[200px] w-[100px] border-b p-5">
            {" "}
            <h1 className="bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/oranges.jpg?raw=true')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>{" "}
            <p className="ml-2">Orange</p>
          </section>
          <section className="border-transparent md:w-[200px] w-[100px] border-b p-5">
            {" "}
            <h1 className="bg-[url('')] bg-no-repeat bg-cover p-8 border rounded-xl"></h1>{" "}
            <p className="ml-2">Pineapple</p>
          </section>
        </div>
      </div>
      <footer className="ml-6 mr-6">
        <div className="flex justify-between md:text-xl text-sm">
          <span className="gap-1 ">
            <AiFillHome size={20} /> Home
          </span>
          <span className=" gap-1">
            <GrFavorite size={20} /> Favorite
          </span>
          <Link href="/Wallet">
            <span className=" gap-1">
              <GiWallet size={25} /> Wallet
            </span>
          </Link>
          <span className="gap-1">
            <FiShoppingCart size={20} /> Cart
          </span>
          <Link href="/my-account">
            <span className=" gap-1">
              <BsPerson size={25} /> Profile
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
