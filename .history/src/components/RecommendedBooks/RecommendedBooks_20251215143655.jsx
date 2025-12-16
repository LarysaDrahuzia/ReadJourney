import { useSelector } from 'react-redux';
import {
  selectRecommendedBooks,
  selectRecommendedPage,
  selectRecommendedTotalPages,
} from '../../redux/books/selectors.js';
import { ChevronLeft, ChevronRight } from '../Icons/Icons.jsx';
import BooksList from '../BooksList/BooksList.jsx';
import Button from '../Button/Button.jsx';
import css from './RecommendedBooks.module.css';
import { useRecommendedNavigation } from '../../hooks/useRecommendedNavigation.js';

const RecommendedBooks = () => {
  const books = useSelector(selectRecommendedBooks);
  const page = useSelector(selectRecommendedPage);
  const totalPages = useSelector(selectRecommendedTotalPages);

  const { visibleBooks, canGoPrev, canGoNext, handlePrev, handleNext } =
    useRecommendedNavigation({ books, page, totalPages });

  return (
    <div className={css.block}>
      <div className={css.subsection}>
        <h1 className={css.title}>Recommended</h1>
        <div className={css.btn}>
          <Button
            type="button"
            variant="icon"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={css.btnPrev}
          >
            <ChevronLeft className={css.arrow} />
          </Button>
          <Button
            type="button"
            variant="icon"
            onClick={handleNext}
            disabled={!canGoNext}
            className={css.btnNext}
          >
            <ChevronRight className={css.arrow} />
          </Button>
        </div>
      </div>
      <BooksList books={visibleBooks} />
    </div>
  );
};

export default RecommendedBooks;
