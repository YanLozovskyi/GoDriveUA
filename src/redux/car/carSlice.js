import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './carOperations';
import { handleGetAllCars } from './handlers';

export const initialState = {
  items: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllCarsThunk.fulfilled, handleGetAllCars);
  },
});

export const carsReducer = carsSlice.reducer;
