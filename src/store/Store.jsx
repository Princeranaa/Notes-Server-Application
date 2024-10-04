import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "../redux/PasteSclice";

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});

