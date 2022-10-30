import { configureStore, createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "a",
  initialState: { tab: "a", page: 0 },
  reducers: {
    changeTab: (state, { payload }) => {
      console.log(payload);
      state.tab = payload;
    },
  },
});

export const { changeTab } = listSlice.actions;
export default listSlice.reducer;
