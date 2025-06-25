import { useEffect, useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      if (!todo.deadline) return;

      const now = new Date();
      const target = new Date(todo.deadline);
      const diff = target - now;

      if (diff > 0) {
        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${hrs}h ${mins}m ${secs}s left`);
      } else {
        setTimeLeft("⏰ Overdue");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [todo.deadline]);

  return (
    <div className="todo-item">
      <div
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleComplete(todo._id, todo.completed)}
      >
        {todo.text}
        {todo.deadline && (
          <div style={{ fontSize: "0.8em", color: "gray" }}>{timeLeft}</div>
        )}
      </div>
      <button onClick={() => deleteTodo(todo._id)}>❌</button>
    </div>
  );
};

export default TodoItem;
