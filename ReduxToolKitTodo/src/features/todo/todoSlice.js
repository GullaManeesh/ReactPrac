import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: intialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload !== "") {
        const todo = {
          id: nanoid(),
          text: action.payload,
        };
        state.todos.push(todo);
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
