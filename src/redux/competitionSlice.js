import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "5236223",
    name: "running 100 meters",
    participants: ["1", "3"],
    status: "finished",
    winner: "Vasya",
    time: "00:00:13",
  },
  {
    id: "7221123",
    name: "running 50 meters",
    participants: ["2", "3"],
    status: "finished",
    winner: "Kate",
    time: "00:00:13",
  },
  {
    id: "92143546",
    name: "watch without blinking",
    participants: ["1", "2"],
    status: "active",
  },
];

export const competitionSlice = createSlice({
  name: "competition",
  initialState,

  reducers: {
    addCompetition: (state, action) => [...state, action.payload],
    finishedCompetition: (state, action) =>
      state.find((el) => {
        if (el.id === action.payload.id) {
          el.status = "finished";
          el.winner = action.payload.win;
          el.time = action.payload.time;
        }
      }),
  },
});

export const { addCompetition, finishedCompetition } = competitionSlice.actions;

export const getAllCompetition = (state) => state.competition;
export const getParticipantsCompetition = (state) =>
  state.competition.participants;

export default competitionSlice.reducer;
