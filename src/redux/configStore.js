import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";

const store = configureStore({
  reducer: { listSlice },
});

export default store;
