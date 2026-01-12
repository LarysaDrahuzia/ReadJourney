import { useSelector } from 'react-redux';
import AddReading from '../AddReading/AddReading.jsx';

import { selectCurrentBook } from '../../redux/books/selectors.js';

import css from './MyBook.module.css';

const MyBook = () => {
  const book = useSelector(selectCurrentBook);

  if (!book) return null;

  const { title, author, imageUrl, totalPages, status } = book;

  return (
    <section className={css.wrapper}>
      <h1 className={css.pageTitle}>My reading</h1>
      <div className={css.book}>
        <img src={imageUrl} alt={title} className={css.image} />

        <div className={css.info}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.author}>{author}</p>

          {/* <p className={`${css.status} ${css[status]}`}>Status: {status}</p> */}
        </div>
        <div className={css.blok}></div>
      </div>

      {status !== 'done' && <AddReading />}
    </section>
  );
};

export default MyBook;
