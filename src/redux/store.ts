import { configureStore } from "@reduxjs/toolkit";
import users from './users/slice';
import { loadState, saveState } from "../utils";

export const setupStore = () => configureStore({
  reducer: {
    users
  },
  preloadedState: loadState()
});

export const store = setupStore();

store.subscribe(() => saveState(store.getState()));
export type RootState = ReturnType<typeof store.getState>
