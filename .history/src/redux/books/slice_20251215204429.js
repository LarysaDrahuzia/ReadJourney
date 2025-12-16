import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecommendedBooks,
  fetchBookById,
  fetchMyLibrary,
} from './operations.js';

const initialState = {
  recommended: {
    items: [],
    page: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
  },
  myLibrary: {
    items: [],
    page: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
  },
  currentBook: {
    data: null,
    isLoading: false,
    error: null,
  },
};

const sliceBooks = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearCurrentBook(state) {
      state.currentBook.data = null;
    },
    nextRecommendedPage(state) {
      if (state.recommended.page < state.recommended.totalPages) {
        state.recommended.page += 1;
      }
    },
    prevRecommendedPage(state) {
      if (state.recommended.page > 1) {
        state.recommended.page -= 1;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecommendedBooks.pending, state => {
        state.recommended.isLoading = true;
        state.recommended.error = null;
      })

      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.recommended.isLoading = false;

        state.recommended.items = action.payload.results;
        state.recommended.totalPages = action.payload.totalPages;
        state.recommended.page = action.payload.page;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action) => {
        state.recommended.isLoading = false;
        state.recommended.error = action.payload;
      })
      .addCase(fetchMyLibrary.pending, state => {
        state.myLibrary.isLoading = true;
        state.myLibrary.error = null;
      })
      .addCase(fetchMyLibrary.fulfilled, (state, action) => {
        state.myLibrary.isLoading = false;
        state.myLibrary.items = action.payload.results;
        state.myLibrary.totalPages = action.payload.totalPages;
        state.myLibrary.page = action.meta.arg?.page || 1;
      })
      .addCase(fetchMyLibrary.rejected, (state, action) => {
        state.myLibrary.isLoading = false;
        state.myLibrary.error = action.payload;
      })
      .addCase(fetchBookById.pending, state => {
        state.currentBook.isLoading = true;
        state.currentBook.error = null;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.currentBook.isLoading = false;
        state.currentBook.data = action.payload.data;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.currentBook.isLoading = false;
        state.currentBook.error = action.payload;
      });
  },
});

export const { clearCurrentBook, nextRecommendedPage, prevRecommendedPage } =
  sliceBooks.actions;

export default sliceBooks.reducer;
