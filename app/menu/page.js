"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import CategoryTabs from "@/app/components/menu/CategoryTabs";
import ItemsGrid from "@/app/components/menu/ItemsGrid";

export default function MenuPage() {
  const { categories, allItems } = useApp();
  const [selected, setSelected] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!allItems.length || !categories.length) return;

    if (selected === "All") {
      setFiltered(allItems);
      return;
    }

    const category = categories.find((c) => c.name === selected);
    if (!category) {
      setFiltered([]);
      return;
    }

    const result = allItems.filter((item) => item.categoryId === category._id);
    setFiltered(result);
  }, [selected, allItems, categories]);

  return (
    <div className="px-6 py-10 min-h-screen bg-[#FFF3E4]">
      <h1 className="text-4xl font-bold text-center text-[#4A2C2A] mb-10">
        Our Menu
      </h1>

      <CategoryTabs selected={selected} onSelect={setSelected} />

      <ItemsGrid items={filtered} />
    </div>
  );
}
