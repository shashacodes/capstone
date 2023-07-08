import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="p-4 px-3 py-4 ">
      <Image
        src="/favicon.ico"
        width={100}
        height={100}
        alt="image"
        className="rounded-xl mx-auto mt-4"
      />
      <h2 className="mt-3 font-extrabold text-xl mb-4">
        At sharon's groceries, we offer:
      </h2>
      <p className="mb-4">
        <span className="font-bold">
          1. Seasonal Sale: <br />
        </span>
        Enjoy exclusive discounts and deals on a wide range of seasonal
        products! From fresh produce to pantry staples, shop now and save big on
        all your favorite items.
      </p>
      <p className="mb-4">
        <span className="font-bold">
          2. New Customer Welcome Offer:
          <br />
        </span>
        Sign up for Sharon's Grocery app and get a special discount on your
        first order! Experience the convenience of online grocery shopping with
        extra savings just for you.
      </p>
      <p className="mb-4">
        <span className="font-bold">
          3. Weekly Specials: <br />
        </span>
        Discover our weekly specials featuring discounted prices on select
        items. Check back regularly to find amazing deals and stock up on
        essentials for less.
      </p>
      <p className="mb-4">
        <span className="font-bold">
          4. Loyalty Rewards Program:
          <br />
        </span>
        Join our loyalty rewards program and earn points for every purchase.
        Redeem your points for discounts, freebies, or even exclusive offers.
        The more you shop, the more you save!
      </p>
      <p className="mb-4">
        <span className="font-bold">
          5. Free Delivery:
          <br />
        </span>
        Enjoy the convenience of free delivery right to your doorstep. No
        minimum order required! Sit back, relax, and let us take care of
        delivering your groceries to you.
      </p>
      <p className="mb-4">
        <span className="font-bold">
          6.Bundle Offers: <br />
        </span>
        Save time and money with our bundle offers. Get curated bundles of
        popular products at discounted prices, perfect for busy individuals or
        families looking for convenience and savings.
      </p>
      <p className="mb-4">
        <span className="font-bold">
          7. Flash Sales: <br />
        </span>
        Stay tuned for our exciting flash sales where you can snag incredible
        deals on limited-time offers. Act fast and grab these discounts before
        they're gone!
      </p>
      <p className="mb-4">
        <span className="font-bold">8. Refer a Friend:</span>
        <br />
        Spread the word about Sharon's Groceries and earn rewards! Refer a
        friend to sign up and make a purchase, and you both receive special
        rewards or discounts as a thank you.
      </p>
    </div>
  );
}
