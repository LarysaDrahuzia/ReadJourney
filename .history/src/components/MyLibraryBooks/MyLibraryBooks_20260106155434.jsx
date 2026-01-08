import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import { selectFilterStatus } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import MyLibraryBookCard from '../MyLibraryBookCard/MyLibraryBookCard.jsx';
import { removeFromMyLibrary } from '../../redux/books/operations.js';
import {
  selectMyLibraryBooks,
  selectMyLibraryError,
  selectMyLibraryLoading,
} from '../../redux/books/selectors.js';
import Loader from '../Loader/Loader.jsx';
import Error from '../Error/Error.jsx';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [
  { value: 'all_books', label: 'All books' },
  { value: 'unread', label: 'Unread' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
];

const MyLibraryBooks = ({ statusOptions = statusReadingBook }) => {
  const dispatch = useDispatch();

  const books = useSelector(selectMyLibraryBooks);
  const status = useSelector(selectFilterStatus);
  const isLoading = useSelector(selectMyLibraryLoading);
  const error = useSelector(selectMyLibraryError);

  const statusOpts =
    Array.isArray(statusOptions) && typeof statusOptions[0] === 'object'
      ? statusOptions
      : statusOptions.map(v => ({ label: v, value: v }));

  const statusValue =
    statusOpts.find(option => option.value === status) || null;

  const handleStatusChange = option => {
    dispatch(setFilters({ status: option ? option.value : null }));
  };

  const handleOpenBook = bookId => {};

  const handleDeleteBook = bookId => {
    dispatch(removeFromMyLibrary(bookId));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.selectFilter}>
        <h1 className={css.title}>My library</h1>
        <Select
          options={statusOpts}
          value={statusValue}
          onChange={handleStatusChange}
          placeholder="All books"
          isSearchable={false}
          styles={customStyles}
          classNamePrefix="custom-select"
        />
      </div>
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {!isLoading && !error && books.length === 0 ? (
        <div className={css.emptyState}>
          <div className={css.iconWrapper}>
            <img src="/books.svg" alt="Books" />
          </div>
          <p className={css.text}>
            To start reading, add{' '}
            <span className={css.part}>some of your books</span> or from the
            recommended ones
          </p>
        </div>
      ) : (
        <ul className={css.list}>
          {books.map(book => (
            <MyLibraryBookCard
              key={book._id}
              book={book}
              onOpen={handleOpenBook}
              onDelete={handleDeleteBook}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyLibraryBooks;
