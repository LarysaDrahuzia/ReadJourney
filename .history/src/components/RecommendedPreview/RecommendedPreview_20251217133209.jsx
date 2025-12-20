import BooksList from '../BooksList/BooksList.jsx';
import css from './RecommendedPreview.module.css';

const RecommendedPreview = () => {
  return (
    <div className={css.preview}>
      <h2>Recommended books</h2>
      <BooksList books={visibleBooks} />
    </div>
  );
};

export default RecommendedPreview;
