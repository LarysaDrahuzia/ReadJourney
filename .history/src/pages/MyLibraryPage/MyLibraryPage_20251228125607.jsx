import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyLibraryBooks,
  selectMyLibraryError,
  selectMyLibraryLoading,
  selectMyLibraryPage,
} from '../../redux/books/selectors.js';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import MyLibraryBooks from '../../components/MyLibraryBooks/MyLibraryBooks.jsx';
import css from './MyLibraryPage.module.css';

const MyLibraryPage = () => {
  return (
    <>
      <Dashboard />
      <MyLibraryBooks />
    </>
  );
};

export default MyLibraryPage;
