import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { cater } from "/src/app/object";
import { categories } from "../object";

export default function page() {
  return (
    <div className="p-5 gap-10 md:max-w-[640px] max-w-[480px] md:ml-3 mr-[40%]">
      <section className="border rounded-lg bg-slate-200 w-[30px]">
        <Link href="/">
          <span className="">
            <MdArrowBackIosNew size={20} />
          </span>
        </Link>
      </section>
      <div className="grid grid-cols-3 gap-8 p-4">
        {categories.map((cat) => {
          return (
            <Link key={cat.id} href={`/categories/${cat.content}`}>
              <div className="flex flex-col gap-3 ml-8 ">
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
