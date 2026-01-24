import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredMyLibrary,
  selectMyLibraryError,
  selectMyLibraryLoading,
} from '../../redux/books/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import { fetchMyLibrary } from '../../redux/books/operations.js';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import MyLibraryBooks from '../../components/MyLibraryBooks/MyLibraryBooks.jsx';
import { filtersForLibrary } from '../../components/FiltersBooks/filtersConfig.js';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';
import css from './MyLibraryPage.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

const MyLibraryPage = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectMyLibraryLoading);
  const isError = useSelector(selectMyLibraryError);
  const books = useSelector(selectFilteredMyLibrary);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchMyLibrary());
    }
  }, [dispatch, isLoggedIn]);

  const handleFilter = filters => {
    dispatch(setFilters(filters));
  };

  return (
    <div className={`container ${css.pageWrap}`}>
      {isLoading && <Loader />}
      {!isLoading && isError && <Error>Error! Try Later!</Error>}
      <Dashboard onFilter={handleFilter} fields={filtersForLibrary} />
      <MyLibraryBooks books={books} />
    </div>
  );
};

export default MyLibraryPage;
