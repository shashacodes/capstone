import React from "react";
import { FcAbout } from "react-icons/fc";
import { TbHelpHexagon } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { GiStarFormation } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { GiChoice } from "react-icons/gi";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-6">
      <h1 className="gap-5 text-3xl font-bold mb-5">Welcome Sharon!</h1>
      <div className="gap-6 text-2xl ">
        <section className="">
          <h2 className="flex gap-6 mb-5">
            <span>
              {" "}
              <GiChoice size={30} />{" "}
            </span>
            Your Last Choice
          </h2>
        </section>
        <Link href="/Offers">
          <section className="">
            <h2 className="flex gap-6 mb-5">
              <span>
                {" "}
                <MdLocalOffer size={30} />{" "}
              </span>
              Offers & Promotions
            </h2>
          </section>{" "}
        </Link>
        <section className="">
          <h2 className="flex gap-6 mb-5">
            <span>
              {" "}
              <MdOutlineWorkHistory size={30} />{" "}
            </span>
            Order History
          </h2>
        </section>
        <section className="">
          <h2 className="flex gap-6 mb-5">
            <span>
              {" "}
              <IoIosPeople size={30} />{" "}
            </span>
            Refer & Earn
          </h2>
        </section>
        <section className="">
          <Link href="/Contact-us">
            <h2 className="flex gap-6 mb-5">
              <span>
                {" "}
                <FiPhoneCall size={30} />{" "}
              </span>
              Contact Us
            </h2>{" "}
          </Link>
        </section>
        <section className="">
          <h2 className="flex gap-6 mb-5">
            <span>
              {" "}
              <TbHelpHexagon size={30} />{" "}
            </span>
            Help Center
          </h2>
        </section>
        <section className="">
          <h2 className="flex gap-6 mb-5">
            <span>
              {" "}
              <GiStarFormation size={30} />{" "}
            </span>
            Rate Us
          </h2>
        </section>
        <Link href="/About">
          <section className="">
            <h2 className="flex gap-6 mb-5">
              {" "}
              <span>
                {" "}
                <FcAbout size={30} />{" "}
              </span>
              About Us{" "}
            </h2>
          </section>{" "}
        </Link>
        <section className="">
          <h2 className="flex gap-6 mb-5">
            <span className="">
              {" "}
              <FiLogOut size={30} />{" "}
            </span>
            Log Out
          </h2>
        </section>
      </div>
    </div>
  );
}
