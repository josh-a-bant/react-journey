import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        id: uuidv4(),
        text: action.payload,
        isComplete: false,
      });
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.value.find((todo) => todo.id === action.payload);
      if (todo) todo.isComplete = !todo.isComplete;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
