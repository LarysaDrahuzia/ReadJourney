import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';
import { fetchRecommendedBooks } from '../../redux/books/operations.js';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks.jsx';
import { filtersForRecommended } from '../../components/FiltersBooks/filtersConfig.js';

import css from './RecommendedPage.module.css';

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
      <Dashboard onFilter={handleFilter} fields={filtersForRecommended} />
      <RecommendedBooks />
    </div>
  );
};

export default RecommendedPage;
