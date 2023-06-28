"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { BiMessageSquareAdd } from "react-icons/bi";

const popular = [
  {
    name: "Carrots",
    id: 1,
    price: "₦600/kg",
    category: "vegetables",
    image: "/carrot.png",
    image2: "/35.png",
  },
  {
    name: "Broccoli",
    id: 2,
    price: "₦900/kg",
    category: "vegetables",
    image: "/broccoli.jpg",
    image2: "/20.png",
  },
  {
    name: "Tomatoes",
    id: 3,
    price: "₦500/kg",
    category: "vegetables",
    image: "/tomatoes.jpg",
    image2: "/10.png",
  },
  {
    name: "Apples",
    id: 4,
    price: "₦250/kg",
    category: "fruits",
    image: "/apple.jpg",
    media: "/20.png",
  },
  {
    name: "Bananas",
    id: 5,
    price: "₦700/kg",
    category: "fruits",
    image: "/banana.jpg",
    media: "/35.png",
  },
];
export default function Slider() {
  const [amount, setAmount] = useState(0);
  const data = popular.map((pop) => (
    <SwiperSlide
      key={pop.id}
      className="h-52 border border-[#626260] rounded-md text-base"
    >
      <div className="border rounded-md border-[#626260] ">
        <Image src={pop.image} alt="pics" width={1000} height={-1} />
      </div>
      <section>
        {pop.name}
        <section className="flex gap-3">
          <p> {pop.price}</p>
          <BiMessageSquareAdd
            size={20}
            color="green"
            onClick={() => setAmount(amount + 1)}
          />
          <p>{amount}</p>
        </section>
      </section>
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
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
