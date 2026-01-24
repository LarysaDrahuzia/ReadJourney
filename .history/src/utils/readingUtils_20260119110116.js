export const formatDate = iso => new Date(iso).toLocaleDateString('uk-UA');

export const calcMinutes = (start, finish) =>
  Math.round((new Date(finish) - new Date(start)) / 60000);

export const calcPagesRead = (startPage, finishPage) => finishPage - startPage;

/**
 * Загальна кількість прочитаних сторінок
 */
export const getTotalPagesRead = progress =>
  progress.reduce(
    (sum, { startPage, finishPage }) => sum + (finishPage - startPage),
    0
  );

/**
 * Відсоток прочитаної книги
 */
export const getReadPercent = (pagesRead, totalPages) => {
  if (!totalPages) return 0;
  return Math.round((pagesRead / totalPages) * 100);
};

/**
 * Загальний час читання в хвилинах
 */
export const getTotalMinutes = progress =>
  progress.reduce((sum, item) => {
    const start = new Date(item.startReading);
    const end = new Date(item.finishReading);
    return sum + Math.round((end - start) / 60000);
  }, 0);

/**
 * Перевід хвилин у години + хвилини
 */
export const formatReadingTime = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
};
