"use client";

import { useEffect, useState } from "react";
import CartItemList from "@/app/components/cart/CartItemList";
import CartTotals from "@/app/components/cart/CartTotals";

export default function CartPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    // console.log(userId);

    if (!userId) {
      setItems([]);
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/api/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-lg">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <CartItemList items={items} />
      <CartTotals items={items} />
    </div>
  );
}
