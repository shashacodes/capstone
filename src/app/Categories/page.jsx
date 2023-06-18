import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="p-5 gap-10 md:max-w-[640px] max-w-[480px] md:ml-3 mr-[40%]">
      <Link href="/">
        <span className="">
          <MdArrowBackIosNew size={20} />
        </span>
      </Link>
      {/* <div>{foodlist}</div> */}
      <div className="grid grid-cols-3 gap-20 p-10">
        <div className="flex flex-col ">
          <section className="md:p-10 p-8  border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/vegg.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p> vegetables </p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/fruits.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p>Fruits</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/milk&eggs.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p className=""> Milk&Eggs </p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/drinks.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p> Drinks </p>
        </div>
        <div className="flex flex-col">
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/cakes.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p> Cakes </p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/icecream.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p>Ice Cream</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/bakery.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p> Bakery </p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/snacks.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p>Snacks</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/grains.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p>Grains</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/cheese.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p>Cheese</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/cleaning.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p> Cleaning Stuffs </p>
        </div>
        <div className="flex flex-col">
          {" "}
          <section className="md:p-10 p-8 border rounded-xl bg-[url('https://github.com/shashacodes/capstone/blob/master/src/app/media/biscuit.jpg?raw=true')]">
            <h1 className="p-5"> </h1>
          </section>
          <p> Biscuits </p>
        </div>
      </div>
    </div>
  );
}
