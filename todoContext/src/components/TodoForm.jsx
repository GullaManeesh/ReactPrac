import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo(); // Fixed: added parentheses

  const add = (e) => {
    e.preventDefault();

    if (!todo) return; // Better empty check

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      {" "}
      {/* Added onSubmit */}
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
