import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../Api/api';

export const getAllCarsThunk = createAsyncThunk(
  'adverts/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllCars();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
