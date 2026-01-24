import { useSelector } from 'react-redux';
import {
  selectReadingStatistics,
  selectReadingTimeLeft,
} from '../../redux/books/selectors';
import css from './Statistics.module.css';

const Statistics = () => {
  const stats = useSelector(selectReadingStatistics);
  const timeLeft = useSelector(selectReadingTimeLeft);

  if (!stats) return null;

  // const { readPages, totalTime, speed, progress } = stats;

  return (
    <div className={css.statistics}>
      <div className={css.premier}>
        <h3 className={css.title}>Statistics</h3>
        <div className={css.premierIcon}>
          <HourglassIcon />
          <PieChartIcon />
        </div>
      </div>

      <ul className={css.list}>
        <li>
          <span className={css.graph}>100%</span>
          <span className={css.graphRead}></span>
        </li>
        <li>
          <span className={css.marker}></span>
          <span className={css.percentRead}>{progress}%</span>
        </li>

        <li>
          <span>{totalTime} min</span>
        </li>

        <li>
          <span>{progress}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
