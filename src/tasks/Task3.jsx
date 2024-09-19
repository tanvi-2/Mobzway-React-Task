import React, { useState } from "react";

const Task3 = () => {
  const items = [
    "Carrot",
    "Tomato",
    "Potato",
    "Onion",
    "Orange",
    "Papaya",
    "Pumpkin",
    "Cabbage",
    "Capcicum",
    "Turmeric",
  ];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center">
      <div className="bg-blue-100 rounded-lg p-6 w-[400px] shadow-lg shadow-[#9a968b] flex flex-col items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 rounded-md border border-gray-300"
        />
        <ul className="grid grid-cols-2 gap-4 w-full list-none px-6">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-2 bg-rose-200 rounded-lg text-rose-500 border border-rose-300 shadow-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task3;
