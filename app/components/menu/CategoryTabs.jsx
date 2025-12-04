"use client";
import { useApp } from "@/context/AppContext";

export default function CategoryTabs({ selected, onSelect }) {
  const { categories } = useApp();

  if (!categories.length) return null;

  return (
    <div className="flex gap-3 flex-wrap justify-center mb-8">
      <button
        onClick={() => onSelect("All")}
        className={`px-4 py-2 rounded-full font-medium ${
          selected === "All"
            ? "bg-[#4A2C2A] text-white"
            : "bg-white text-[#4A2C2A] border"
        }`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c._id}
          onClick={() => onSelect(c.name)}
          className={`px-4 py-2 rounded-full font-medium ${
            selected === c.name
              ? "bg-[#4A2C2A] text-white"
              : "bg-white text-[#4A2C2A] border"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
