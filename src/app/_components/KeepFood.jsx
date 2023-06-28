"use client";
import { categories } from "../object";
import Image from "next/image";

export default function Keep() {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} className="gap-4">
          <h1>{category.name}</h1>
          <div className="grid grid-cols-3 gap-5">
            {category.products.map((product) => (
              <section className="border rounded-md gap-5" key={product.id}>
                <div>
                  <Image
                    src={product.image}
                    alt="pictures"
                    width={100}
                    height={100}
                  />
                </div>
                <p>{product.name}</p>
                <p>{product.description}</p>
              </section>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
