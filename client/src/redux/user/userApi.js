import Swal from "sweetalert2";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/v1/users",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("red:", result.data.data.token);
          if (result.data.success) {
            localStorage.setItem("token", result.data.data.token);
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error.error.data.message,
          });
        }
      },
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/api/v1/users",
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("red:", result.data.data.token);
          if (result.data.success) {
            dispatch(userLoggedIn(result.data.data.result));
            localStorage.setItem("auth_token", result.data.data.token);
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error.error.data.message,
          });
        }
      },
    }),
    findUserData: builder.query({
      query: (email) => ({
        url: `/api/v1/users/${email}`,
        method: "GET",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.data.email) {
            dispatch(userLoggedIn(result.data.data));
          }
        } catch (error) {
          // console.log(error);
          // Swal.fire({
          //   icon: "error",
          //   title: error.error.data.message,
          // });
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useSignUpMutation, useFindUserDataQuery } =
  userApi;
