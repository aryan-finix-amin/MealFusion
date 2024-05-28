import React from "react";
import Item from "./item";

const ItemList = () => {
  const items = [
    { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
    { name: "bread 🍞", quantity: 2, category: "bakery" },
    { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
    { name: "bananas 🍌", quantity: 6, category: "produce" },
    { name: "broccoli 🥦", quantity: 3, category: "produce" },
    { name: "chicken breast, 1 kg 🍗", quantity: 1, category: "meat" },
    { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
    { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
    { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
    { name: "paper towels, 6 pack", quantity: 1, category: "household" },
    { name: "dish soap 🍽️", quantity: 1, category: "household" },
    { name: "hand soap 🧼", quantity: 4, category: "household" },
  ];
  
      return (
      <div className="max-w-md mx-auto">
      <ul className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
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

