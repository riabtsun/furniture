import React, { useState } from "react";

const TodoItem = ({
  item,
  deleteOneTodo,
  setImportantTodo,
  setDoneTodo,
  setChangeTodo,
}) => {
  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(item.text || "");
  const changeFunc = (e) => {
    if (e.target.textContent === "Save") {
      setChangeTodo(item.id, "any");
    }
    setChange((prev) => !prev);
  };

  return (
    <li>
      <input checked={item.isDone} type="checkbox" onChange={setDoneTodo} />

      {change ? (
        <input
          type="text"
          value={changeText}
          onChange={(e) => setChangeText(e.target.value)}
        />
      ) : (
        <p style={{ color: item.isDone ? "blue" : "black" }}>{item.text}</p>
      )}

      <button
        onClick={() => setImportantTodo(item.id)}
        style={{ background: item.isImportant ? "gold" : "buttonFace" }}
      >
        Important
      </button>
      <button onClick={changeFunc}>{change ? "Save" : "Change"}</button>
      <button type="button" onClick={() => deleteOneTodo(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
