import { useDispatch, useSelector } from 'react-redux';
import {
  selectReadingProgress,
  selectCurrentBookId,
  selectCurrentBook,
} from '../../redux/books/selectors.js';
import { deleteReading } from '../../redux/books/operations.js';
import css from './Diary.module.css';
import {
  HourglassIcon,
  PieChartIcon,
  RectangleActiveIcon,
  RectangleNotActiveIcon,
  TrashIcon,
} from '../Icons/Icons.jsx';
import {
  formatDate,
  // calcPagesRead,
  // getReadingMinutes,
  getReadPercent,
  groupReadingByDay,
} from '../../utils/readingUtils.js';

const Diary = () => {
  const dispatch = useDispatch();
  const bookId = useSelector(selectCurrentBookId);
  const book = useSelector(selectCurrentBook);
  const progress = useSelector(selectReadingProgress);

  if (!progress.length) {
    return <p>No reading progress yet</p>;
  }

  // const sortedProgress = [...progress].sort(
  //   (a, b) => new Date(b.startReading) - new Date(a.startReading)
  // );

  const handleDelete = item => {
    if (!book?._id) return;

    dispatch(
      deleteReading({
        bookId: book._id,
        readingId: item._id,
      })
    );
  };

  const groupedProgress = groupReadingByDay(progress);

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
        {groupedProgress.map((day, index) => {
          const isLast = index === 0;

          const pagesRead = day.pagesRead;

          // const minutes = getReadingMinutes(
          //   item.startReading,
          //   item.finishReading
          // );

          const minutes = day.minutes;

          const percent = getReadPercent(day.pagesRead, book.totalPages);

          const speed = minutes > 0 ? pagesRead / (minutes / 60) : 0;

          return (
            <li key={day.date} className={css.item}>
              <div className={css.header}>
                <div className={css.dateBlock}>
                  {isLast ? (
                    <RectangleActiveIcon />
                  ) : (
                    <RectangleNotActiveIcon />
                  )}

                  <span className={css.date}>{formatDate(day.date)}</span>
                </div>
                <span className={css.pagesEnd}>{pagesRead} pages</span>
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
                    <span className={css.pagesNumber}>
                      {speed.toFixed(0)} pages
                    </span>
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
