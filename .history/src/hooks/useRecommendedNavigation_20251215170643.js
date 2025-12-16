import { useState, useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  nextRecommendedPage,
  prevRecommendedPage,
} from '../redux/books/slice.js';

export const useRecommendedNavigation = ({ books, page, totalPages }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const itemsPerPages = isDesktop ? 10 : isTablet ? 8 : 2;

  // скидання індексу при нових книгах
  useEffect(() => {
    setCurrentIndex(0);
  }, [books]);

  const isAtStart = page === 1 && currentIndex === 0;
  const isAtEnd =
    page === totalPages && currentIndex + itemsPerPages >= books.length;

  const canGoPrev = !isAtStart;
  const canGoNext = !isAtEnd;

  const handleNext = () => {
    if (isAtEnd) return;

    const nextIndex = currentIndex + itemsPerPages;

    if (nextIndex < books.length) {
      setCurrentIndex(nextIndex);
    } else {
      dispatch(nextRecommendedPage());
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (isAtStart) return;

    const prevIndex = currentIndex - itemsPerPages;

    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      dispatch(prevRecommendedPage());
      // setCurrentIndex(Math.max(books.length - itemsPerPages, 0));
    }
  };

  const visibleBooks = useMemo(() => {
    return books.slice(currentIndex, currentIndex + itemsPerPages);
  }, [books, currentIndex, itemsPerPages]);

  return { visibleBooks, canGoPrev, canGoNext, handlePrev, handleNext };
};
