import React, { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

import { CATEGORIES, TASKS } from "../data"

console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All")

  function onRemove(text) {
    const updatedTasks = tasks.filter((task) => task.text !== text)
    setTasks(updatedTasks)
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} onRemove={onRemove} selectedCategory={selectedCategory} />
    </div>
  )
}

export default App;