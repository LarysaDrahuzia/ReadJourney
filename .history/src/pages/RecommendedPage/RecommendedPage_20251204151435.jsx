import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';
import { fetchRecommendedBooks } from '../../redux/books/operations.js';
import FiltersBooks from '../../components/FiltersBooks/FiltersBooks.jsx';
import { filtersForRecommended } from '../../components/FiltersBooks/filtersConfig.js';

import {
  selectRecommendedBooks,
  selectRecommendedError,
  selectRecommendedLoading,
  selectRecommendedPage,
  selectRecommendedTotalPages,
} from '../../redux/books/selectors.js';

import css from './RecommendedPage.module.css';
import {
  selectFilterAuthor,
  selectFilterTitle,
} from '../../redux/filters/selectors.js';
import { clearCurrentBook } from '../../redux/books/slice.js';
import { resetFilters } from '../../redux/filters/slice.js';

const RecommendedPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectRecommendedLoading);
  const isError = useSelector(selectRecommendedError);
  const page = useSelector(selectRecommendedPage);
  const totalPages = useSelector(selectRecommendedTotalPages);
  const books = useSelector(selectRecommendedBooks);

  const title = useSelector(selectFilterTitle);
  const author = useSelector(selectFilterAuthor);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page, title, author }));
  }, [dispatch, page, title, author]);

  const handleFilter = filters => {
    dispatch(resetFilters());
    dispatch(fetchRecommendedBooks({ page: 1, ...filters }));
  };

  return (
    <div className={`container ${css.pageWrap}`}>
      <FiltersBooks onFilter={handleFilter} fields={filtersForRecommended} />
      <div className={css.recommendedBlok}>
        
    </div>
  );
};

export default RecommendedPage;
