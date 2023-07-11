"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";
import { MdArrowBackIosNew, MdOutlineEditNote } from "react-icons/md";
import { RiLockPasswordLine, RiWallet3Fill } from "react-icons/ri";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Sharon Ibanga");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Perform save/update action with the updated name
    // You can make an API call or update the data using the appropriate method
    // For simplicity, we'll just log the updated name
    console.log(name);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="flex flex-col h-full md:text-xl text-sm text-[20px] border border-[#626260] rounded-lg p-5">
      <Link href="/">
        <span>
          <MdArrowBackIosNew />
        </span>
      </Link>
      <h1 className="text-xl font-extrabold ml-[40%] pb-5">MY ACCOUNT</h1>
      <div className="md:w-[500px] w-[260px] pb-10">
        <Image
          src="/favicon.ico"
          alt="fav"
          width={120}
          height={100}
          className="border rounded-full ml-[40%]"
        />
        {editMode ? (
          <MdOutlineEditNote
            className="ml-[70%] w-[50px] h-[40px] cursor-pointer"
            onClick={handleSaveClick}
          />
        ) : (
          <MdOutlineEditNote
            className="ml-[70%] w-[50px] h-[40px] cursor-pointer"
            onClick={handleEditClick}
          />
        )}
        <h1 className="md:text-2xl text-sm font-extrabold md:ml-[50%] ml-[37%]">
          {editMode ? (
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              placeholder="change profile here..."
              className="text-black"
            />
          ) : (
            name
          )}
        </h1>
      </div>
      <div className="border bg-green-800 border-[#626260] rounded-t-lg mt-5">
        <h2 className="md:text-2xl text-sm font-extrabold p-5">
          Account overview
        </h2>
        <section className="flex p-5 hover:translate-x-2">
          <span className="border bg-white border-[#626260] rounded-xl p-3">
            <BsFillPersonFill color="green" />
          </span>
          <h3 className="ml-[10%] hover:translate-x-2">My Profile</h3>
          <span className="md:ml-[60%] ml-[50%]">
            <GrFormNext />
          </span>
        </section>
        <Link href="/Cart">
          <section className="flex p-5 hover:translate-x-2">
            <span className="border bg-white border-[#626260] rounded-xl p-3">
              <AiOutlineShoppingCart color="green" />
            </span>
            <h3 className="ml-[10%]">My Order</h3>
            <span className="md:ml-[60%] ml-[50%]">
              <GrFormNext />
            </span>
          </section>
        </Link>
        <Link href="/Wallet">
          <section className="flex p-5 hover:translate-x-2">
            <span className="border bg-white border-[#626260] rounded-xl p-3">
              <RiWallet3Fill color="green" />
            </span>
            <h3 className="ml-[10%]">Payment</h3>
            <span className="md:ml-[60%] ml-[50%]">
              <GrFormNext />
            </span>
          </section>
        </Link>
        <Link href="/Password">
          <section className="flex p-5 hover:translate-x-2">
            <span className="border rounded-xl border-[#626260] bg-white p-3">
              <RiLockPasswordLine color="green" />
            </span>
            <h3 className="ml-[10%]">Change Password</h3>
            <span className="md:ml-[47%] ml-[40%]">
              <GrFormNext />
            </span>
          </section>
        </Link>
        <section className="flex p-5 space-x-3 hover:translate-x-2">
          <span className="border rounded-xl p-3 border-[#626260]  bg-white">
            <LuLanguages color="green" />
          </span>
          <label htmlFor="Change Language">Change Language</label>
          <select
            className="bg-transparent text-black"
            name="Change Language"
            id="change language"
          >
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
};

export default Profile;
