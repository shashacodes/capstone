"use client";
import React, { useState } from "react";
import Image from "next/image";
import pics from "./favicon.ico";
import pic from "./media/basket.png";
import { TiLocation } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { TbHelpHexagon } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { GiStarFormation } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineWorkHistory } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { GiChoice } from "react-icons/gi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FoodItem from "./_components/FoodItem";
import { cater } from "/src/app/object";
import { categories, foods, items } from "./object";
import FoodList from "./_components/FoodList";
import PopularItems from "./popular-items/page";
import FoodStuff from "./_components/FoodStuff";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    return Menu;
  };
  const FoodItem = () => {
    return FoodItem;
  };

  const [searchValue, setSearchValue] = useState("");
  const [filteredResult, setFilterResult] = useState([]);

  const text = (e) => {
    setSearchValue(e);
    console.log(searchValue);

    if (searchValue !== "") {
      const filteredData = categories.product.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      console.log(filteredData);
      setFilterResult(filteredData);
    } else {
      setFilterResult(categories);
      console.log("not found");
    }
  };
  return (
    <div className="text-[20px] mt-3">
      <div className="flex flex-col-1 justify-between ml-6 mr-6">
        <div>
          <span onClick={handleMenu} className="sm:hidden cursor-pointer ">
            <BsFilterLeft size={40} />
          </span>{" "}
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-black p-10 ease-in overflow-auto "
                : "fixed left-[-100%] top-0 p-10 ease-in h-screen overflow-auto"
            }
          >
            <div className="flex w-full items-center justify-end">
              <span onClick={handleMenu} className="cursor-pointer pl-24">
                <AiOutlineCloseCircle size={30} />
              </span>
            </div>
            <div>
              <Image
                width={200}
                height={250}
                src={pics}
                alt="icon"
                className="border rounded-full mr-4 "
              />
              <div className="flex-col mt-8 bg-black text-white">
                <h1 className="gap-5 text-2xl font-bold mb-5">
                  Welcome Sharon!
                </h1>
                <ul className="gap-6 pb-5 md:text-2xl text-lg cursor-pointer ">
                  <li className="flex gap-5 mt-8 ">
                    <span>
                      {" "}
                      <GiChoice size={30} />{" "}
                    </span>
                    Your Last Choice
                  </li>
                  <Link href="/Offers">
                    <li className="flex gap-5 mt-8">
                      <span>
                        {" "}
                        <MdLocalOffer size={30} />{" "}
                      </span>
                      Offers & Promotions
                    </li>{" "}
                  </Link>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <MdOutlineWorkHistory size={30} />{" "}
                    </span>
                    Order History
                  </li>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <IoIosPeople size={30} />{" "}
                    </span>
                    Refer & Earn
                  </li>
                  <Link href="/Contact-us">
                    <li className="flex gap-5 mt-8">
                      <span>
                        {" "}
                        <FiPhoneCall size={30} />{" "}
                      </span>
                      Contact Us
                    </li>
                  </Link>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <TbHelpHexagon size={30} />{" "}
                    </span>
                    Help Center
                  </li>
                  <li className="flex gap-5 mt-8">
                    <span>
                      {" "}
                      <GiStarFormation size={30} />{" "}
                    </span>
                    Rate Us
                  </li>
                  <Link href="/About">
                    <li className="flex gap-5 mt-8">
                      {" "}
                      <span>
                        {" "}
                        <FcAbout size={30} />{" "}
                      </span>
                      About Us{" "}
                    </li>{" "}
                  </Link>
                  <li className="flex gap-5 mt-8">
                    <span className="">
                      {" "}
                      <FiLogOut size={30} />{" "}
                    </span>
                    Log Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="ml-[20%] bg-[#3D3D37] text-black">
          <h1 className="ml-[15%] text-white">Location</h1>
          <span className="flex space-x-3">
            <TiLocation size={20} />
            <select name="usa" id="" className="bg-transparent">
              <option value="Nigeria">Nigeria,Lagos</option>
              <option value="Australia">Australia, Sydney</option>
              <option value="Dubai">UAE, Dubai</option>
              <option value="Europe">Europe, Italy</option>
              <option value="paris">France,Paris</option>
              <option value="Asia">Asia, South-Korea</option>
            </select>
          </span>
        </section>
        <span className="mr-5 p-2">
          <BsFillBellFill size={30} style={{ color: "white" }} />
        </span>
      </div>
      <div className="border rounded-2xl justify-between  mx-auto p-4 flex">
        <BsSearch size={20} className="mr-3" />
        <input
          type="text"
          name=""
          id=""
          placeholder="search food, drink, etc"
          className="text-xl bg-[#3D3D37]"
          onChange={(e) => text(e.target.value)}
        />
        <span className="">
          <LuSettings2 size={25} style={{ color: "white" }} />
        </span>
      </div>
      <div className="border rounded-lg">
        <div className="ml-6 mr-6 mt-10">
          <section className="flex justify-between">
            <h1>Categories</h1>
            <Link href="/categories">
              <p>see all</p>{" "}
            </Link>
          </section>
          <div className=" gap-3 md:max-w-[640px] max-w-[480px]">
            <div className="flex gap-4">
              {categories.slice(0, 4).map((cat) => {
                return (
                  <Link key={cat.id} href={`/categories/${cat.content}`}>
                    <div className="flex flex-col ">
                      <Image
                        alt="Product Image"
                        width={400}
                        height={100}
                        style={{ objectFit: "cover" }}
                        src={cat.imageUrl}
                        className={`border rounded-md`}
                      />
                      <p> {cat.name} </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="ml-6 mr-6 mt-10">
            <section className="flex justify-between ">
              <h1>Deals</h1>
              <p>see all</p>
            </section>
            <div className="grid grid-cols-2 mr-6 ml-6 border md:w-[500px] w-[300px] bg-white text-black  h-[200px] rounded-xl ">
              <h2 className="md:text-xl text-sm font-bold mx-10 mb-5 pt-5">
                50% off <br />
                On Grocery Combo packs
              </h2>
              <aside className="ml-[50%] grid-cols-1 my-6">
                <Image
                  className=""
                  src={pic}
                  alt="food"
                  width={120}
                  height={100}
                />{" "}
              </aside>
              <button className="border w-[120px] h-[40px] mx-7 bg-green-500 rounded-lg mb-10 ">
                order now
              </button>
            </div>
          </div>

          <div className="ml-6 mr-6 mt-10">
            <section className="flex justify-between text-xl mt-5">
              <h1>Popular Items</h1>
              <Link href="/popular-items">
                <p>see all</p>
              </Link>
            </section>
            <div className="grid grid-cols-3 gap-4 mt-3 ">
              {items.map((item) => {
                return (
                  <div key={items.id}>
                    <div className="border border-sky-200 rounded-md shadow-xl shadow-sky-200 ">
                      <span className="flex justify-between">
                        <Image
                          src={item.image2}
                          alt="img"
                          width={80}
                          height={20}
                          className="mt-3"
                        />
                        <MdFavoriteBorder
                          className="mt-5"
                          style={{ color: "white" }}
                        />
                      </span>
                      <section>
                        <Image
                          src={item.image}
                          width={1000}
                          height={-1}
                          alt="images"
                          className="border rounded-lg"
                        />
                      </section>
                      <section className=" border-t-black p-2 pt-5 md:text-xl text-sm">
                        <p> {item.name}</p>
                        <div className="flex">
                          <p> {item.price}</p>
                          <BiMessageSquareAdd
                            size={20}
                            color="green"
                            onClick={() => setAmount(amount + 1)}
                          />
                          <p>{amount}</p>
                        </div>
                      </section>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <footer className="ml-6 mr-6 mt-10">
          <div className="flex justify-between md:text-xl text-sm">
            <span className="gap-1 ">
              <AiFillHome size={20} /> Home
            </span>
            <span className=" gap-1">
              <GrFavorite size={20} style={{ color: "white" }} /> Favorite
            </span>
            <Link href="/Wallet">
              <span className=" gap-1">
                <GiWallet size={25} /> Wallet
              </span>
            </Link>
            <span className="gap-1">
              <FiShoppingCart size={20} /> Cart
            </span>
            <Link href="/my-account">
              <span className=" gap-1">
                <BsPerson size={25} /> Profile
              </span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Menu;
