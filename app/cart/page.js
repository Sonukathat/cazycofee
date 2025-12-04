"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function load() {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      const res = await axios.get(`/api/cart/${userId}`);
      setCart(res.data?.items || []);
    }
    load();
  }, []);

  async function removeItem(id) {
    const userId = localStorage.getItem("userId");

    await axios.delete("/api/cart", {
      data: { userId, itemId: id },
    });

    setCart((prev) => prev.filter((i) => i.itemId !== id));
  }

  return (
    <div className="px-6 py-10 mt-20">
      <h1 className="text-3xl font-bold text-[#4A2C2A] mb-6">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      <div className="space-y-4">
        {cart.map((c) => (
          <div key={c.itemId} className="flex justify-between p-4 bg-white shadow rounded-xl">
            <div>
              <h2 className="font-semibold">{c.name}</h2>
              <p>₹{c.price} x {c.qty}</p>
            </div>

            <button
              onClick={() => removeItem(c.itemId)}
              className="text-red-500 font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
