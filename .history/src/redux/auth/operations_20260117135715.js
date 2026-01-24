import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { setAuthHeader } from '../../api/api.js';
import { normalizeUser } from '../../utils/normalizeUser.js';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', credentials);
      const { token, user } = data;
      setAuthHeader(token);
      localStorage.setItem('token', token);
      return {
        user: normalizeUser(user),
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
      const { data } = await api.post('/users/signin', credentials);
      const { token, user } = data;
      setAuthHeader(token);
      localStorage.setItem('token', token);
      return {
        user: normalizeUser(user),
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
    await api.post('/users/signout');
    localStorage.removeItem('token');
    setAuthHeader(null);
    // return;
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
        user: normalizeUser(null),
        token: null,
      });
    }

    try {
      setAuthHeader(token);

      const { data } = await api.get('/users/current');
      const user = response.data;

      return {
        user: normalizeUser(user),
        token,
      };
    } catch {
      localStorage.removeItem('token');
      setAuthHeader(null);

      return thunkAPI.fulfillWithValue({
        user: normalizeUser(null),
        token: null,
      });
    }
  }
);
