import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.filter((r) => r._id != action.payload);
      return newArray;
    },
    removeRequests: (state, action) => {
      return null;
    },
  },
});

export const { addRequests, removeRequest, removeRequests } =
  requestsSlice.actions;
export default requestsSlice.reducer;
