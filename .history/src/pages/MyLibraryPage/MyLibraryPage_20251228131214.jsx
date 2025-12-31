import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyLibraryBooks,
  selectMyLibraryError,
  selectMyLibraryLoading,
  selectMyLibraryPage,
} from '../../redux/books/selectors.js';
import { fetchMyLibrary } from '../../redux/books/operations.js';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import MyLibraryBooks from '../../components/MyLibraryBooks/MyLibraryBooks.jsx';
import { filtersForLibrary } from '../../components/FiltersBooks/filtersConfig.js';
import css from './MyLibraryPage.module.css';

const MyLibraryPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectMyLibraryLoading);
  const isError = useSelector(selectMyLibraryError);
  const page = useSelector(selectMyLibraryPage);

  useEffect(() => {
    dispatch(fetchMyLibrary({ page }));
  }, [dispatch, page]);

  const handleFilter = filters => {
    dispatch(fetchMyLibrary({ page: 1, ...filters }));
  };

  return (
    <div className={`container ${css.pageWrap}`}>
      {isLoading && <Loader />}
      {isError && <Error>Error! Try Later!</Error>}
      <Dashboard onFilter={handleFilter} fields={filtersForLibrary} />
      <MyLibraryBooks />
    </div>
  );
};

export default MyLibraryPage;
