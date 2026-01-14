import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecommendedBooks,
  fetchBookById,
  fetchMyLibrary,
  addBook,
  addToMyLibrary,
  removeFromMyLibrary,
  myBookReadingStart,
  myBookReadingFinish,
} from './operations.js';
import { boolean } from 'yup';

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
    isLoading: false,
    error: null,
  },
  currentBook: {
    data: null,
    isLoading: false,
    error: null,
  },
  reading: {
    status: 'unread' | 'in-progress' | 'done',
    progress: [], // Diary
    statistics: null,
    timeLeftToRead: null,
    isLoading: false,
    error: null,
  },
  addBook: {
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
      state.reading = initialState.reading;
    },
    clearReadingError(state) {
      state.reading.error = null;
    },
    resetReading(state) {
      state.reading = initialState.reading;
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
    setRecommendedPage(state, action) {
      state.recommended.page = action.payload;
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
        state.recommended.items = action.payload.results || [];
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
        state.myLibrary.items = action.payload;
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
        state.currentBook.data = action.payload;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.currentBook.isLoading = false;
        state.currentBook.error = action.payload;
      })

      .addCase(addBook.pending, state => {
        state.addBook.isLoading = true;
        state.addBook.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.addBook.isLoading = false;
        state.myLibrary.items.unshift(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.addBook.isLoading = false;
        state.addBook.error = action.payload;
      })

      .addCase(addToMyLibrary.fulfilled, (state, action) => {
        const exists = state.myLibrary.items.some(
          book => book._id === action.payload._id
        );
        if (!exists) {
          state.myLibrary.items.push(action.payload);
        }
      })

      .addCase(removeFromMyLibrary.fulfilled, (state, action) => {
        state.myLibrary.items = state.myLibrary.items.filter(
          book => book._id !== action.payload
        );
      })

      .addCase(myBookReadingStart.pending, state => {
        state.reading.isLoading = true;
        state.reading.error = null;
      })
      .addCase(myBookReadingStart.fulfilled, (state, action) => {
        state.reading.isLoading = false;
        state.reading.progress = action.payload.progress;
      })
      .addCase(myBookReadingStart.rejected, (state, action) => {
        state.reading.isLoading = false;
        state.reading.error = action.payload;
      })

      .addCase(myBookReadingFinish.pending, state => {
        state.reading.isLoading = true;
        state.reading.error = null;
      })
      .addCase(myBookReadingFinish.fulfilled, (state, action) => {
        state.reading.isLoading = false;
        state.reading.progress = action.payload.progress;
        state.reading.timeLeftToRead = action.payload.timeLeftToRead;
      })
      .addCase(myBookReadingFinish.rejected, (state, action) => {
        state.reading.isLoading = false;
        state.reading.error = action.payload;
      });
  },
});

export const {
  clearCurrentBook,
  clearReadingError,
  resetReading,
  nextRecommendedPage,
  prevRecommendedPage,
  setRecommendedPage,
} = sliceBooks.actions;

export default sliceBooks.reducer;
