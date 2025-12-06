import { ChevronLeft, ChevronRight } from '../Icons/Icons.jsx';
import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  return (
    <div className={css.block}>
      <div className={css.}>
        <h1 className={css.title}>Recommended</h1>
        <div className={css.btn}>
          <button className={css.btnPrev}>
            <ChevronLeft />
          </button>
          <button className={css.Next}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
