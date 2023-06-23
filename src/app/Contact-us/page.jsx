import React from "react";
import { MdLocationPin } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { SiWebauthn } from "react-icons/si";
import { TfiTime } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

export default function page() {
  return (
    <div className="text-xl gap-5 mt-10">
      <section className="border rounded-lg bg-slate-200 w-[30px]">
        <Link href="/">
          <span>
            <MdArrowBackIosNew size={24} color="green" />
          </span>
        </Link>
      </section>
      <h1 className="text-center font-bold">Contact us</h1>
      <div className="ml-3 border rounded-lg hover:shadow-lg shadow-cyan-100 transition-shadow duration-300 mt-8">
        <section className="flex gap-6 mt-8 ml-4">
          <span>
            <MdLocationPin size={24} color="green" />
          </span>
          <label className="mb-2" htmlFor="address">
            Address
          </label>{" "}
          <input
            className=""
            type="text"
            name="address"
            id="address"
            placeholder=""
          />
        </section>
      </div>
      <div className=" ml-3 border rounded-lg hover:shadow-lg shadow-cyan-100 transition-shadow duration-300 mt-8">
        <section className="flex gap-6 mt-8 ml-4">
          <span>
            <TbPhoneCall size={24} color="green" />{" "}
          </span>
          <label className="mb-2" htmlFor="number">
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="+23481234567"
          />
        </section>
      </div>
      <div className=" ml-3 border rounded-lg hover:shadow-lg shadow-cyan-100 transition-shadow duration-300 mt-8">
        <section className="flex gap-6 mt-8 ml-4">
          <span>
            <SiWebauthn size={24} color="green" />{" "}
          </span>
          <label className="mb-2" htmlFor="website">
            WebSite
          </label>
          <input type="text" name="website" id="website" />
        </section>
      </div>
      <div className=" ml-3 border rounded-lg hover:shadow-lg shadow-cyan-100 transition-shadow duration-300 mt-8">
        <section className="flex gap-6 mt-8 ml-4">
          <span>
            <TfiTime size={24} color="green" />{" "}
          </span>
          <label className="mb-2" htmlFor="Time">
            Time
          </label>
          <input type="time" name="time" id="time" />
        </section>
      </div>
      <div className=" ml-3 border rounded-lg hover:shadow-lg shadow-cyan-100 transition-shadow duration-300 mt-8">
        <section className="flex gap-6 mt-8 ml-4">
          <span>
            <AiOutlineMail size={24} color="green" />{" "}
          </span>
          <label className="mb-2" htmlFor="E-Mail">
            E-Mail
          </label>
          <input
            type="text"
            name="E-Mail"
            id="E-Mail"
            placeholder="ibsharon19@gmail.com"
            className="mb-3"
          />
        </section>
      </div>
    </div>
  );
}
