import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserState } from './types';

const initialState: UserState = {
  users: [],
  searchValue: '',
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string | undefined>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.map((user) => (user.id === action.payload.id ? action.payload : user));
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  addUser,
  removeUser,
  editUser,
  setSearchValue,
} = slice.actions;
export default slice.reducer;
