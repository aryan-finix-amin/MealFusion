"use client";

import React from "react";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Name: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-purple-200">
      <div className="bg-purple-500 mx-auto">
        <input
          className="m-4 rounded-md "
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="m-4 rounded-md"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />
        <select
          className="m-4 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Meat</option>
          <option>Frozen Foods</option>
          <option>Canned Goods</option>
          <option>Dry Goods</option>
          <option>Beverages</option>
          <option>Snacks</option>
          <option>Household</option>
          <option>Other</option>
        </select>
      </div>
      <button className="container bg-purple- 00 shadow-md ml-10 mt-10 rounded-lg w-20 h-10 mx-auto hover:text-blue-700">
        Submit
      </button>
    </form>
  );
}
