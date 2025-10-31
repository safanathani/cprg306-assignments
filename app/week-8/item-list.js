"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByCategory = (a, b) => a.category.localeCompare(b.category);

  let sortedItems = [...items];
  if (sortBy === "name") sortedItems.sort(sortByName);
  else if (sortBy === "category") sortedItems.sort(sortByCategory);

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-gray-300 font-medium">Sort by:</span>

        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded-md font-semibold border transition ${
            sortBy === "name"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded-md font-semibold border transition ${
            sortBy === "category"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Category
        </button>
      </div>

      {/* List Rendering */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
