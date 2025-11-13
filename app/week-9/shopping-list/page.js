"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Access denied</h1>
          <p className="text-lg mb-6">
            You must be logged in to view the shopping list.
          </p>
          <Link
            href="/week-9"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Go to the login page
          </Link>
        </div>
      </main>
    );
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    const itemWithId = {
      id: Math.random().toString(36).substring(2, 9),
      ...newItem,
    };
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  const cleanItemName = (name) => {
    return name
      .replace(/[^\p{L}\p{N}\s]/gu, "") 
      .replace(/\d+(\s*(kg|g|l|ml|pack|packs|dozen))?/gi, "") 
      .split(",")[0] 
      .trim()
      .toLowerCase();
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col md:flex-row justify-center items-start gap-10 py-10 px-4">
      {/* Left: Shopping List + Form */}
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Shopping List + Meal Ideas
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <div className="mt-8">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>

      {/* Right: Meal Ideas */}
      <div className="w-full max-w-md">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
