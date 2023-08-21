// menuSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL =
  'https://hashtagloyalty.s3.ap-southeast-1.amazonaws.com/Take+Home+Assignment+-+Thrive.json';

export const fetchMenuItems = createAsyncThunk(
  'menu/fetchMenuItems',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
);

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMenuItems.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
