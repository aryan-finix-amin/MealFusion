import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="container mx-auto p-4 bg-black">
      <h1 className="text-5xl font-bold text-center mb-10 text-purple-200">
        SHOPPING LIST
      </h1>
      <ItemList />
    </main>
  );
}
