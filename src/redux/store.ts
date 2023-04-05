import { configureStore } from "@reduxjs/toolkit";
import users from './users/slice';

export const setupStore = () => configureStore({
  reducer: {
    users
  }
});

export const store = setupStore();
export type RootState = ReturnType<typeof store.getState>
