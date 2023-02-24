import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/usersSlice";
import competitionReduser from "./competitionSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    competition: competitionReduser,
  },
});
