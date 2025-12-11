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

  // const [currentIndex, setCurrentIndex] = useState(0);

  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const itemsPerPage = isDesktop ? 10 : isTablet ? 8 : 2;

  // // обмеження
  // const maxIndex = Math.max(0, books.length - itemsPerPage);

  // // обробники кнопок
  // const handleNext = () => {
  //   setCurrentIndex(prev => Math.min(prev + itemsPerPage, maxIndex));
  // };

  // const handlePrev = () => {
  //   setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0));
  // };

  // // видима частина книги
  // const visibleBooks = books.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={css.block}>
      <div className={css.subsection}>
        <h1 className={css.title}>Recommended</h1>
        <div className={css.btn}>
          <Button
            type="button"
            variant="icon"
            onClick={() => dispatch(prevRecommendedPage())}
            disabled={page === 1}
            className={css.btnPrev}
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="icon"
            onClick={() => dispatch(nextRecommendedPage())}
            disabled={page === totalPages}
            className={css.btnNext}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <BooksList books={books} />
    </div>
  );
};

export default RecommendedBooks;
