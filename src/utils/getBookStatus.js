export const getBookStatus = book => {
  if (book.progress?.some(p => !p.finishReading)) {
    return 'in-progress';
  }
  return book.status || 'unread';
};
