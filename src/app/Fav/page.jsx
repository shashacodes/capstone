"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Fav from "../_components/Favorite";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Page() {
  const [isFavorite, setIsFavorite] = useState([]);

  const handleClick = (id) => {
    const selectedItem = isFavorite.find((item) => item.id === id);
    if (selectedItem) {
      setIsFavorite((prevState) => [...prevState, selectedItem]);
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(isFavorite));
  }, [isFavorite]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("myData"); // Remove the "myData" item from local storage
    }
  }, []);
  const removeItem = (item) => {
    const updatedFavorites = isFavorite.filter(
      (favItem) => favItem.id !== item.id
    );
    setIsFavorite(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-3">
      <Link href="/">
        <span className="border rounded-lg bg-slate-200 w-[30px]">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <ul className="grid grid-cols-2 ml-8">
        {isFavorite.map((item, index) => (
          <div key={item.id}>
            <Image src={item.image} width={150} height={100} alt="images" />

            <li>{item.name}</li>
            <li>{item.price}</li>
            <button
              className="bg-red-500 hover:bg-red-700 rounded-lg p-2 mt-2"
              onClick={() => removeItem(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
      {/* <Fav /> */}
      <Link href="/">
        <button className="bg-green-500 hover:bg-green-700 rounded-lg p-2">
          Back Home
        </button>
      </Link>
    </div>
  );
}
