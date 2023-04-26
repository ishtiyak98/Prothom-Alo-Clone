import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../redux/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    sidebar: sidebarSlice,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
});
