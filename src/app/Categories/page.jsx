import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { cater } from "/src/app/object";
import { categories } from "../object";

export default function Category() {
  return (
    <div className="">
      <section className="border rounded-lg bg-slate-200 w-[30px]">
        <Link href="/">
          <span className="">
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((cat) => {
          return (
            <Link key={cat.id} href={`/categories/${cat.slug}`}>
              <div className="flex flex-col ml-8 ">
                <Image
                  alt="Product Image"
                  width={600}
                  height={-1}
                  style={{ objectFit: "cover" }}
                  src={cat.imageUrl}
                  className={`border rounded-md`}
                />
                <p> {cat.name} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
