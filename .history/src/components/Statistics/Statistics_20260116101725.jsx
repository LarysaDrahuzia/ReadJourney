import { useSelector } from 'react-redux';
import {
  selectCurrentBook,
  selectReadingProgress,
} from '../../redux/books/selectors';
import { HourglassIcon, PieChartIcon } from '../Icons/Icons.jsx';
import css from './Statistics.module.css';

const Statistics = () => {
  const book = useSelector(selectCurrentBook);
  const progress = useSelector(selectReadingProgress);

  if (!book || !progress.length) return null;

  const totalPagesRead = progress.reduce(
    (sum, item) => sum + (item.finishPage - item.startPage),
    0
  );

  const percent = Math.round((totalPagesRead / book.totalPages) * 100);

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
          <span className={css.pageRead}>{speed} pages read</span>
        </li>

        {/* <li>
          <span>{totalTime} min</span>
        </li> */}
      </ul>
    </div>
  );
};

export default Statistics;
