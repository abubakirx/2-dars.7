import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo-slices.js";

export const store = configureStore({
  reducer: {
    todo,
  },
});
