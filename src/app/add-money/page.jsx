"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { GiWallet } from "react-icons/gi";

export default function Page() {
  const [amount, setAmount] = useState(0);
  const [walletBalance, setWalletBalance] = useState(500.0);

  const handleButtonClick = (buttonAmount) => {
    setAmount(buttonAmount);
    setWalletBalance(walletBalance + buttonAmount);
  };

  return (
    <div className="p-5 text-white">
      <section className="border rounded-lg bg-[#F5F5F5] w-[30px]">
        <Link href="/">
          <span>
            <MdArrowBackIosNew size={20} style={{ color: "black" }} />
          </span>
        </Link>
      </section>
      <h1 className="text-xl font-bold ml-[40%]">Add Money</h1>
      <div className="border bg-white text-black p-5">
        <section className="flex justify-between">
          <h2 className="">Wallet Balance</h2>
          <span>
            <GiWallet size={20} />
          </span>
        </section>
        ₦{walletBalance}
      </div>
      <section className="mt-5 grid grid-cols-4 gap-5">
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(100)}
        >
          + ₦100
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(200)}
        >
          + ₦200
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(500)}
        >
          + ₦500
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(1000)}
        >
          + ₦1000
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(2000)}
        >
          + ₦2000
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(3000)}
        >
          + ₦3000
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(4000)}
        >
          + ₦4000
        </button>
        <button
          className="border rounded-md p-2 w-[90px] hover:bg-white hover:text-black"
          onClick={() => handleButtonClick(5000)}
        >
          + ₦5000
        </button>
      </section>
      <input
        className="mt-5 border p-3 w-[400px]"
        onChange={(e) => setWalletBalance((prev) => e.target.value)}
      >
        ₦
      </input>
      <button className="md:text-xl text mt-8 bg-green-600 text-black w-[400px] p-3 hover:bg-white hover:text-black">
        ADD MONEY
      </button>
    </div>
  );
}
