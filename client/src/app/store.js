import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../redux/sidebar/sidebarSlice";
import newsSlice from "../redux/news/newsSlice";
import { apiSlice } from "../redux/api/apiSlice";
import userSlice from "../redux/user/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    sidebar: sidebarSlice,
    userSlice: userSlice,
    newsPost: newsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
