import React, { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import css from './BookCard.module.css';

const BookCard = ({ book }) => {
  const [open, setOpen] = useState(false);
  const { title, authors, image, _id, coverUrl } = book;

  return (
    <>
      <article className={css.card}>
        <div className={css.thumb} onClick={() => setOpen(true)}>
          <img src={image || coverUrl} alt={title} />
        </div>
        <div className={css.info}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.author}>
            {(authors && authors.join(', ')) || book.author}
          </p>
        </div>
      </article>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className={css.details}>
            <img
              src={image || coverUrl}
              alt={title}
              className={css.detailsImg}
            />
            <div>
              <h2>{title}</h2>
              <p>{(authors && authors.join(', ')) || book.author}</p>
              <p>{book.description || book.synopsis}</p>
              <button
                onClick={() => {
                  /* dispatch addToLibrary */
                }}
              >
                Add to library
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BookCard;
