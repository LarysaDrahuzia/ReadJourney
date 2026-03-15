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
  calcPagesRead,
  getReadingMinutes,
  getReadPercent,
} from '../../utils/readingUtils.js';

const Diary = () => {
  const dispatch = useDispatch();
  const bookId = useSelector(selectCurrentBookId);
  const book = useSelector(selectCurrentBook);
  const progress = useSelector(selectReadingProgress);

  if (!progress.length) {
    return <p>No reading progress yet</p>;
  }

  const handleDelete = item => {
    if (!bookId) {
      console.error('Book ID is missing');
      return;
    }
    dispatch(
      deleteReading({
        bookId,
        readingId: item._id,
      })
    );
  };

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
        {progress.map(item => {
          const lastReadingId = [...progress].sort(
            (a, b) => new Date(b.startReading) - new Date(a.startReading)
          )[0]._id;
          const isLast = item._id === lastReadingId;

          const pagesRead = calcPagesRead(item.startPage, item.finishPage);

          const minutes = getReadingMinutes(
            item.startReading,
            item.finishReading
          );

          const percent = getReadPercent(pagesRead, book.totalPages);

          return (
            <li key={item._id} className={css.item}>
              <div className={css.header}>
                <div className={css.dateBlock}>
                  {isLast ? (
                    <RectangleActiveIcon />
                  ) : (
                    <RectangleNotActiveIcon />
                  )}

                  <span className={css.date}>
                    {formatDate(item.startReading)}
                  </span>
                </div>
                <span className={css.pagesEnd}>{pagesRead} pages</span>
              </div>

              <div className={css.stats}>
                <div className={css.leftStats}>
                  <span className={css.percentRead}>{percent}%</span>
                  <span className={css.time}>{minutes} minutes</span>
                </div>

                <div className={css.rightStats}>
                  <div className={css.actions}>
                    <img src="/chartDiary.svg" alt="Chart Diary" />
                    <button
                      className={css.deleteBtn}
                      disabled={!bookId}
                      onClick={() => handleDelete(item)}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                  <div className={css.perHour}>
                    <span className={css.pagesNumber}>
                      {(item.speed * 60).toFixed(0)} pages
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
