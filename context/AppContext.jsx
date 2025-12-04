"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);

  async function loadCategories() {
    try {
      const res = await fetch("/api/category");
      const data = await res.json();
      setCategories(data);
    } catch {
      setCategories([]);
    }
  }

  async function loadItems() {
    try {
      const res = await fetch("/api/items");
      const data = await res.json();
      setAllItems(data);
    } catch {
      setAllItems([]);
    }
  }

  useEffect(() => {
    loadCategories();
    loadItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories,
        allItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
