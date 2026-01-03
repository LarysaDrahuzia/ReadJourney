import { useState, useEffect } from 'react';
import MyLibraryBookCard from '../MyLibraryBookCard/MyLibraryBookCard.jsx';
import css from './MyLibraryBookList.module.css';

const MyLibraryBooksList = ({ books = [] }) => {
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 30);
    return () => clearTimeout(timer);
  }, [books]);

  return (
    <div className={css.carsWrap}>
      <ul className={css.list}>
        {books.map(book => (
          <li
            key={book._id || book.id}
            className={`${css.card} ${isVisible ? css.cardVisible : ''}`}
          >
            <MyLibraryBookCard
              key={book._id}
              book={book}
              onDelete={handleDelete}
              onOpen={setSelectedBook}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyLibraryBooksList;
