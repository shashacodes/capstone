import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="py-4 mb-[25%]">
      <ul className="flex flex-wrap rounded-md bg-gray-500 gap-8 justify-center max-w-[480px] mx-auto space-x-6 z-50 fixed bottom-0 md:text-xl text-sm">
        <li className="">
          <AiFillHome size={20} /> Home
        </li>
        <Link href="/Fav">
          <li className="">
            <GrFavorite size={20} style={{ color: "red" }} /> Favorite
          </li>
        </Link>
        <Link href="/Wallet">
          <li className="">
            <GiWallet size={25} /> Wallet
          </li>
        </Link>
        <Link href="/Cart">
          <li className="">
            <FiShoppingCart size={20} /> Orders
          </li>
        </Link>
        <Link href="/my-account">
          <li className="">
            <BsPerson size={25} /> Profile
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
