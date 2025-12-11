import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';
import { fetchRecommendedBooks } from '../../redux/books/operations.js';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks.jsx';
import { filtersForRecommended } from '../../components/FiltersBooks/filtersConfig.js';

import {
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

const RecommendedPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectRecommendedLoading);
  const isError = useSelector(selectRecommendedError);
  const page = useSelector(selectRecommendedPage);
  const totalPages = useSelector(selectRecommendedTotalPages);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page }));
  }, [dispatch, page]);

  const handleFilter = filters => {
    dispatch(fetchRecommendedBooks({ page: 1, ...filters }));
  };

  console.log('RecommendedPage render:', { page, totalPages });

  return (
    <div className={`container ${css.pageWrap}`}>
      {isLoading && <Loader />}
      {isError && <Error>Error! TryLater!</Error>}
      <Dashboard onFilter={handleFilter} fields={filtersForRecommended} />
      <RecommendedBooks />
    </div>
  );
};

export default RecommendedPage;
