import { ChevronLeft, ChevronRight } from '../Icons/Icons.jsx';
import BooksList from '../BooksList/BooksList.jsx';
import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
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
      <BooksList />
    </div>
  );
};

export default RecommendedBooks;
