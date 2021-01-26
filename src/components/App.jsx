import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleNewItem(event) {
    const newValue = event.target.value;
    setNewItem(newValue);
  }

  function handleClick(event) {
    setToDoList((prevItem) => {
      return [...prevItem, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleNewItem} value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
