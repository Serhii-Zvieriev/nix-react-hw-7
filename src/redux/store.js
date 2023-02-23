import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
