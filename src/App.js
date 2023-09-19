import "./styles/style.css";
import { useEffect, useState } from "react";

import TodoList from "./components/TodoList/TodoList";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoBottom from "./components/TodoBottom/TodoBottom";

function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("todo") !== null) {
      setTodo(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="App" style={{ padding: "50px" }}>
      <TodoAdd todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
      <TodoBottom todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
