"use client";
// import React, { useState } from "react";
// import { BiMessageSquareAdd } from "react-icons/bi";
// import { useCart } from "./Cart";
// import Link from "next/link";

// const Button = ({ item }) => {
//   const [amount, setAmount] = useState("add to cart");
//   const { addToCart } = useCart([]);

//   const handleAddToCart = () => {
//     addToCart(item);
//     setAmount("added");
//   };

//   return (
//     <div>
//       <Link href="/Cart">
//         <span className="flex space-x-2 border ml-6 border-[#626260] rounded-md bg-transparent cursor-pointer">
//           <BiMessageSquareAdd
//             size={20}
//             color="green"
//             onClick={handleAddToCart}
//           />
//           <p>{amount}</p>
//         </span>
//       </Link>
//     </div>
//   );
// };

// export default Button;
import React, { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useCart } from "./Cart";

const Button = ({ item }) => {
  const [amount, setAmount] = useState("add to cart");
  const { addToCart } = useCart([]);

  const handleAddToCart = () => {
    addToCart(item);
    setAmount("added");
  };

  return (
    <div>
      {amount === "added" ? (
        <a
          href="/Cart"
          className="flex space-x-2 border ml-6 border-[#626260] rounded-md bg-transparent cursor-pointer"
        >
          <BiMessageSquareAdd size={20} color="green" />
          <p>{amount}</p>
        </a>
      ) : (
        <span
          className="flex space-x-2 border ml-6 border-[#626260] rounded-md bg-transparent cursor-pointer"
          onClick={handleAddToCart}
        >
          <BiMessageSquareAdd size={20} color="green" />
          <p>{amount}</p>
        </span>
      )}
    </div>
  );
};

export default Button;
