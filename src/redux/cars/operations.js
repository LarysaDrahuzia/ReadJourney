import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (
    {
      page = 1,
      totalCars = '',
      totalPages = '',
      brand = '',
      rentalPrice = '',
      maxMileage = '',
      minMileage = '',
      query = '',
    } = {},
    thunkAPI
  ) => {
    try {
      const response = await axios.get('/cars', {
        params: {
          page,
          totalCars,
          totalPages,
          brand,
          rentalPrice,
          maxMileage,
          minMileage,
          query,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching cars'
      );
    }
  }
);

export const fetchBrands = createAsyncThunk(
  'filters/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
