"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!res.ok) throw new Error("Failed to fetch meal ideas");
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;
    async function loadMealIdeas() {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white rounded-md shadow-md p-4 w-full max-w-md">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Meal Ideas for <span className="capitalize">{ingredient}</span>
      </h2>

      {/* Conditional rendering messages */}
      {!ingredient && (
        <p className="text-gray-700">Select an item to see meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-700">
          No meal ideas found for &quot;{ingredient}&quot;.
        </p>
      )}

      {/* Render meal list */}
      <ul className="space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex items-center bg-gray-100 rounded-md p-2 hover:bg-gray-200 transition"
          >
            
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded-md mr-3 object-cover border border-gray-300"
            />
            <span className="font-semibold text-gray-800">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
