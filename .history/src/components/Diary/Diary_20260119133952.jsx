import { useDispatch, useSelector } from 'react-redux';
import {
  selectReadingProgress,
  selectCurrentBookId,
} from '../../redux/books/selectors.js';
import { deleteReading } from '../../redux/books/operations.js';
import css from './Diary.module.css';
import {
  HourglassIcon,
  PieChartIcon,
  RectangleActiveIcon,
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
  const progress = useSelector(selectReadingProgress);

  if (!progress.length) {
    return <p>No reading progress yet</p>;
  }

  const handleDelete = readingId => {
    dispatch(deleteReading({ bookId, readingId }));
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
  const pagesRead = calcPagesRead(
    item.startPage,
    item.finishPage
  );

  const minutes = getReadingMinutes(
    item.startReading,
    item.finishReading
  );

  const percent = calcPercentPerDay(
    pagesRead,
    book.totalPages
          );
          
          return (
          <li key={item._id} className={css.item}>
            <div className={css.row}>
              <RectangleActiveIcon />
              <span className={css.date}>{formatDate(item.startReading)}</span>
              <span className={css.pagesEnd}>{pagesRead} pages</span>
            </div>
            <div className={css.row}>
              <span className={css.percentRead}>
                {percent}%
              </span>
              <span className={css.time}>
                {minutes} min
              </span>
            </div>
            <div className={css.row}>
              <img src="/chartDiary.svg" alt="Chart Diary" />
              <button onClick={() => handleDelete(item._id)}>
                <TrashIcon />
              </button>
              <span className={css.page}>{(item.speed * 60).toFixed(1)} pages per hour</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
