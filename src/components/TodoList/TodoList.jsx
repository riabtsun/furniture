import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, setTodo }) => {
  const deleteOneTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const setImportantTodo = (id) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isImportant: !item.isImportant };
        }
        return item;
      })
    );
  };
  const setDoneTodo = (id) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };
  const setChangeTodo = (id, text) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, text: text };
        }
        return item;
      })
    );
  };
  return (
    <ul>
      {todo.map((item) => (
        <TodoItem
          setImportantTodo={setImportantTodo}
          key={item.id}
          item={item}
          deleteOneTodo={deleteOneTodo}
          setDoneTodo={setDoneTodo}
          setChangeTodo={setChangeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
