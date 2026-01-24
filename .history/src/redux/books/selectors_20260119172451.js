//  Recommended
export const selectRecommendedBooks = state => state.books.recommended.items;
export const selectRecommendedPage = state => state.books.recommended.page;
export const selectRecommendedTotalPages = state =>
  state.books.recommended.totalPages;
export const selectRecommendedLoading = state =>
  state.books.recommended.isLoading;
export const selectRecommendedError = state => state.books.recommended.error;

//  My Library

export const selectMyLibraryBooks = state => state.books.myLibrary.items;
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
export const selectReadingLoading = state => state.books.reading.isLoading;
export const selectReadingError = state => state.books.reading.error;
export const selectReadingTimeLeft = state =>
  state.books.reading.timeLeftToRead;
export const selectReadingProgress = state =>
  Array.isArray(state.books.reading.progress)
    ? state.books.reading.progress
    : [];
export const selectReadingStatistics = state => state.books.reading.statistics;
export const selectIsReadingNow = state => state.books.reading.progress.some(
  item => !item.finishReading;
);
