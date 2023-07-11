"use client";
import React from "react";
import { useCart } from "../_components/Cart";

const OrderHistoryPage = () => {
  const { cartItems, calculateTotalPrice } = useCart();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>
      {cartItems.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Item</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.orderId}</td>
                <td className="py-2 px-4 border-b">{item.date}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">₦{item.price}</td>
              </tr>
            ))}
            <tr>
              <td className="py-2 px-4 font-bold">Total</td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4 font-bold">₦{calculateTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistoryPage;
