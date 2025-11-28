"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200"
    >
      <label className="block text-gray-800 font-semibold mb-1">Item Name</label>
      <input
        type="text"
        placeholder="e.g., milk, 4 L 🥛"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />

      <label className="block text-gray-800 font-semibold mb-1">
        Quantity (1–20)
      </label>
      <p className="text-gray-700 mb-2">
        Current: <span className="font-bold">{quantity}</span>
      </p>

      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-10 h-10 rounded-md text-lg font-bold text-white ${
            quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          −
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`w-10 h-10 rounded-md text-lg font-bold text-white ${
            quantity === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>

      <label className="block text-gray-800 font-semibold mb-1">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-6 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
      >
        Add Item
      </button>
    </form>
  );
}
