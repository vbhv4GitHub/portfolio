import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './passwordAPI';

export const FETCH_PASSWORD = createAsyncThunk(
   'password/fetchPassword',
   async () => {
      try {
         const response = await api.fetchPassword();
         return response.data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const passwordSlice = createSlice({
   name: 'password',
   initialState: [],
   reducers: {},
   extraReducers: {
      [FETCH_PASSWORD.fulfilled]: (state, action) => {
         return action.payload;
      },
   },
});

export const selectPassword = (state) => state.password;
export default passwordSlice.reducer;
