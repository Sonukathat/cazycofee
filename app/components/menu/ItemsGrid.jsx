"use client";

import ItemCard from "./ItemCard";

export default function ItemsGrid({ items }) {
  if (!items.length)
    return <p className="text-center text-gray-500">No items found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
