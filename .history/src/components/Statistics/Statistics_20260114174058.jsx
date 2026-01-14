import { useSelector } from 'react-redux';
import { selectReadingStatistics } from '../../redux/books/selectors';
import css from './Statistics.module.css';

const Statistics = () => {
  const stats = useSelector(selectReadingStatistics);

  if (!stats) return null;

  const { totalPages, readPages, totalTime, averageSpeed, progress } = stats;

  return (
    <div className={css.statistics}>
      <h3 className={css.title}>Statistics</h3>

      <ul className={css.list}>
        {/* <li>
          <span>Total pages:</span>
          <span>{totalPages}</span>
        </li> */}

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
