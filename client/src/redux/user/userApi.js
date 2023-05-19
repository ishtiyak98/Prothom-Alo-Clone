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
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useFindUserDataQuery } = userApi;
