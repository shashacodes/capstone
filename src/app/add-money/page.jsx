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
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };
  const handleAddMoney = () => {
    const inputAmount = Number(amount);
    setWalletBalance(walletBalance + inputAmount);
  };

  return (
    <div className="p-5 text-white">
      <section className="border rounded-lg bg-[#F5F5F5] w-[30px]">
        <Link href="/Wallet">
          <span>
            <MdArrowBackIosNew size={20} style={{ color: "black" }} />
          </span>
        </Link>
      </section>
      <h1 className="text-xl font-bold ml-[40%] pb-3">Add Money</h1>
      <div className="border rounded-md bg-[#44443f] pt-3 border-[#626260] shadow-xl shadow-[#5d5d57] p-2">
        <div className="border border-[#626260] bg-white text-black p-5">
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
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(100)}
          >
            + ₦100
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(200)}
          >
            + ₦200
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(500)}
          >
            + ₦500
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(1000)}
          >
            + ₦1000
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(2000)}
          >
            + ₦2000
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(3000)}
          >
            + ₦3000
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(4000)}
          >
            + ₦4000
          </button>
          <button
            className="border rounded-md p-2 w-[85px] hover:bg-white border-[#626260] hover:text-black"
            onClick={() => handleButtonClick(5000)}
          >
            + ₦5000
          </button>
        </section>

        <input
          className="mt-5 border p-3 w-[370px]  text-black"
          onChange={handleInputChange}
        ></input>
        <button
          onClick={handleAddMoney}
          className="md:text-xl text mt-8 bg-green-600 text-black w-[370px] p-3 hover:bg-white hover:text-black"
        >
          Add Money
        </button>
      </div>
    </div>
  );
}
