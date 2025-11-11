import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    // Create a new array using concat (does not mutate the original array)
    setList(list.concat(task));
    setTask("");
  }

  return (
    <div>
      <h2>Simple Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((t, i) => (
          <li><h2 key={i}>{t}</h2><br></br></li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
