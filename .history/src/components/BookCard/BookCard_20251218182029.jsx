import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  selectMyLibrary,
  selectIsLoggedIn,
} from '../../redux/auth/selectors.js';
import {
  addToMyLibrary,
  removeFromMyLibrary,
} from '../../redux/auth/operations.js';
import Button from '../Button/Button.jsx';
import css from './BookCard.module.css';
import { Close } from '../Icons/Icons.jsx';

const BookCard = ({ book }) => {
  const { _id, title, author, imageUrl, totalPages } = book;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const library = useSelector(selectMyLibrary);

  const bookId = String(_id);
  const isInLibrary = library?.includes(bookId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Відкрити / закрити модалку
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Закриття по клавіші ESC
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Додавання / видалення книги з бібліотеки
  const handleToggleLibrary = async () => {
    if (!isLoggedIn) {
      toast.error('Please sign in to manage your library');
      return;
    }

    setIsUpdating(true);
    try {
      if (isInLibrary) {
        await dispatch(removeFromMyLibrary(bookId)).unwrap();
        toast.success('Removed from library');
      } else {
        await dispatch(addToMyLibrary(bookId)).unwrap();
        toast.success('Added to library');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      {/* Картка книги */}
      <div className={css.card}>
        <button
          type="button"
          className={css.thumb}
          onClick={handleOpenModal}
          aria-label={`Open details for ${title}`}
        >
          <img src={imageUrl} alt={title} className={css.image} />
        </button>

        <div className={css.titleRow}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.author}>{author}</p>
        </div>
      </div>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className={css.backdrop} onClick={handleCloseModal}>
          <div
            className={css.modal}
            onClick={e => e.stopPropagation()} // щоб не закривалось при кліку всередину
          >
            <button
              type="button"
              className={css.closeBtn}
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <Close className={css.icon} />
            </button>

            <div className={css.modalContent}>
              <img src={imageUrl} alt={title} className={css.modalImage} />

              <h2 className={css.modalTitle}>{title}</h2>
              <p className={css.modalAuthor}>by {author}</p>
              <p className={css.pages}>{totalPages} pages</p>
              {/* {status && (
                <p>
                  <strong>Status:</strong> {status}
                </p>
              )}
              {progress != null && (
                <p>
                  <strong>Progress:</strong> {progress}%
                </p>
              )}
              {owner && (
                <p>
                  <strong>Owner ID:</strong> {owner}
                </p>
              )} */}

              <Button
                type="button"
                className={css.btnAddBook}
                onClick={handleToggleLibrary}
                variant="secondary"
                disabled={isUpdating}
              >
                {isInLibrary ? 'Remove from library' : 'Add to library'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCard;
