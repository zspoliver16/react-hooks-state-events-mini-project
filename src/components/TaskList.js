import React from "react"
import Task from "./Task"

function TaskList({ tasks, onRemove, selectedCategory }) {
  const taskToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return tasks;
    }
    return task.category.toLowerCase().includes(selectedCategory.toLowerCase())
  })

  const taskComponents = taskToDisplay.map((task, index) => (
    <Task key={index} text={task.text} category={task.category} onRemove={onRemove} />
  ))

  return <div className="tasks">{taskComponents}</div>
}

export default TaskList;
