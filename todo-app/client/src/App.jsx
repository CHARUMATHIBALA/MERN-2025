import { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!text.trim()) return;
    const res = await axios.post("http://localhost:5000/api/todos", {
      text,
      deadline,
    });
    setTodos([...todos, res.data]);
    setText("");
    setDeadline("");
  };

  const toggleComplete = async (id, completed) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {
      completed: !completed,
    });
    setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="app">
      <h1>📝 My To-Do List</h1>
      <div className="input-group">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
