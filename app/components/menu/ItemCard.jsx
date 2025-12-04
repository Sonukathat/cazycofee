"use client";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold text-[#4A2C2A]">
        {item.name}
      </h3>

      <p className="text-sm text-gray-600">{item.description}</p>

      <p className="mt-2 text-xl font-bold text-[#4A2C2A]">
        ₹{item.price}
      </p>
    </div>
  );
}
