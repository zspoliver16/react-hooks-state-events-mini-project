import React from "react"

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {
  function handleClick(category) {
    setSelectedCategory(category === "All" ? category : category.toLowerCase())
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category.toLowerCase() ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter;