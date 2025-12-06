import { useSelector } from 'react-redux';
import { selectRecommendedBooks } from '../../redux/books/selectors.js';
import { ChevronLeft, ChevronRight } from '../Icons/Icons.jsx';
import BooksList from '../BooksList/BooksList.jsx';
import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  const books = useSelector(selectRecommendedBooks);

  return (
    <div className={css.block}>
      <div className={css.subsection}>
        <h1 className={css.title}>Recommended</h1>
        <div className={css.btn}>
          <button type="button" className={css.btnPrev}>
            <ChevronLeft />
          </button>
          <button type="button" className={css.btnNext}>
            <ChevronRight />
          </button>
        </div>
      </div>
      {books > 0 && <BooksList books={books} />}
    </div>
  );
};

export default RecommendedBooks;
