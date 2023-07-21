"use client";
import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Page() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Password successfully changed!");
  };

  return (
    <div className="p-5">
      <Link href="my-account">
        <span>
          <MdArrowBackIosNew />
        </span>
      </Link>
      <h1 className="font-bold text-xl ml-[120px]">Change Password</h1>
      <form onSubmit={handleFormSubmit}>
        <section className="p-2 space-x-4">
          <label htmlFor="oldPassword">Old password</label>
          <input type="password" id="oldPassword" className="text-black" />
        </section>
        <section className="p-2 space-x-4">
          <label htmlFor="newPassword">New password</label>
          <input type="password" id="newPassword" className="text-black" />
        </section>
        <section className="p-2 space-x-4">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" className="text-black" />
        </section>
        <button
          className="bg-green-500 hover:bg-transparent mt-5 w-[120px] p-4 ml-[30%]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
