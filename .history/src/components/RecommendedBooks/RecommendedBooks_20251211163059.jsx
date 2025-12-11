import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
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
  const books = useSelector(selectRecommendedBooks);

  const [currentIndex, setCurrentIndex] = useState(0);

  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const itemsPerPage = isDesktop ? 10 : isTablet ? 8 : 2;

  // обмеження
  const maxIndex = Math.max(0, books.length - itemsPerPage);

  // обробники кнопок
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + itemsPerPage, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0));
  };

  // видима частина книги
  const visibleBooks = books.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={css.block}>
      <div className={css.subsection}>
        <h1 className={css.title}>Recommended</h1>
        <div className={css.btn}>
          <Button
            type="button"
            variant="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={css.btnPrev}
          >
            <ChevronLeft className={css.icon} />
          </Button>
          <Button
            type="button"
            variant="icon"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={css.btnNext}
          >
            <ChevronRight className={css.icon} />
          </Button>
        </div>
      </div>
      <BooksList books={visibleBooks} />
    </div>
  );
};

export default RecommendedBooks;
