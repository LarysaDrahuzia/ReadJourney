import { DeleteIcon, Close } from '../Icons/Icons.jsx';
import { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import css from './MyLibraryBookCard.module.css';

const MyLibraryBookCard = ({ book, onOpen, onDelete }) => {
  const { id, title, author, imageUrl } = book;

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

  return (
    <>
      <li className={css.card}>
        <div
          className={css.coverWrapper}
          onClick={() => onOpen(book)}
          role="button"
          tabIndex={0}
        >
          <img
            src={imageUrl}
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

      {/* Модальне вікно */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <button
            type="button"
            className={css.closeBtn}
            onClick={handleCloseModal}
            aria-label="Close modal"
          >
            <Close className={css.icon} />
          </button>

          <div className={css.modalContent}>
            <button>
              <img src={imageUrl} alt={title} className={css.modalImage} />
            </button>
            <h2 className={css.modalTitle}>{title}</h2>
            <p className={css.modalAuthor}>by {author}</p>
            <p className={css.pages}>{totalPages} pages</p>

            <Button
              type="button"
              className={css.btnAddBook}
              onClick={handleStartReading}
              variant="secondary"
              disabled={isUpdating}
            >
              Start reading
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MyLibraryBookCard;
