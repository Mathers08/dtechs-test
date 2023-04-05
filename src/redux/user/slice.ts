import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
  users: []
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const {

} = slice.actions;
export default slice.reducer;