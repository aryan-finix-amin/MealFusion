"use client";

import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="container mx-auto p-4 bg-black">
      <h1 className="text-5xl font-bold text-center mb-10 text-purple-200">
        SHOPPING LIST
      </h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
