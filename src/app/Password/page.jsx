import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

export default function page() {
  return (
    <div className="p-5">
      <Link href="my-account">
        <span>
          <MdArrowBackIosNew />
        </span>
      </Link>
      <h1 className="font-bold text-xl ml-[120px]">Change Password</h1>
      <section className="p-2 space-x-4">
        <label htmlFor="password">Old password</label>
        <input type="password" className="text-black" />
      </section>
      <section className="p-2 space-x-4">
        <label htmlFor="password">New password</label>
        <input type="password" className="text-black" />
      </section>
      <section className="p-2 space-x-4">
        <label htmlFor="password">Confirm password</label>
        <input type="password" className="text-black" />
      </section>
      <button className="bg-green-500 hover:bg-transparent mt-5 w-[120px] p-4 ml-[30%]">
        Submit
      </button>
    </div>
  );
}
