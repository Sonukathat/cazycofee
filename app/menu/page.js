"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";

import CategoryTabs from "../components/menu/CategoryTabs";
import SearchBar from "../components/menu/SearchBar";
import ItemsGrid from "../components/menu/ItemsGrid";
import CartSidebar from "../components/menu/CartSidebar";

export default function MenuPage() {
  const { categories, allItems } = useApp();

  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    let data = [...allItems];

    if (selected !== "All") {
      data = data.filter((i) => i.categoryName === selected);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((i) => i.name.toLowerCase().includes(q));
    }

    setFiltered(data);
  }, [selected, search, allItems]);

  return (
    <div className="w-full min-h-screen bg-[#FFF3E4] px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#4A2C2A]">Our Menu</h1>
        <p className="text-gray-600 mt-2">Choose your favorite items</p>
      </div>

      <CategoryTabs selected={selected} onSelect={setSelected} />
      <SearchBar search={search} setSearch={setSearch} />

      <div className="flex gap-6">
          <ItemsGrid items={filtered} />
      </div>
    </div>
  );
}
