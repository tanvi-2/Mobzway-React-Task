import React, { useState } from "react";

const Task1 = () => {
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [newTech, setNewTech] = useState("");
  const [records, setRecords] = useState([
    "Artificia Intellence",
    "Deep Learning",
    "Machine Learning",
    "MongoDB",
    "Postgre SQL"
  ]);

  const sum = () => {
    return parseInt(number1 || 0) + parseInt(number2 || 0);
  };

  const addTech = () => {
    if (newTech.trim()) {
      setRecords([...records, newTech]);
      setNewTech("");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-blue-100 rounded-lg p-6 w-[550px] shadow-lg shadow-[#9a968b] flex flex-col items-center gap-4">
        <ul className="flex flex-col gap-4 w-full">
          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">1. Display Simple JSX</h3>
            <p className="text-rose-500">This is a simple JavaScript XML paragraph.</p>
          </li>

          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">
              2. Display an Array of Records on Screen
            </h3>
            <ul className="list-none">
              {records.map((record, index) => (
                <li key={index} className="text-rose-500">
                  {record}
                </li>
              ))}
            </ul>
          </li>

          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">3. Show/Hide Element on Screen</h3>
            <p>{show ? "Hello, I am noticeable." : ""}</p>
            <button
              className="mt-2 px-4 py-1 bg-pink-300 text-rose-500 rounded-md"
              onClick={() => setShow(!show)}
            >
              Show/Hide
            </button>
          </li>

          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">4. Enable/Disable a Button</h3>
            <button
              className="mt-2 px-4 py-1 bg-pink-300 text-rose-500 rounded-md"
              onClick={() => setDisabled(!disabled)}
            >
              Enable/Disable
            </button>
            <button
              className={`mt-2 px-4 py-1 ml-4 rounded-md ${
                disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-pink-300 text-rose-500 cursor-pointer"
              }`}
              disabled={disabled}
            >
              Click Me
            </button>
          </li>

          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">
              5. Two-Way Data Binding using Textbox
            </h3>
            <input
              className="w-full p-2 mt-2 border rounded-md text-rose-500"
              type="text"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter number 1: "
            />
            <input
              className="w-full p-2 mt-2 border rounded-md text-rose-500"
              type="text"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter number 2: "
            />
          </li>

          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">6. Do Sum of Two Numbers</h3>
            <p className="text-rose-500">Sum: {sum()}</p>
          </li>

          <li className="p-2 bg-rose-200 rounded-lg text-slate-800 border border-rose-300 shadow-md">
            <h3 className="font-semibold">
              7. Dynamically Add Child Components (List)
            </h3>
            <ul className="list-none">
              {records.map((record, index) => (
                <li key={index} className="text-rose-500">
                  {record}
                </li>
              ))}
            </ul>
            <input
              className="w-full p-2 mt-2 border rounded-md text-rose-500"
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Enter new technology: "
            />
            <button
              className="mt-2 px-4 py-1 bg-pink-300 text-rose-500 rounded-md"
              onClick={addTech}
            >
              Add Technology
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task1;
