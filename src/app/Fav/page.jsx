"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "../_components/Button";

export default function Page() {
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    // Add the item to the cart
    // Implement your logic here
    console.log("Added to cart:", item);
  };

  const removeItem = (item) => {
    const updatedFavorites = favorites.filter(
      (favItem) => favItem.id !== item.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <div className="p-3">
      <Link href="/">
        <span className="border rounded-lg w-[30px]">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      <span className="flex justify-between">
        <h2 className="text-2xl font-bold text-center justify-center">
          Fav Items
        </h2>
        <span className="ml-[20%] hover:text">
          <RiDeleteBin5Line
            size={20}
            onClick={clearFavorites}
            title="Clear Fav items?"
          />
        </span>
      </span>
      {favorites.length === 0 ? (
        <p className="text-center">No items in the wishlist.</p>
      ) : (
        <ul className="grid grid-cols-2 rounded-md ml-8 pt-4">
          {favorites.map((item, index) => (
            <div key={item.id} className=" rounded-md bg-white pt-6 p-3 gap-4">
              <Image src={item.image} width={150} height={100} alt="images" />

              <li>{item.name}</li>
              <li>₦{item.price} /kg</li>
              <Button onClick={() => addToCart(item)}>Add to Cart</Button>
              <span
                className=" rounded-md p-2 mt-2"
                onClick={() => removeItem(item)}
              >
                <RiDeleteBin5Line size={20} />
              </span>
            </div>
          ))}
        </ul>
      )}

      <Link href="/">
        <button className="bg-green-500 hover:bg-green-700 rounded-lg p-2">
          Back Home
        </button>
      </Link>
    </div>
  );
}
