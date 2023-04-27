import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../redux/sidebar/sidebarSlice";
import newsSlice from "../redux/news/newsSlice";

export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    sidebar: sidebarSlice,
    newsPost: newsSlice,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
});
