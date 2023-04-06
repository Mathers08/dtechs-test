import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils';
import users from './users/slice';

export const setupStore = () => configureStore({
  reducer: {
    users,
  },
  preloadedState: loadState(),
});

export const store = setupStore();

store.subscribe(() => saveState(store.getState()));
export type RootState = ReturnType<typeof store.getState>
