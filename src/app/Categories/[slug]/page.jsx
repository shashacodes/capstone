"use client";

import FoodList from "@/app/_components/FoodList";
import { categories } from "@/app/object";
import { useParams } from "next/navigation";

export default function Category() {
  const { slug } = useParams();
  return (
    <div className="grid p-4">
      <h1 className="my-3">{slug}</h1>
      <FoodList
        foodList={categories.find((_) => _.content === slug).products}
      />
    </div>
  );
}
