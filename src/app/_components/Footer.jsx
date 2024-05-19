import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { IoMdHeart } from "react-icons/io";
import { TfiWallet } from "react-icons/tfi";

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    setActiveIcon(window.location.pathname);
  }, []);

  const handleIconClick = (path) => {
    setActiveIcon(path);
  };

  return (
    <footer className=" w-full">
      <ul className="flex justify-between  w-full  gap-8 border text-white rounded-md bg-[#01Ac66] z-50 fixed bottom-0 md:text-xl text-sm">
        <li
          className={`hover:translate-x-2 ${
            activeIcon === "/" ? "text-green-400" : ""
          }`}
          onClick={() => handleIconClick("/")}
        >
          {activeIcon === "/" ? (
            <AiFillHome size={20} />
          ) : (
            <AiOutlineHome size={20} />
          )}
          <span className="text-center">Home</span>
        </li>
        <Link href="/Fav">
          <li
            className={`hover:translate-x-2 ${
              activeIcon === "/Fav" ? "text-green-400" : ""
            }`}
            onClick={() => handleIconClick("/Fav")}
          >
            {activeIcon === "/Fav" ? (
              <GrFavorite size={20} style={{ color: "white" }} />
            ) : (
              <IoMdHeart size={20} style={{ color: "white" }} />
            )}
            <span>Favorite</span>
          </li>
        </Link>
        <Link href="/Wallet">
          <li
            className={`hover:translate-x-2 ${
              activeIcon === "/Wallet" ? "text-green-400" : ""
            }`}
            onClick={() => handleIconClick("/Wallet")}
          >
            {activeIcon === "/Wallet" ? (
              <GiWallet size={25} />
            ) : (
              <TfiWallet size={25} />
            )}
            <span>Wallet</span>
          </li>
        </Link>
        <Link href="/Cart">
          <li
            className={`hover:translate-x-2 ${
              activeIcon === "/Cart" ? "text-green-400" : ""
            }`}
            onClick={() => handleIconClick("/Cart")}
          >
            <FiShoppingCart size={20} className="ml-2" />
            <span>Orders</span>
          </li>
        </Link>
        <Link href="/my-account">
          <li
            className={`mr-4 md:mr-8 hover:translate-x-2 ${
              activeIcon === "/my-account" ? "text-green-400" : ""
            }`}
            onClick={() => handleIconClick("/my-account")}
          >
            <BsPerson size={25} className="ml-2" />
            <span>Profile</span>
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
