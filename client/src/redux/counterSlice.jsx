import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  page3: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addAge: (state, action) => {
      state.value = action.payload;
    },
    isPage: (state, action) => {
      state.page3 = action.payload;
    },
  },
});

export const { addAge, isPage } = counterSlice.actions;

export default counterSlice.reducer;
