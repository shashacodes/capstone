import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { cater } from "/src/app/object";
import { categories } from "../object";

export const metadata = {
  title: "categories",
  description: "This page contains the categories of the page items",
};

export default function Category() {
  return (
    <div className="mt-3 p-3">
      <section className="border rounded-lg ">
        <Link href="/">
          <span className="">
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <div className="grid grid-cols-3 gap-4 border-[#E6F7F0] ">
        {categories.map((cat) => {
          return (
            <Link key={cat.id} href={`/Categories/${cat.slug}`}>
              <div className="flex flex-col items-center justify-center ml-8 border bg-[#E6F7F0] border-[#E6F7F0] rounded-md hover:shadow-lg transition-all duration-300">
                <Image
                  alt="Product Image"
                  width={600}
                  height={400}
                  objectFit="cover"
                  src={cat.image}
                  className="rounded-md"
                />
                <p className="mt-2 text-center font-medium">{cat.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
