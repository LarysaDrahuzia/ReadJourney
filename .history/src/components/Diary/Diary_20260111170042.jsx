import { useSelector } from 'react-redux';
import { selectReadingProgress } from '../../redux/books/selectors.js';
import css from './Diary.module.css';

const Diary = () => {
  const progress = useSelector(selectReadingProgress);

  if (!progress.lenght) {
    return null;
  }

  return (
    <div className={css.diary}>
      <h3 className={css.title}>Diary</h3>
      <ul className={css.list}>
        {progress.map(item => (
          <li key={item._id} className={css.item}>
            <div className={css.row}>
              <span className={css.date}>{item.date}</span>
              <span className={css.pages}>{item.pages} pages</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
