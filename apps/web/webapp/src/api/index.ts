import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type RootState } from "@/store/store";
import {
  type LoginRequestType,
  type LoginSuccessResponseType,
  type SignupRequestType,
  type User,
} from "@/types/auth";

const SERVER_URL = "https://todoist-d3gq.onrender.com";
// const SERVER_URL = "http://localhost:5000";

const todoistApi = createApi({
  reducerPath: "todoistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      // if we have token in the store, use it for all authenticated requests
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
    login: builder.mutation<LoginSuccessResponseType, LoginRequestType>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [],
    }),
    signup: builder.mutation<User & { message: string }, SignupRequestType>({
      query: (signupData) => ({
        url: "/auth/signup",
        method: "POST",
        body: signupData,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useGetRootQuery, useLoginMutation, useSignupMutation } =
  todoistApi;

export default todoistApi;
