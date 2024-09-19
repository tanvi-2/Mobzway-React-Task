// taskData.js

export const initialTasks = [
  { id: "task-1", content: "Test Task 1" },
  { id: "task-2", content: "Test Task 2" },
  { id: "task-3", content: "Test Task 3" },
  { id: "task-4", content: "Test Task 4" },
  { id: "task-5", content: "Test Task 5" },
  { id: "task-6", content: "Test Task 6" },
  { id: "task-7", content: "Test Task 7" },
  { id: "task-8", content: "Test Task 8" },
  { id: "task-9", content: "Test Task 9" },
  { id: "task-10", content: "Test Task 10" },
];

export const initialColumns = {
  today: {
    name: "Today",
    tasks: [],
  },
  tomorrow: {
    name: "Tomorrow",
    tasks: [],
  },
  thisWeek: {
    name: "This Week",
    tasks: [],
  },
  nextWeek: {
    name: "Next Week",
    tasks: [],
  },
  unplanned: {
    name: "Unplanned",
    tasks: initialTasks,
  },
};
