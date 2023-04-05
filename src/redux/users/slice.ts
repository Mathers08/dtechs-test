import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "./types";

const initialState: UserState = {
  users: [{
    id: "1",
    username: "mathers08",
    password: "admin",
    firstName: "Black",
    lastName: "Mathers",
    roles: ["ANT"],
    workBorders: []
  }]
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
    }
  }
});

export const {
  addUser,
  removeUser,
  editUser
} = slice.actions;
export default slice.reducer;