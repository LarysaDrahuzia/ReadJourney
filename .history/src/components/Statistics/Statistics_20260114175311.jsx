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
      <h3 className={css.title}>Statistics</h3>

      <ul className={css.list}>
        <li>
          <span>{readPages} read pages</span>
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
