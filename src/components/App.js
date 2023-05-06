import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const filterTasksByCategory = (category) => {
    setSelectedCategory(category);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryFilter={filterTasksByCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
