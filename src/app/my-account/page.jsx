import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrFormNext } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineEditNote } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
export default function page() {
  return (
    <div className="flex flex-col h-full md:text-xl text-sm text-[20px] border rounded-lg p-5">
      <Link href="/">
        <span>
          <MdArrowBackIosNew />
        </span>
      </Link>
      <h1 className="text-xl font-extrabold ml-[40%] pb-5">MY ACCOUNT</h1>
      <div className="md:w-[500px] w-[260px] pb-10">
        <img
          src="/favicon.ico"
          alt="fav"
          className="border rounded-full ml-[40%] w-[250px]"
        />
        <MdOutlineEditNote className=" ml-[70%] w-[50px]  h-[40px]" />
        <h1 className="md:text-2xl text-sm font-extrabold md:ml-[50%] ml-[37%]">
          Sharon Ibanga
        </h1>
      </div>
      <div className="border bg-green-800 rounded-t-lg mt-5">
        <h2 className="md:text-2xl text-sm font-extrabold p-5">
          Account overview
        </h2>
        <section className="flex p-5">
          <span className="border bg-white rounded-xl p-3 ">
            <BsFillPersonFill color="green" />
          </span>
          <h3 className="ml-[10%]">My Profile</h3>
          <span className="md:ml-[60%] ml-[30%]">
            <GrFormNext />
          </span>
        </section>
        <section className="flex p-5">
          <span className="border bg-white rounded-xl p-3 ">
            <AiOutlineShoppingCart color="green" />
          </span>
          <h3 className="ml-[10%]">My Order</h3>
          <span className="md:ml-[60%] ml-[30%]">
            <GrFormNext />
          </span>
        </section>
        <section className="flex p-5">
          <span className="border bg-white rounded-xl p-3 ">
            <CiWallet color="green" />
          </span>
          <h3 className="ml-[10%]">Payment</h3>
          <span className="md:ml-[60%] ml-[30%]">
            <GrFormNext />
          </span>
        </section>
        <section className="flex p-5">
          <span className="border rounded-xl bg-white p-3 ">
            <RiLockPasswordLine color="green" />
          </span>
          <h3 className="ml-[10%]">Change Password</h3>
          <span className="md:ml-[47%] ml-[27%]">
            <GrFormNext />
          </span>
        </section>
        <section className="flex p-5">
          <span className="border rounded-xl p-3 bg-white ">
            <LuLanguages color="green" />
          </span>
          <h3 className="ml-[10%]">Change Language</h3>
          <span className="md:ml-[47%] ml-[27%]">
            <GrFormNext />
          </span>
        </section>
      </div>
    </div>
  );
}
