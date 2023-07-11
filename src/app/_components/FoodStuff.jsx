"use client";
import Image from "next/image";
import { items } from "../object";
import Button from "./Button";
import { MdFavoriteBorder } from "react-icons/md";
import Fav from "./Favorite";

const FoodStuff = ({ item }) => {
  return (
    <div className=" grid grid-cols-3 gap-5 border border-[#626260] mr-5  rounded-md ">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-[#626260] rounded-md shadow-xl shadow-[#5d5d57]"
        >
          <div>
            <span className="flex justify-between">
              <Image
                className="mr-3"
                alt="pic"
                src={item.image2}
                width={70}
                height={20}
              />
              {/* <MdFavoriteBorder className="mt-4" /> */}
              <Fav />
            </span>
            <Image
              src={item.image}
              width={1000}
              height={-1}
              style={{ objectFit: "cover" }}
              alt={item.name}
              className="border rounded-xl "
            />
          </div>
          <section className="border-t-black pt-5 md:text-xl text-sm">
            <p> {item.name}</p>
            <span className="flex">
              <p>₦ {item.price} /kg</p>
              <Button />
            </span>
          </section>
        </div>
      ))}
    </div>
  );
};

export default FoodStuff;
