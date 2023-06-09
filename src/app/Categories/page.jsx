import Image from "next/image";
import React from "react";

async function fetchfood() {
  const response = fetch(
    "https://raw.githubusercontent.com/shashacodes/capstone/master/src/app/object.json"
  );
  const data = await (await response).json();
  return data;
}

export default async function Page() {
  const data2 = await fetchfood();
  const items = [
    {
      id: 1,
      name: "Apple",
      price: 0.99,
      image:
        "https://github.com/shashacodes/capstone/commit/4c2b9354a008b8e80af7249bf1baa0da08c29bd2?short_path=e001308#diff-e001308f53d7672f9fce64ce18c6234604a476a80c695e0df0ba0b29445ea825",
    },
    {
      id: 2,
      name: "Banana",
      price: 0.79,
      image:
        "https://github.com/shashacodes/capstone/commit/4c2b9354a008b8e80af7249bf1baa0da08c29bd2?short_path=6318d16#diff-6318d16da26cf3cadaebbdae7554410b91640922c14976d999dbf97b323d28fb",
    },
  ];

  const itemList = items.map((item) => (
    <div
      className="grid grid-cols-2 border rounded-xl border-transparent gap-8 p-5"
      key={item.id}
    >
      {" "}
      <section>
        <h3 className="p-8 border rounded-xl">
          {item.name},{item.price}
        </h3>
        <Image src={item.image} alt="apple" width={200} height={100} />
      </section>
    </div>
  ));

  // const foodlist = data2.foods.map((foods) => (
  //   <div
  //     key={foods.id}
  //     className="grid grid-cols-2 border rounded-xl border-transparent gap-8 p-5"
  //   >
  //     <h1 className="p-8 border rounded-xl bg-slate-500"></h1>
  //     <h1 className="bg-slate-400 p-8 border rounded-xl"></h1>
  //     <h1 className="bg-slate-300 p-8 border rounded-xl"></h1>
  //   </div>
  // ));

  return <div>{itemList}</div>;
}
