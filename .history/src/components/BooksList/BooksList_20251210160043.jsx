import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard.jsx';
import css from './BooksList.module.css';

const BooksList = ({ books = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={css.carsWrap}>
      <ul className={css.list}>
        {books.map(book => (
          <li
            key={book._id || book.id}
            className={`${css.card} ${isVisible ? css.cardVisible : ''}`}
          >
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
