"use client";
import { useApp } from "@/context/AppContext";

export default function ItemCard({ item }) {
  const { addToCart } = useApp();

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img
        src={item.image}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h3 className="font-semibold text-lg text-[#4A2C2A]">{item.name}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 mt-1">
        {item.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="font-medium">₹{item.price}</span>

        <button
          onClick={() => addToCart(item)}
          className="px-4 py-2 bg-[#4A2C2A] text-white rounded-full"
        >
          Add
        </button>
      </div>
    </div>
  );
}
