"use client";
import React from "react";
import { deals } from "../object";
import Image from "next/image";
import { BiMessageSquareAdd } from "react-icons/bi";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function page() {
  return (
    <div className="p-4">
      <Link href="/">
        <span className="pt-5">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <div className="grid grid-cols-2 gap-4 mt-3 p-3 border border-[#626260]">
        {deals.map((deal) => (
          <div key={deal.id}>
            <h1 className="font-bold text-xl mt-3">{deal.name}</h1>
            <Image src={deal.image_url} alt="image" width={200} height={200} />
            <div className=" border rounded-md border-[#626260] p-3">
              {deal.items.map((item) => (
                <section key={item.id} className="flex gap-2">
                  <h2>{item.name}</h2>
                  <h2>{item.quantity}</h2>
                </section>
              ))}
              <span className="flex gap-3">
                <h2>price: {deal.price}</h2>
                <BiMessageSquareAdd color="green" className="mt-2" size={20} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
