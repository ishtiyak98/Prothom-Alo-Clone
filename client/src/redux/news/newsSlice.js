import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNews: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addAllNews: (state, action) => {
      state.allNews = action.payload;
    },
  },
});

export const { addAllNews } = newsSlice.actions;
export default newsSlice.reducer;
