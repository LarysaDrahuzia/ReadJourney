import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  nextRecommendedPage,
  prevRecommendedPage,
} from '../../redux/books/slice.js';
import {
  selectRecommendedBooks,
  selectRecommendedPage,
  selectRecommendedTotalPages,
} from '../../redux/books/selectors.js';
import { ChevronLeft, ChevronRight } from '../Icons/Icons.jsx';
import BooksList from '../BooksList/BooksList.jsx';
import Button from '../Button/Button.jsx';
import css from './RecommendedBooks.module.css';

const RecommendedBooks = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectRecommendedBooks);
  const page = useSelector(selectRecommendedPage);
  const totalPages = useSelector(selectRecommendedTotalPages);

  const [currentIndex, setCurrentIndex] = useState(0);

  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const itemsPerPage = isDesktop ? 10 : isTablet ? 8 : 2;

  useEffect(() => {
    setCurrentIndex(0);
  }, [books]);

  // обробники кнопок
  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerPage;

    if (nextIndex < books.length) {
      // в межах поточної сторінки
      setCurrentIndex(nextIndex);
    } else {
      // перехід на наступну сторінку бекенду
      if (page < totalPages) {
        dispatch(nextRecommendedPage());
        setCurrentIndex(0);
      }
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerPage;

    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      if (page > 1) {
        dispatch(prevRecommendedPage());
        setCurrentIndex(0);
      }
    }
  };

  // видима частина книги
  const visibleBooks = books.slice(currentIndex, currentIndex + itemsPerPage);

  const canGoNext =
    currentIndex + itemsPerPage >= books.length && page === totalPages;

  const canGoPrev = currentIndex === 0 || page === 1;

  return (
    <div className={css.block}>
      <div className={css.subsection}>
        <h1 className={css.title}>Recommended</h1>
        <div className={css.btn}>
          <Button
            type="button"
            variant="icon"
            onClick={handlePrev}
            disabled={canGoPrev}
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
