"use client";

import React, { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

const ShoppingListPage = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const loadItems = async () => {
    if (user) {
      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      loadItems();
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        setItems([...items, { ...newItem, id: newItemId }]);
      } catch (error) {
        console.error("Failed to add item:", error);
      }
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
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
};

export default ShoppingListPage;
