import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../../redux/books/operations.js';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import MyBook from '../../components/MyBook/MyBook.jsx';
import css from './ReadingPage.module.css';

const ReadingPage = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookById(bookId));
  }, [bookId, dispatch]);

  return (
    <div className={`container ${css.pageWrap}`}>
      <Dashboard />
      <MyBook />
    </div>
  );
};

export default ReadingPage;
