import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type RootState } from "@/store/store";
// import {
//   type LoginRequestType,
//   type SignupRequestType,
//   type LoginSuccessResponseType,
// } from "@/types/auth";

const SERVER_URL = "https://todoist-d3gq.onrender.com";
// const SERVER_URL = "http://localhost:5000";

const todoistApi = createApi({
  reducerPath: "todoistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      // if we have token in the redux store, use it for all authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getRoot: builder.query<string, void>({
      query: () => `/`,
    }),
  }),
});

export const { useGetRootQuery } = todoistApi;

export default todoistApi;
