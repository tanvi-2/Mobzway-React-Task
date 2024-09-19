import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./Card";
import TaskPage from "./TaskPage";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4.jsx";
import Task5 from "./tasks/Task5.jsx";
import "./App.css";
const tasks = [
  {
    id: "task-1",
    name: "Task 1: Basic Programming Tasks",
    description: "Learn basic React functionalities...",
    component: <Task1 />,
  },
  {
    id: "task-2",
    name: "Task 2: Create a Counter",
    description: "Implement a counter with increase/decrease functionality...",
    component: <Task2 />,
  },
  {
    id: "task-3",
    name: "Task 3: Build Search Filter",
    description: "Build a search filter that filters array records...",
    component: <Task3 />,
  },
  {
    id: "task-4",
    name: "Task 4: Create a Datagrid",
    description: "Create a datagrid with static JSON and sort/filter/search...",
    component: <Task4 />,
  },
  {
    id: "task-5",
    name: "Task 5: Drag & Drop Task List",
    description: "Create a drag & drop task list with 5 blocks...",
    component: <Task5 />,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="text-center text-4xl font-bold font-serif bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  React Tasks(1-5)
                </h1>
                {tasks.map((task) => (
                  <Card
                    key={task.id}
                    name={task.name}
                    description={task.description}
                    link={`/task/${task.id}`}
                  />
                ))}
              </div>
            }
          />
          <Route path="/task/:taskId" element={<TaskPage tasks={tasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
