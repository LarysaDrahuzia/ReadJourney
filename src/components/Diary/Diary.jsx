import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectReadingProgress,
  selectCurrentBookId,
  selectCurrentBook,
} from '../../redux/books/selectors.js';
import { deleteReading } from '../../redux/books/operations.js';
import {
  HourglassIcon,
  PieChartIcon,
  RectangleActiveIcon,
  RectangleNotActiveIcon,
  TrashIcon,
} from '../Icons/Icons.jsx';
import {
  formatDate,
  getReadPercent,
  groupReadingByDay,
  getPagesLeftByDay,
} from '../../utils/readingUtils.js';
import css from './Diary.module.css';

const Diary = () => {
  const dispatch = useDispatch();
  const bookId = useSelector(selectCurrentBookId);
  const book = useSelector(selectCurrentBook);
  const progress = useSelector(selectReadingProgress);

  const groupedProgress = useMemo(
    () => groupReadingByDay(progress),
    [progress]
  );

  // const lastPage = useMemo(() => {
  //   if (!progress.length) return 0;

  //   return Math.max(...progress.map(item => item.finishPage || 0));
  // }, [progress]);

  // const isFinished = lastPage >= (book?.totalPages || 0);

  const handleDelete = item => {
    if (!bookId) return;

    dispatch(
      deleteReading({
        bookId,
        readingId: item._id,
      })
    );
  };

  const finalData = useMemo(() => {
    let accumulatedPages = 0;

    const reversed = [...groupedProgress].reverse();

    const withAccumulation = reversed.map(day => {
      accumulatedPages += day.pagesRead;

      return {
        ...day,
        accumulatedPages,
      };
    });

    return withAccumulation.reverse();
  }, [groupedProgress]);

  return (
    <div className={css.diary}>
      <div className={css.premier}>
        <h3 className={css.title}>Diary</h3>
        <div className={css.premierIcon}>
          <HourglassIcon className={css.icon} />
          <PieChartIcon />
        </div>
      </div>
      <ul className={css.list}>
        {finalData.map((day, index) => {
          const isFirst = index === 0;

          const pagesRead = day.pagesRead;

          const minutes = day.minutes;

          const percent = getReadPercent(
            day.accumulatedPages,
            book?.totalPages || 0
          );

          const pagesLeft = getPagesLeftByDay(
            day.accumulatedPages,
            book?.totalPages || 0
          );

          return (
            <li key={day.date} className={css.item}>
              <div className={css.header}>
                <div className={css.dateBlock}>
                  {isFirst ? (
                    <RectangleActiveIcon />
                  ) : (
                    <RectangleNotActiveIcon />
                  )}

                  <span className={css.date}>{formatDate(day.date)}</span>
                </div>
                <span className={css.pagesEnd}>{pagesLeft} pages</span>
              </div>

              <div className={css.stats}>
                <div className={css.leftStats}>
                  <span className={css.percentRead}>{percent.toFixed(1)}%</span>
                  <span className={css.time}>
                    {Math.round(minutes)} minutes
                  </span>
                </div>

                <div className={css.rightStats}>
                  <div className={css.actions}>
                    <img src="/chartDiary.svg" alt="Chart Diary" />
                    <button
                      className={css.deleteBtn}
                      disabled={!bookId}
                      onClick={() => handleDelete(day.items[0])}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                  <div className={css.perHour}>
                    <span className={css.pagesNumber}>{pagesRead} pages</span>
                    <span className={css.perHourText}>per hour</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Diary;
