import { useSelector } from 'react-redux';
import {
  selectCurrentBook,
  selectReadingStatus,
} from '../../redux/books/selectors.js';

import css from './MyBook.module.css';
import DetailsReading from '../DetailsReading/DetailsReading.jsx';
import ReadingIndicator from '../ReadingIndicator/ReadingIndicator.jsx';

const MyBook = () => {
  const book = useSelector(selectCurrentBook);
  const readingStatus = useSelector(selectReadingStatus);

  if (!book) return null;

  const { title, author, imageUrl } = book;

  return (
    <div className={css.wrapper}>
      <h1 className={css.pageTitle}>My reading</h1>
      <div className={css.book}>
        <img src={imageUrl} alt={title} className={css.image} />

        <div className={css.info}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.author}>{author}</p>
        </div>
        <ReadingIndicator />
      </div>

      <DetailsReading />
    </div>
  );
};

export default MyBook;
