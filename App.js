import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoEditForm from "./components/TodoEditForm";
function App() {
  const [todos, setTodos] = useState([
    { id: 0, checked: false, title: "test" },
    { id: 1, checked: false, title: "test1" },
    { id: 2, checked: false, title: "test2" },
    { id: 3, checked: false, title: "test3" },
    { id: 4, checked: false, title: "test4" },
  ]);
  const [write, setWrite] = useState(false);
  const closeWriteWindow = () => {
    setWrite(false);
  };
  return (
    <div className="container">
      <h1>Todo-list</h1>
      <button
        className="write-btn"
        onClick={() => {
          setWrite(!write);
        }}
      >
        글쓰기
      </button>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        writeWindowClose={closeWriteWindow}
      />
      {write == true ? (
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          writeWindowClose={closeWriteWindow}
        />
      ) : null}{" "}
    </div>
  );
}

export default App;
