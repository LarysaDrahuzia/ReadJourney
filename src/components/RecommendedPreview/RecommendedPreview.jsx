import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchRecommendedBooks } from '../../redux/books/operations.js';
import { Login } from '../Icons/Icons.jsx';
import BooksList from '../BooksList/BooksList.jsx';
import css from './RecommendedPreview.module.css';
import { selectRecommendedBooks } from '../../redux/books/selectors.js';

const RecommendedPreview = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectRecommendedBooks);

  useEffect(() => {
    if (!books.length) {
      dispatch(fetchRecommendedBooks());
    }
  }, [dispatch, books.length]);

  const previewBooks = books.slice(0, 3);

  return (
    <div className={css.preview}>
      <h2 className={css.title}>Recommended books</h2>
      <BooksList books={previewBooks} variant="preview" />
      <div className={css.blokLink}>
        <NavLink className={css.link} to="/recommended">
          Home
        </NavLink>
        <Login className={css.icon} />
      </div>
    </div>
  );
};

export default RecommendedPreview;
