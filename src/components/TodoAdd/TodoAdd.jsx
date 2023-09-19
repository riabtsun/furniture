import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoAdd = ({ todo, setTodo }) => {
  const addTodo = async (e) => {
    let text = e.target[0].value;
    e.preventDefault();
    let isHas = todo.some((item) => item.text === text);
    if (!isHas) {
      await setTodo((prev) => [
        ...prev,
        {
          id: uuidv4(),
          text: e.target[0].value,
          isImportant: false,
          isDone: false,
        },
      ]);
      await localStorage.setItem("todo", JSON.stringify(todo));
    } else {
      console.log("This task is already live");
    }
    e.target[0].value = "";
  };

  return (
    <form onSubmit={addTodo}>
      <input required type="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoAdd;
