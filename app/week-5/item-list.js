"use client";

import React from "react";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-md mx-auto">
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
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
