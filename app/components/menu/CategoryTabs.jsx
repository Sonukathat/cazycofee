"use client";
import { useState } from "react";
import ItemsList from "./ItemsList";

export default function CategoryTabs({ categories, items }) {
  const [activeCat, setActiveCat] = useState("All");

  const filteredItems =
    activeCat === "All"
      ? items
      : items.filter((item) => item.categoryId?.name === activeCat);

  return (
    <div>
      {/* Buttons */}
      <div className="flex justify-center gap-3 mb-5 flex-wrap">
        <button
          onClick={() => setActiveCat("All")}
          className={`px-4 py-2 rounded ${activeCat === "All" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setActiveCat(cat.name)}
            className={`px-4 py-2 rounded ${
              activeCat === cat.name ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Show Items */}
      <ItemsList items={filteredItems} />
    </div>
  );
}
