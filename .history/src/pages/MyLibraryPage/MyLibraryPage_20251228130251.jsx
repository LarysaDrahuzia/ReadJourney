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
import css from './MyLibraryPage.module.css';

const MyLibraryPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectMyLibraryLoading);
  const isError = useSelector(selectMyLibraryError);
  const books = useSelector(selectMyLibraryBooks);
  const page = useSelector(selectMyLibraryPage);

  useEffect(() => {
    dispatch(fetchMyLibrary({ page }));
  }, [dispatch, page]);

  return (
    <>
      <Dashboard />
      <MyLibraryBooks />
    </>
  );
};

export default MyLibraryPage;
