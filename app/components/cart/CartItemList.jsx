"use client";

import { useEffect, useState } from "react";

export default function CartItemList({ items }) {
  const [data, setData] = useState(items);
  const [userId, setUserId] = useState(null);

  // Get userId from localStorage (client-side only)
  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  // If new data received update state
  useEffect(() => {
    setData(items);
  }, [items]);

  // If cart empty
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-600 text-xl font-medium">
        Your cart is empty 😊
      </div>
    );
  }

  // Increment Quantity
  async function increment(itemId) {
    await fetch(`/api/cart/${userId}/increment`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId }),
    });

    setData(prev =>
      prev.map(c =>
        c.itemId._id === itemId ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  }

  // Decrement Quantity
  async function decrement(itemId) {
    await fetch(`/api/cart/${userId}/decrement`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId }),
    });

    setData(prev =>
      prev
        .map(c =>
          c.itemId._id === itemId
            ? { ...c, quantity: c.quantity - 1 }
            : c
        )
        .filter(c => c.quantity > 0)
    );
  }

  return (
    <div className="space-y-4">
      {data.map(c => (
        <div key={c.itemId._id} className="flex justify-between items-center bg-white shadow p-4 rounded">

          {/* Image */}
          <img
            src={c.itemId.image}
            alt={c.itemId.name}
            className="w-20 h-20 object-cover rounded"
          />

          {/* Item Details */}
          <div className="flex-1 px-4">
            <h2 className="text-xl font-semibold">{c.itemId.name}</h2>
            <p className="text-gray-600">₹{c.itemId.price}</p>
          </div>

          {/* Quantity Buttons */}
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-300 px-3 rounded text-xl"
              onClick={() => decrement(c.itemId._id)}
            >-</button>

            <span className="text-xl font-bold">{c.quantity}</span>

            <button
              className="bg-gray-300 px-3 rounded text-xl"
              onClick={() => increment(c.itemId._id)}
            >+</button>
          </div>

        </div>
      ))}
    </div>
  );
}
