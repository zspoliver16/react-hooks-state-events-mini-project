const [selectCategory, setCategory] = useState("")

function handleSubmit(e) {
  e.preventDefault()
  const newTask = { text: details, category: selectCategory }
  onTaskFormSubmit(newTask)
  setDetails("")
  setCategory("")
}

return (
  <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
    <label>
      Details
      <input type="text" name="text" value={details} onChange={(e) => setDetails(e.target.value)} />
    </label>
    <label>
      Category
      <select name="category" value={selectCategory} onChange={(e) => setCategory(e.target.value)}>
        {newCategories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </label>
    <input type="submit" value="Add task" />
  </form>
)
}

export default NewTaskForm;