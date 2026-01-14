export const formatDate = iso => new Date(iso).toLocaleDateString('uk-UA');

export const calcMinutes = (start, finish) =>
  Math.round((new Date(finish) - new Date(start)) / 60000);

export const calcPagesRead = (startPage, finishPage) => finishPage - startPage;

export const calcPercent = (pagesRead, totalPages) =>
  Math.round((pagesRead / totalPages) * 100);
