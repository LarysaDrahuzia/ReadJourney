export const formatDate = iso => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('uk-UA');
};

/**
 * Кількість прочитаних сторінок за сесію
 */

export const calcPagesRead = (startPage = 0, finishPage = 0) =>
  Math.max(finishPage - startPage, 0);

/**
 * Загальна кількість прочитаних сторінок
 */
export const getTotalPagesRead = progress => {
  if (!Array.isArray(progress)) return 0;

  return progress.reduce((sum, item) => {
    return sum + calcPagesRead(item.startPage, item.finishPage);
  }, 0);
};

/**
 * Відсоток прочитаної книги
 */
export const getReadPercent = (pagesRead, totalPages) => {
  if (!totalPages || pagesRead <= 0) return 0;
  return ((pagesRead / totalPages) * 100).toFixed(1);
};

/**
 * Час читання в хвилинах однієї сесії
 */
export const getReadingMinutes = (start, finish) => {
  if (!start || !finish) return 0;

  const diff = new Date(finish) - new Date(start);

  if (diff <= 0) return 0;

  return diff / 60000;
};
/**
 * Загальний час читання в хвилинах
 */
export const getTotalMinutes = progress => {
  if (!Array.isArray(progress)) return 0;

  return progress.reduce((sum, item) => {
    return sum + getReadingMinutes(item.startReading, item.finishReading);
  }, 0);
};

/**
 * Перевід хвилин у години + хвилини
 */
export const formatReadingTime = totalMinutes => {
  const minutes = Math.floor(totalMinutes);
  const hours = Math.floor(minutes / 60);

  return {
    hours,
    minutes: minutes % 60,
  };
};

/**
 * Сторінок залишилось
 */

export const getPagesLeft = (progress, totalPages) => {
  if (!Array.isArray(progress) || !progress.length) return totalPages;

  const lastPage = Math.max(...progress.map(item => item.finishPage || 0));

  return Math.max(totalPages - lastPage, 0);
};

/**
 * Середня швидкість читання (pages/hour)
 */

export const getAverageReadingSpeed = progress => {
  if (!Array.isArray(progress)) return 0;

  const { totalPages, totalMinutes } = progress.reduce(
    (acc, item) => {
      if (!item.finishReading) return acc;

      const pages = item.finishPage - item.startPage;
      const minutes =
        (new Date(item.finishReading) - new Date(item.startReading)) / 60000;

      if (pages > 0 && minutes > 0) {
        acc.totalPages += pages;
        acc.totalMinutes += minutes;
      }

      return acc;
    },
    { totalPages: 0, totalMinutes: 0 }
  );

  if (!totalMinutes) return 0;

  return totalPages / (totalMinutes / 60);
};
