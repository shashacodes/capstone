"use client";
import Keep from "@/app/_components/KeepFood";
import { categories } from "../../object";
import { useParams } from "next/navigation";
import FoodList from "@/app/_components/FoodList";

export default function Category() {
  const { slug } = useParams();
  return (
    <div className="grid p-4">
      <h1 className="my-3">{slug}</h1>
      <Keep food={categories.find((_) => _.slug === slug)} />
    </div>
  );
}
