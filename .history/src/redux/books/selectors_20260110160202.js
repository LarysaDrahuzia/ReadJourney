import { createSelector } from '@reduxjs/toolkit';

//  Recommended
export const selectRecommendedBooks = state => state.books.recommended.items;
export const selectRecommendedPage = state => state.books.recommended.page;
export const selectRecommendedTotalPages = state =>
  state.books.recommended.totalPages;
export const selectRecommendedLoading = state =>
  state.books.recommended.isLoading;
export const selectRecommendedError = state => state.books.recommended.error;

//  My Library
// export const selectMyLibraryBooks = createSelector(
//   state => state.books.myLibrary.items,
//   items =>
//     items.map(book => ({
//       id: book._id,
//       title: book.title || book.bookTitle,
//       author: book.author || book.bookAuthor,
//       imageUrl: book.imageUrl || book.image || null,
//       status: book.status ?? null,
//       totalPages: book.totalPages || book.pages || 0,
//     }))
// );
export const selectMyLibraryBooks = state => state.books.myLibrary.items;
export const selectMyLibraryPage = state => state.books.myLibrary.page;
export const selectMyLibraryTotalPages = state =>
  state.books.myLibrary.totalPages;
export const selectMyLibraryLoading = state => state.books.myLibrary.isLoading;
export const selectMyLibraryError = state => state.books.myLibrary.error;

//  Current book
export const selectCurrentBook = state => state.books.currentBook.data;
export const selectCurrentBookId = state => state.books.currentBook.data?._id;
export const selectCurrentBookStatus = state =>
  state.books.currentBook.data?.status;

//  Add book
export const selectAddBookLoading = state => state.books.addBook.isLoading;
export const selectAddBookError = state => state.books.addBook.error;

// Reading book
export const selectReadingBookLoading = state => state.books.reading.isLoading;
export const selectReadingBookError = state => state.books.reading.error;
export const selectIsReadingBook = state =>
  state.books.currentBook.data?.status === 'in-progress';
// export const selectReadingDiary = createSelector(
//   state => state.books.reading.progress,
//   progress =>
//     progress
//       ?.filter(item => item.status === 'inactive')
//       .map(item => ({
//         startPage: item.startPage,
//         finishPage: item.finishPage,
//         startReading: item.startReading,
//         finishReading: item.finishReading,
//         speed: item.speed,
//       })) || []
// );

// export const selectReadingStatistics = createSelector(
//   state => state.books.reading.progress,
//   state => state.books.currentBook.data?.totalPages,
//   (process = [], totalPages = 0) => {
//     const readPages = process.reduce(
//       (sum, p) => sum + (p.finishPage - p.startPage || 0),
//       0
//     );
//     return {
//       percentage: totalPages ? Math.round((readPages / totalPages) * 100) : 0,
//       readPages,
//     };
//   }
// );

export const selectReadingProgress = state => state.books.reading.progress;
