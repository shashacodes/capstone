"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";
import { MdArrowBackIosNew, MdOutlineEditNote } from "react-icons/md";
import { RiLockPasswordLine, RiWallet3Fill } from "react-icons/ri";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex flex-col h-full md:text-xl text-sm text-[20px] border border-[#626260] rounded-lg p-5">
      <Link href="/">
        <span>
          <MdArrowBackIosNew />
        </span>
      </Link>
      <h1 className="text-xl font-extrabold ml-[40%] pb-5">MY ACCOUNT</h1>
      <div className="md:w-[500px] w-[260px] pb-10">
        <img
          src="./favicon.ico"
          alt="fav"
          className="border rounded-full ml-[40%] w-[250px]"
        />
        <MdOutlineEditNote className=" ml-[70%] w-[50px]  h-[40px]" />
        <h1 className="md:text-2xl text-sm font-extrabold md:ml-[50%] ml-[37%]">
          Sharon Ibanga
        </h1>
      </div>
      <div className="border bg-green-800 border-[#626260] rounded-t-lg mt-5">
        <h2 className="md:text-2xl text-sm font-extrabold p-5">
          Account overview
        </h2>
        <section className="flex p-5">
          <span className="border bg-white border-[#626260] rounded-xl p-3 ">
            <BsFillPersonFill color="green" />
          </span>
          <h3 className="ml-[10%]">My Profile</h3>
          <span className="md:ml-[60%] ml-[50%]">
            <GrFormNext />
          </span>
        </section>
        <Link href="/Cart">
          <section className="flex p-5">
            <span className="border bg-white border-[#626260] rounded-xl p-3 ">
              <AiOutlineShoppingCart color="green" />
            </span>
            <h3 className="ml-[10%]">My Order</h3>
            <span className="md:ml-[60%] ml-[50%]">
              <GrFormNext />
            </span>
          </section>
        </Link>
        <Link href="/Wallet">
          <section className="flex p-5 ">
            <span className="border bg-white border-[#626260] rounded-xl p-3 ">
              <RiWallet3Fill color="green" />
            </span>
            <h3 className="ml-[10%]">Payment</h3>
            <span className="md:ml-[60%] ml-[50%]">
              <GrFormNext />
            </span>
          </section>
        </Link>
        <Link href="/Password">
          <section className="flex p-5">
            <span className="border rounded-xl border-[#626260] bg-white p-3 ">
              <RiLockPasswordLine color="green" />
            </span>
            <h3 className="ml-[10%]">Change Password</h3>
            <span className="md:ml-[47%] ml-[40%]">
              <GrFormNext />
            </span>
          </section>
        </Link>
        <section className="flex p-5 space-x-3">
          <span className="border rounded-xl p-3 border-[#626260] bg-white ">
            <LuLanguages color="green" />
          </span>
          <label htmlFor="Change Language">Change Language</label>
          <select
            className="bg-transparent text-black"
            name="Change Language"
            id="change language"
          >
            {" "}
            <option value=""></option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Spanish">Spanish</option>
          </select>
        </section>
      </div>
    </div>
  );
}
