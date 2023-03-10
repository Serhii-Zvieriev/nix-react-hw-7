import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Serg",
    surname: "",
    time: "00:00:16",
  },
  {
    id: "2",
    name: "Vas",
    surname: "",
    time: "00:00:50",
  },
  {
    id: "3",
    name: "Ivan",
    surname: "",
    time: "00:00:13",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, action) => [...state, action.payload],
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export const getUsers = (state) => state.users;

export default usersSlice.reducer;
