import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="p-4 py-6 px-6">
      <span className="mt-5">
        <Image
          src="/favicon.ico"
          width={100}
          height={100}
          alt="fav"
          className="rounded-full animate-pulse"
        />
        <h1 className="text-xl font-bold">Welcome to Sharon's Groceries!</h1>
      </span>

      <p className="p-6 py-5 px-5">
        At Sharon's Groceries, we are dedicated to providing you with a
        convenient and seamless grocery shopping experience.
        <strong className="text-green-500">
          Our app is designed to make your grocery shopping easier, faster, and
          more enjoyable. We understand the importance of quality, freshness,
          and variety when it comes to your groceries.
        </strong>
        That's why we have partnered with trusted local suppliers and farmers to
        bring you the finest selection of fruits, vegetables, dairy products,
        baked goods, snacks, and more. With our user-friendly interface and
        intuitive features, you can browse through our extensive catalog, search
        for specific items, and discover new products that meet your
        preferences. You can easily add items to your cart, manage your shopping
        list, and even save your favorite items for future purchases. We
        prioritize the convenience of our customers, which is why we offer
        flexible delivery options right to your doorstep. <br />
        Say goodbye to long queues and heavy grocery bags - let us handle the
        logistics while you enjoy more time for the things that matter most.
        Your satisfaction is our top priority, and we strive to provide
        exceptional customer service at every step. Our dedicated support team
        is available to assist you with any inquiries, concerns, or feedback you
        may have. We value your input and continuously work to enhance our app
        based on your needs and preferences.
        <strong className="text-green-500">
          Thank you for choosing Sharon's Groceries as your go-to grocery
          shopping solution. We are committed to helping you make grocery
          shopping convenient, efficient, and enjoyable. Happy shopping!{" "}
          <em>The Sharon's Groceries Team</em>
        </strong>
      </p>
    </div>
  );
}
