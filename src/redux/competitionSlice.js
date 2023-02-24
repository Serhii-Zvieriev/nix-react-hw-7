import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "5236223",
    name: "running 100 meters",
    status: "finished",
    winner: "Vasya",
  },
  {
    id: "7221123",
    name: "running 50 meters",
    status: "finished",
    winner: "Kate",
  },
  {
    id: "92143546",
    name: "watch without blinking",
    status: "active",
  },
  {
    id: "823452",
    name: "eating burgers",
    status: "finished",
    winner: "active",
  },
];

export const competitionSlice = createSlice({
  name: "competition",
  initialState,

  reducers: {
    addCompetition: (state, action) => [...state, action.payload],
    finishedCompetition: (state, action) =>
      state.find((el) => {
        if (el.id === action.payload) el.status = "finished";
      }),
  },
});

export const { addCompetition, finishedCompetition } = competitionSlice.actions;

export const getCompetition = (state) => state.competition;

export default competitionSlice.reducer;
