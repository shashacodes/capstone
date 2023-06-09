import React from "react";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { GiWallet } from "react-icons/gi";

export default function page() {
  return (
    <div className="gap-6 p-5 ">
      <section className="border rounded-lg bg-[#E6F7F0] w-[30px]">
        <Link href="/">
          <span>
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <h1 className="text-2xl font-bold ml-[30%] p-4">Wallet History </h1>
      <div className="border rounded-md border-[#626260] shadow-xl shadow-[#626260] bg-white text-black font-bold text-2xl p-5  gap-10 pb-8">
        <section className="flex justify-between ">
          <h2 className="">Wallet Balance</h2>
          <span>
            <GiWallet size={20} />
          </span>
        </section>
        <p className="pb-6"> ₦500.00 </p>
        <Link href="/add-money">
          <button className="md:text-xl text-lg text-[14px] border ml-[15%] rounded-lg bg-green-700 hover:bg-[#3D3D37] hover:text-black md:px-32 px-20 py-4 ">
            Add Money
          </button>{" "}
        </Link>
      </div>
      <h1 className="font-bold pt-6 ">Today</h1>
      <div className="">
        <section className="border rounded-xl border-[#626260] bg-[#E6F7F0] p-5">
          <span className="flex justify-between">
            {" "}
            <p>Money Added To Wallet</p>
            <p className="text-green-500"> + ₦500.00 </p>{" "}
          </span>
          <span className="flex justify-between">
            <p>24 April| 7:30Am</p>
            <p>Balance ₦12,000.00 </p>
          </span>
        </section>
      </div>
      <h1 className="font-bold pt-6 ">Yesterday</h1>
      <div className="">
        <section className="border rounded-xl border-[#626260] bg-[#E6F7F0] p-5">
          <span className="flex justify-between">
            {" "}
            <p>Order Number 34234</p>
            <p className="text-red-500"> - ₦500.00 </p>{" "}
          </span>
          <span className="flex justify-between">
            <p>23 April| 5:30Am</p>
            <p>Balance ₦11,250.00 </p>
          </span>
        </section>
      </div>
      <h1 className="font-bold pt-6 ">22 April 2023</h1>
      <div className="">
        <section className="border rounded-xl border-[#626260] bg-[#E6F7F0] p-5 mt-6">
          <span className="flex justify-between">
            {" "}
            <p>Order No 34234</p>
            <p className="text-red-500"> - ₦500.00 </p>{" "}
          </span>
          <span className="flex justify-between">
            <p>22 April| 7:30Am</p>
            <p>Balance ₦11,250.00 </p>
          </span>
        </section>
        <section className="border rounded-xl border-[#626260] bg-[#E6F7F0] p-5 mt-6 ">
          <span className="flex justify-between">
            {" "}
            <p>Order No 34234</p>
            <p className="text-red-500"> - ₦500.00 </p>{" "}
          </span>
          <span className="flex justify-between">
            <p>22 April| 7:30Am</p>
            <p className="">Balance ₦11,250.00 </p>
          </span>
        </section>
        <section className="border rounded-xl border-[#626260] bg-[#E6F7F0] p-5 mt-6">
          <span className="flex justify-between">
            {" "}
            <p>Order No 34234</p>
            <p className="text-red-500"> - ₦500.00 </p>{" "}
          </span>
          <span className="flex justify-between">
            <p>22 April| 7:30Am</p>
            <p>Balance ₦11,250.00 </p>
          </span>
        </section>
      </div>
    </div>
  );
}
