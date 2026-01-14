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

const Diary = () => {
  const dispatch = useDispatch();
  const bookId = useSelector(selectCurrentBookId);
  const progress = useSelector(selectReadingProgress);

  if (!progress.lenght) {
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
          <HourglassIcon />
          <PieChartIcon />
        </div>
      </div>
      <ul className={css.list}>
        {progress.map(item => (
          <li key={item._id} className={css.item}>
            <div className={css.row}>
              <RectangleActiveIcon />
              <span className={css.date}>{item.date}</span>
              <span className={css.pagesEnd}>{item.pages} pages</span>
            </div>
            <div className={css.row}>
              <span className={css.percentRead}>{item.percent}%</span>
              <span className={css.time}>{item.time} min</span>
            </div>
            <div className={css.row}>
              <img src="/chartDiary.svg" alt="Chart Diary" />
              <TrashIcon />
              <span className={css.page}>{item.speed} pages per hour</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
