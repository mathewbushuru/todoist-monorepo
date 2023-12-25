import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type User } from "@/types/auth";
import { localStorageHelpers } from "@/lib/utils";

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: localStorageHelpers.getToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorageHelpers.setToken(action.payload.token);
    },
    clearCredentials: (state) => {
      localStorageHelpers.removeToken();
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
