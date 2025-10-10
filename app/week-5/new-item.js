"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleIncrement = () => {
    setQuantity(quantity < 20 ? quantity + 1 : quantity);
  };

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(newItem);

    alert(
      `Item added: ${newItem.name || "(no name)"}, Quantity: ${newItem.quantity}, Category: ${newItem.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const isDecrementDisabled = quantity === 1;
  const isIncrementDisabled = quantity === 20;

  const decrementButtonClass = `w-10 h-10 rounded text-white text-xl font-bold ${
    isDecrementDisabled
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-gray-400 hover:bg-gray-500"
  }`;

  const incrementButtonClass = `w-10 h-10 rounded text-white text-xl font-bold ${
    isIncrementDisabled
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-blue-500 hover:bg-blue-600"
  }`;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md w-full max-w-md">
      <input
        type="text"
        placeholder="Item Name"
        required
        value={name}
        onChange={handleNameChange}
        className="w-full border-1 border-black-300 rounded p-2 mb-4 text-gray-800"
      />

      <div className="flex items-center space-x-2 mb-4">
        <span className="border-1 border-black-300 rounded px-4 py-0 text-lg font-extrabold text-gray-800 bg-white">
          {quantity}
        </span>

        <button
          type="button"
          onClick={handleDecrement}
          disabled={isDecrementDisabled}
          className={decrementButtonClass}
        >
          −
        </button>

        <button
          type="button"
          onClick={handleIncrement}
          disabled={isIncrementDisabled}
          className={incrementButtonClass}
        >
          +
        </button>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="ml-auto border border-gray-300 rounded p-2 text-gray-800 bg-white w-40"
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
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
      >
        Add Item
      </button>
    </form>
  );
}