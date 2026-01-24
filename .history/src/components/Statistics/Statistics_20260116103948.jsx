import { useSelector } from 'react-redux';
import {
  selectCurrentBook,
  selectReadingProgress,
} from '../../redux/books/selectors';
import { HourglassIcon, PieChartIcon } from '../Icons/Icons.jsx';
import {
  getTotalPagesRead,
  getReadPercent,
  getTotalMinutes,
  formatReadingTime,
} from '../../utils/readingUtils.js';
import css from './Statistics.module.css';

const Statistics = () => {
  const book = useSelector(selectCurrentBook);
  const progress = useSelector(selectReadingProgress);

  if (!book || !progress.length) return null;

  const pagesRead = getTotalPagesRead(progress);
  const percent = getReadPercent(pagesRead, book.totalPages);
  const totalMinutes = getTotalMinutes(progress);
  const { hours, minutes } = formatReadingTime(totalMinutes);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (percent / 100) * circumference;

  return (
    <div className={css.statistics}>
      <div className={css.header}>
        <h3 className={css.title}>Statistics</h3>

        <div className={css.icons}>
          <HourglassIcon />
          <PieChartIcon />
        </div>
      </div>

      <div className={css.chartWrapper}>
        <svg width="120" height="120" className={css.chart}>
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#2c2c2c"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#4caf50"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>

        <span className={css.percent}>{percent}%</span>
      </div>

      <div className={css.info}>
        <p className={css.pages}>{totalPagesRead} pages read</p>

        <p className={css.time}>
          {hours} hours {minutes} minutes
        </p>
      </div>
    </div>
  );
};

export default Statistics;
