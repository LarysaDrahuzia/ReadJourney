import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchRecommendedBooks = createAsyncThunk(
  'books/fetchRecommended',
  async (
    {
      page = 1,
      totalPages = '',
      title = '',
      author = '',
      perPage = 10,
      query = '',
    } = {},
    thunkAPI
  ) => {
    try {
      const response = await axios.get('/books/recommend', {
        params: {
          page,
          totalPages,
          title,
          author,
          perPage,
          query,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching recommended books'
      );
    }
  }
);

export const fetchMyLibrary = createAsyncThunk(
  'books/fetchMyLibrary',
  async ({ page = 1 }, thunkAPI) => {
    try {
      const { data } = await axios.get('/books/own', {
        params: { page },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching library'
      );
    }
  }
);

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(`/books/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching book by ID'
      );
    }
  }
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post('/books/add', bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to add book'
      );
    }
  }
);

export const addToMyLibrary = createAsyncThunk(
  'books/addToMyLibrary',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.post(`/books/add/${bookId}`);
      return data; // одна книга
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to add book'
      );
    }
  }
);

export const removeFromMyLibrary = createAsyncThunk(
  'books/removeFromMyLibrary',
  async (bookId, thunkAPI) => {
    try {
      await axios.delete(`/books/remove/${bookId}`);
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to remove book'
      );
    }
  }
);
