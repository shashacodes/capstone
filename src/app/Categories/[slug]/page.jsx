"use client";
import React from "react";
import Keep from "@/app/_components/KeepFood";
import { categories } from "../../object";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Category() {
  const { slug } = useParams();
  return (
    <div className="grid p-4">
      {/* <Link href={`categories/${categories.name}`}> */}
      <h1 className="my-3">{slug}</h1>
      <Keep food={categories.find((_) => _.slug === slug)} />
      {/* </Link> */}
    </div>
  );
}
