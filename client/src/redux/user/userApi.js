import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/v1/users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = userApi;
