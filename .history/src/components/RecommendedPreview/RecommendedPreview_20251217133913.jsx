import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BooksList from '../BooksList/BooksList.jsx';
import css from './RecommendedPreview.module.css';

const RecommendedPreview = () => {
  useEffect(() => {
    dispatch(fetchRecommendedBooks({ limit: 3 }));
  }, []);

  return (
    <div className={css.preview}>
      <h2 className={css.title}>Recommended books</h2>
      <BooksList books={visibleBooks} />
      <div className={css.blokLink}>
        <NavLink className={css.link} to="/recommended">
          Home
        </NavLink>
        <Login />
      </div>
    </div>
  );
};

export default RecommendedPreview;
