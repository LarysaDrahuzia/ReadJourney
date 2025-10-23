import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from '../cars/operations.js';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brands: [],
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
