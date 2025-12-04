"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import CategoryTabs from "../components/menu/CategoryTabs";
import ItemsGrid from "../components/menu/ItemsGrid";

export default function MenuPage() {
  const { categories, allItems } = useApp();
  const [selected, setSelected] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!categories.length || !allItems.length) return;

    if (selected === "All") {
      setFiltered(allItems);
      return;
    }

    const category = categories.find((c) => c.name === selected);
    if (!category) return;

    const result = allItems.filter(
      (i) => i.categoryId === category._id
    );

    setFiltered(result);
  }, [selected, categories, allItems]);

  return (
    <div className="px-6 py-10 mt-20">
      <h1 className="text-4xl font-bold text-center text-[#4A2C2A] mb-8">
        Our Menu
      </h1>

      <CategoryTabs selected={selected} onSelect={setSelected} />

      <ItemsGrid items={filtered} />
    </div>
  );
}
