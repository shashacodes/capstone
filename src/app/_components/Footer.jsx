import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="mb-[25%] max-w-[480px]">
      <ul className="flex justify-between mr-6 md:mr-8 gap-8 border space-x-6  rounded-md bg-gray-500  z-50 fixed bottom-0 md:text-xl text-sm">
        <li>
          <AiFillHome size={20} /> Home
        </li>
        <Link href="/Fav">
          <li>
            <GrFavorite size={20} style={{ color: "red" }} /> Favorite
          </li>
        </Link>
        <Link href="/Wallet">
          <li className="">
            <GiWallet size={25} /> Wallet
          </li>
        </Link>
        <Link href="/Cart">
          <li>
            <FiShoppingCart size={20} /> Orders
          </li>
        </Link>
        <Link href="/my-account">
          <li className="mr-4 md:mr-8">
            <BsPerson size={25} /> Profile
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
