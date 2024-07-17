"use client";

import React from "react";
import Item from "./item";
import { useState } from "react";

const ItemList = ({ items, onSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-md mx-auto justify-item-center">
      <p className="text-white text-3xl">Sort By: </p>
      <button
        className="rounded-lg p-2"
        onClick={() => setSortBy("name")}
        style={{ backgroundColor: sortBy === "name" ? "lightgrey" : "white" }}
      >
        Name
      </button>
      <button
        className="m-2 rounded-lg p-2"
        onClick={() => setSortBy("category")}
        style={{
          backgroundColor: sortBy === "category" ? "lightgrey" : "white",
        }}
      >
        Category
      </button>
      <ul className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-10">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
