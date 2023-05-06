import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    onCategoryFilter(selectedCategory);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
