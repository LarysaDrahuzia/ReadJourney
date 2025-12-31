import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

const setAuthHeader = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      const { token, user } = response.data;
      setAuthHeader(token);
      localStorage.setItem('token', token);
      return {
        user,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Registration failed'
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signin', credentials);
      const { token, user } = response.data;
      setAuthHeader(token);
      localStorage.setItem('token', token);
      return {
        user,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/signout');
    localStorage.removeItem('token');
    setAuthHeader(null);
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return thunkAPI.fulfillWithValue({
        user: null,
        token: null,
      });
    }

    try {
      setAuthHeader(token);

      const response = await axios.get('/users/current');
      const user = response.data;

      return {
        user: {
          name: user.name,
          email: user.email,
          library: user.library?.map(book => book._id),
        },
        token,
      };
    } catch {
      localStorage.removeItem('token');
      setAuthHeader(null);
      // return thunkAPI.rejectWithValue(
      //   error.response?.data?.message || 'Failed to refresh user'
      // );
      return thunkAPI.fulfillWithValue({
        user: null,
        token: null,
      });
    }
  }
);

export const addToMyLibrary = createAsyncThunk(
  'auth/addToMyLibrary',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add/${bookId}`);
      return response.data.books.map(book => book._id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to add book'
      );
    }
  }
);

export const removeFromMyLibrary = createAsyncThunk(
  'auth/removeFromMyLibrary',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`/books/remove/${bookId}`);
      return response.data.books.map(book => book._id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to remove book'
      );
    }
  }
);
