import React from "react";

const TodoBottom = ({ todo, setTodo }) => {
  const deleteAllTodos = () => {
    setTodo((prev) => prev.filter((item) => !item.isDone));
  };
  return (
    <div>
      <div>
        {todo.filter((item) => item.isDone).length} of {todo.length}
      </div>
      <button onClick={deleteAllTodos}>remove checked</button>
    </div>
  );
};

export default TodoBottom;
