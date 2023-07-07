"use client";
import Image from "next/image";
import React, { useState } from "react";
import { categories } from "@/app/object";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "@/app/_components/Button";
import Fav from "@/app/_components/Favorite";

function fetchProducts(params) {
  const selectedCategory = categories.find(
    (category) => category.slug === params.slug
  );

  if (selectedCategory) {
    const products = selectedCategory.products;
    return products;
  }

  return [];
}

export default function Page({ params }) {
  const products = fetchProducts(params);
  return (
    <div className="mt-3 p-2">
      <Link href="/Categories">
        <span className="">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <div className="grid grid-cols-3 border border-[#626260] rounded-md text-sm mt-5 p-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-[#626260] rounded-md ">
            <Image
              src={product.image}
              alt="products"
              width={1000}
              height={-1}
            />
            <section className="flex flex-col p-1">
              <p className="mt-5">Name: {product.name}</p>
              <p>{product.description}</p>
              <Fav id={product} />
              <span className="flex space-x-3">
                <p className="mb-0">Price: {product.price}</p>
                <Button item={product} />
              </span>
            </section>
          </div>
        ))}
        <Link href="/Cart">
          <button>Go To Cart</button>
        </Link>
      </div>
    </div>
  );
}
