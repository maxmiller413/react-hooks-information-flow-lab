import React, { useState } from "react";
import Filter from "./Filter"
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={handleCategoryChange} />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// Create a Filter component by refactoring the <select> element out of the ShoppingList component. Changing the selection in the dropdown should still change which items are displayed in the shopping list.

// You will need to pass a callback function as a prop called onCategoryChange to the Filter component in order for the test to pass.

// 1) copy/paste select JSX
// 2) replace JSX with Filter component
// 3) import Filter @ top of App
// 4) create new Filter.js inside components folder
// 5) create Filter function and return pasted select JSX
//    - export default Filter
// 6) pass handleCategoryChange into Filter as prop
//    - App
//    - Filter
// 7) update props in Filter
