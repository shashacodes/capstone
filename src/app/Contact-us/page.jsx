"use client";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { SiWebauthn } from "react-icons/si";
import { TfiTime } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

export default function page() {
  const handleButtonClick = () => {
    alert("you've reached us!");
  };
  return (
    <div className="text-xl gap-5 mt-10">
      <section className="border rounded-lg bg-transparent w-[30px]">
        <Link href="/">
          <span>
            <MdArrowBackIosNew size={24} color="green" />
          </span>
        </Link>
      </section>
      <h1 className="text-center font-bold mb-6">Contact us</h1>
      <div className="relative mr-6 ml-6">
        <label htmlFor="Address">Address</label> <br />
        <input
          type="text"
          name="Address"
          id="Address"
          placeholder="Address"
          className="border border-[#626260] bg-transparent text-white rounded-md p-2 pl-10"
          required
        />
        <MdLocationPin
          size={24}
          color="green"
          className="absolute left-3 top-1/2 p-1 transform -translate-y-1/2 mt-2"
        />
      </div>
      <div className="relative mr-6 ml-6 mt-6">
        <label htmlFor="number">Phone Number</label> <br />
        <input
          type="number"
          name="number"
          id="number"
          placeholder="+234987654345"
          className="border border-[#626260] bg-transparent text-white rounded-md p-2 pl-10"
          required
        />
        <TbPhoneCall
          size={24}
          color="green"
          className="absolute left-3 top-1/2 p-1 transform -translate-y-1/2 mt-2"
        />
      </div>
      <div className="relative mr-6 ml-6 mt-6">
        <label htmlFor="Website">Website</label> <br />
        <input
          type="text"
          name="Website"
          id="Website"
          placeholder="...."
          className="border border-[#626260] bg-transparent text-white rounded-md p-2 pl-10"
          required
        />
        <SiWebauthn
          size={24}
          color="green"
          className="absolute left-3 top-1/2 p-1 transform -translate-y-1/2 mt-2"
        />
      </div>
      <div className="relative mr-6 ml-6 mt-6">
        <label htmlFor="Time">Time</label> <br />
        <input
          type="time"
          name="Time"
          id="Time"
          className="border border-[#626260] bg-transparent text-white rounded-md p-2 pl-10"
          required
        />
        <TfiTime
          size={24}
          color="green"
          className="absolute left-3 top-1/2 p-1 transform -translate-y-1/2 mt-2"
        />
      </div>
      <div className="relative mr-6 ml-6 mt-6 mb-6">
        <label htmlFor="Email">Email</label> <br />
        <input
          type="email"
          name="Email"
          id="Email"
          className="border border-[#626260] bg-transparent text-white rounded-md p-2 pl-10"
          required
        />
        <AiOutlineMail
          size={24}
          color="green"
          className="absolute left-3 top-1/2 p-1 transform -translate-y-1/2 mt-2"
        />
      </div>
      <button
        className="ml-[20%] p-2 w-[100px] mb-8"
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>
  );
}
