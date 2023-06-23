import React from "react";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { GiWallet } from "react-icons/gi";

export default function page() {
  return (
    <div className="p-5">
      <section className="border rounded-lg bg-slate-200 w-[30px]">
        <Link href="/">
          <span>
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <h1 className="text-xl font-bold ml-[40%]">Add Money </h1>
      <div className="border bg-cyan-200 p-5">
        <section className="flex justify-between">
          <h2 className="">Wallet Balance</h2>
          <span>
            <GiWallet size={20} />
          </span>
        </section>
        ₹500.00
        <button className="md:text-xl text">ADD MONEY</button>
      </div>
    </div>
  );
}
