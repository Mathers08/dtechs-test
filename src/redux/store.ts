import { configureStore } from "@reduxjs/toolkit";

export const setupStore = () => configureStore({
  reducer: {}
});

export const store = setupStore();
export type RootState = ReturnType<typeof store.getState>
