"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    const itemWithId = {
      id: Math.random().toString(36).substring(2, 9),
      name: newItem.name,
      quantity: newItem.quantity,
      category: newItem.category,
    };
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Shopping List
        </h1>

        {/* NewItem form */}
        <NewItem onAddItem={handleAddItem} />

        {/* Item list below */}
        <div className="mt-8">
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}
