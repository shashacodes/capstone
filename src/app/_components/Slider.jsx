"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { BiMessageSquareAdd } from "react-icons/bi";
import Button from "./Button";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import Fav from "./Favorite";

const popular = [
  {
    name: "Carrots",
    id: 1,
    price: "600",
    quantity: 1,
    category: "vegetables",
    image: "/carrot.png",
    image2: "/35.png",
  },
  {
    name: "Broccoli",
    id: 2,
    price: "900",
    quantity: 1,
    category: "vegetables",
    image: "/broccoli.png",
    image2: "/20.png",
  },
  {
    name: "Tomatoes",
    id: 3,
    price: "500",
    quantity: 1,
    category: "vegetables",
    image: "/tomatoes.jpg",
    image2: "/10.png",
  },
  {
    name: "Apples",
    id: 4,
    price: "250",
    quantity: 1,
    category: "fruits",
    image: "/apple.jpg",
    image2: "/20.png",
  },
  {
    name: "Bananas",
    id: 5,
    price: "700",
    quantity: 1,
    category: "fruits",
    image: "/banana.png",
    image2: "/35.png",
  },
];

export default function Slider() {
  const data = popular.map((pop) => (
    <SwiperSlide key={pop.id} className="space-x-10 p-4 h-full text-base mt-3">
      <div className="border space-x-10 w-[150px] border-[#E6F7F0] bg-[#E6F7F0] shadow-xl shadow-[#262620] text-black gap-10 hover:scale-105 transition-all duration-300 h-full">
        <div className="mb-4 border-b-[#626260] h-full">
          <span className="flex justify-between mt-1">
            <Image
              className="mr-3"
              alt="pic"
              src={pop.image2}
              width={70}
              height={20}
            />
            <Fav id={pop} />
          </span>
          <Image src={pop.image} alt="pics" width={800} height={-1} />
        </div>
        <section className="w-15">
          <section>
            <p>{pop.name}</p>
            <p className="mr-6">₦ {pop.price} /kg</p>
          </section>
          <Button item={pop} />
        </section>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="mb-4"
      modules={[Pagination, Navigation, Autoplay, Scrollbar]}
      spaceBetween={70}
      slidesPerView={2}
      autoplay={{ delay: 3000 }}
      loop
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div>{data}</div>
    </Swiper>
  );
}
