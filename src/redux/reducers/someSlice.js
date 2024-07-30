import { createSlice } from "@reduxjs/toolkit";

const someSlice = createSlice({
  name: "someSlice",
  initialState: {},
  reducers: {
    // Define your reducers here
  },
});

export const { actions } = someSlice;
export default someSlice.reducer;
