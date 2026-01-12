import { useSelector } from 'react-redux';
import { selectCurrentBook } from '../../redux/books/selectors.js';

import css from './MyBook.module.css';
import DetailsReading from '../DetailsReading/DetailsReading.jsx';

const MyBook = () => {
  const book = useSelector(selectCurrentBook);

  if (!book) return null;

  const { title, author, imageUrl } = book;

  return (
    <section className={css.wrapper}>
      <h1 className={css.pageTitle}>My reading</h1>
      <div className={css.book}>
        <img src={imageUrl} alt={title} className={css.image} />

        <div className={css.info}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.author}>{author}</p>
        </div>
        <div className={css.signStart}>
          <span className={css.round}></span>
          <span className={css.circle}></span>
        </div>
      </div>

      <DetailsReading />
    </section>
  );
};

export default MyBook;
