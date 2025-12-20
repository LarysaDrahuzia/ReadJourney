import { NavLink } from 'react-router-dom';
import BooksList from '../BooksList/BooksList.jsx';
import css from './RecommendedPreview.module.css';

const RecommendedPreview = () => {
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
