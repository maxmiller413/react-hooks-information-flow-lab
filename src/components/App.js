import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
















// 1) copy/paste header JSX
// 2) replace JSX with Header component
// 3) import Header @ top of App
// 4) create new Header.js inside components folder
// 5) create Header function and return pasted Header JSX
//    - export default Header
// 6) pass handleDarkModeClick into Header as prop
//    - App
//    - Header
// 7) pass isDarkMode into Header as prop
//    - App
//    - Header
// 8) update props in Header