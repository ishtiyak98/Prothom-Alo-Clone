import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  error: "",
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
    },
    userLogOut: (state) => {
      state.user = {};
    },
  },
});

export const { userLoggedIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;
