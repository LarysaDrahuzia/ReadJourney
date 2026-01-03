import { DeleteIcon } from '../Icons/Icons.jsx';
import css from './MyLibraryBookCard.module.css';

const MyLibraryBookCard = ({ book, onOpen, onDelete }) => {
  const { id, title, author, imageUrl } = book;

  return (
    <li className={css.card}>
      <div
        className={css.coverWrapper}
        onClick={() => onOpen(book)}
        role="button"
        tabIndex={0}
      >
        <img
          src={imageUrl || '/book-placeholder.png'}
          alt={title}
          className={css.cover}
          loading="lazy"
        />
      </div>

      <div className={css.meta}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.author}>{author}</p>
      </div>

      <button
        className={css.deleteBtn}
        onClick={() => onDelete(id)}
        aria-label="Remove book from library"
      >
        <DeleteIcon className={css.icon} />
      </button>
    </li>
  );
};

export default MyLibraryBookCard;
