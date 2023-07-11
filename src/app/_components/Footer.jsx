import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { IoMdHeart } from "react-icons/io";
import { TfiWallet } from "react-icons/tfi";

const Footer = () => {
  const [Mobile, setMobile] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(window.location.pathname === "/Fav");
  }, []);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <footer className="mb-[25%] md:w-[550px] w-full">
      <ul className="flex justify-between md:w-[550px] w-full  md:mr-8 gap-8 border text-white rounded-md bg-[#01Ac66] z-50 fixed bottom-0 md:text-xl text-sm">
        <li className="hover:translate-x-2">
          <AiOutlineHome size={20} onClick={Mobile} />
          <span className="text-center">Home</span>
        </li>
        <Link href="/Fav">
          <li
            className={`hover:translate-x-2 ${
              isFavorite ? "text-red-500" : ""
            }`}
            onClick={handleFavoriteClick}
          >
            <IoMdHeart size={20} style={{ color: "red" }} />
            <span>Favorite</span>
          </li>
        </Link>
        <Link href="/Wallet">
          <li className="hover:translate-x-2">
            <TfiWallet size={25} />
            <span>Wallet</span>
          </li>
        </Link>
        <Link href="/Cart">
          <li className="hover:translate-x-2">
            <FiShoppingCart size={20} className="ml-2" />
            <span>Orders</span>
          </li>
        </Link>
        <Link href="/my-account">
          <li className="mr-4 md:mr-8 hover:translate-x-2">
            <BsPerson size={25} className="ml-2" />
            <span>Profile</span>
          </li>
        </Link>
      </ul>
      {/* {!menuOpen && <Footer />} */}
    </footer>
  );
};

export default Footer;
