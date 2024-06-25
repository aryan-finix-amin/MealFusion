"use client";

import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanName);
  };

  return (
    <main className="container mx-auto p-4 bg-black justify-center">
      <h1 className="text-5xl font-bold text-center mb-10 text-purple-200">
        SHOPPING LIST
      </h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div>
          <ItemList items={items} onSelect={handleItemSelect} />
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="text-black justify-center absolute top-30 right-20 p-4 max-w-md rounded-lg bg-purple-100">
          {selectedItemName && (
            <>
              <h2 className="text-3xl font-bold text-black text-center mb-4 justify-center">
                MEAL IDEAS
              </h2>

              <MealIdeas ingredient={selectedItemName} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
