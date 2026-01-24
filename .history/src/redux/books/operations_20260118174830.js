import api from '../../api/api.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      const { data } = await api.get('/books/recommend', {
        params: {
          page,
          totalPages,
          title,
          author,
          perPage,
          query,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching recommended books'
      );
    }
  }
);

export const fetchMyLibrary = createAsyncThunk(
  'books/fetchMyLibrary',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/books/own');
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
      const { data } = await api.get(`/books/${_id}`);
      return data;
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
      const { data } = await api.post('/books/add', bookData);
      return data;
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
      const { data } = await api.post(`/books/add/${bookId}`);
      return data;
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
      await api.delete(`/books/remove/${bookId}`);
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to remove book'
      );
    }
  }
);

export const myBookReadingStart = createAsyncThunk(
  'books/myBookReadingStart',
  async ({ bookId, startPage }, thunkAPI) => {
    try {
      const { data } = await api.post('/books/reading/start', {
        bookId,
        startPage,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to start reading'
      );
    }
  }
);

export const myBookReadingFinish = createAsyncThunk(
  'books/myBookReadingFinish',
  async ({ bookId, endPage }, thunkAPI) => {
    try {
      const { data } = await api.post('/books/reading/finish', {
        bookId,
        endPage,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to finish reading'
      );
    }
  }
);

export const deleteReading = createAsyncThunk(
  'books/deleteReading',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/books/reading`, {
        data: { bookId },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to delete reading the book'
      );
    }
  }
);
