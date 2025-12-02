"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Load Data From Backend
  useEffect(() => {
    fetchCategories();
    fetchAllItems();
    loadCart();
  }, []);

  async function fetchCategories() {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(data);
  }

  async function fetchAllItems() {
    const res = await fetch("/api/items");
    const data = await res.json();
    setAllItems(data);
  }

  function loadCart() {
    const c = localStorage.getItem("cafe_cart");
    setCart(c ? JSON.parse(c) : []);
  }

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
    } else {
      saveCart([...cart, { ...item, qty: 1 }]);
    }
  }

  return (
    <AppContext.Provider
      value={{
        categories,
        allItems,
        cart,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
