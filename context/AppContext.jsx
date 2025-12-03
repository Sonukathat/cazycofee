"use client";

import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchAllItems();
  }, []);

  async function fetchCategories() {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(Array.isArray(data) ? data : []);
  }

  async function fetchAllItems() {
    const res = await fetch("/api/items");
    const data = await res.json();
    setAllItems(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    const stored = localStorage.getItem("cafe_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  function saveCart(data) {
    setCart(data);
    localStorage.setItem("cafe_cart", JSON.stringify(data));
  }

  function addToCart(item) {
  const exist = cart.find((i) => i._id === item._id);

  if (exist) {
    const updated = cart.map((i) =>
      i._id === item._id ? { ...i, qty: i.qty + 1 } : i
    );
    saveCart(updated);
    toast.success("Quantity updated");
  } else {
    saveCart([...cart, { ...item, qty: 1 }]);
    toast.success("Item added to cart");
  }
}
  function removeFromCart(id) {
    const updated = cart.filter((i) => i._id !== id);
    saveCart(updated);
  }

  function increaseQty(id) {
    const updated = cart.map((i) =>
      i._id === id ? { ...i, qty: i.qty + 1 } : i
    );
    saveCart(updated);
  }

  function decreaseQty(id) {
    const updated = cart
      .map((i) =>
        i._id === id ? { ...i, qty: i.qty - 1 } : i
      )
      .filter((i) => i.qty > 0);
    saveCart(updated);
  }

  return (
    <AppContext.Provider
      value={{
        categories,
        allItems,
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
