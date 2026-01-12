import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import { selectFilterStatus } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import MyLibraryBookCard from '../MyLibraryBookCard/MyLibraryBookCard.jsx';
import {
  fetchMyLibrary,
  removeFromMyLibrary,
} from '../../redux/books/operations.js';
import {
  selectMyLibraryBooks,
  // selectMyLibraryError,
  selectMyLibraryLoading,
} from '../../redux/books/selectors.js';
import { Close } from '../Icons/Icons.jsx';
import Modal from '../Modal/Modal.jsx';
import Loader from '../Loader/Loader.jsx';
import Error from '../Error/Error.jsx';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [
  { value: 'all_books', label: 'All books' },
  { value: 'unread', label: 'Unread' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
];

const MyLibraryBooks = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectMyLibraryBooks);
  const status = useSelector(selectFilterStatus);
  const isLoading = useSelector(selectMyLibraryLoading);
  // const error = useSelector(selectMyLibraryError);

  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //завантаження книг при відкритті сторінки
  useEffect(() => {
    dispatch(fetchMyLibrary());
  }, [dispatch]);

  const handleStatusChange = option => {
    dispatch(setFilters({ status: option ? option.value : 'all_books' }));
  };

  const statusOpts = statusReadingBook;

  const statusValue =
    statusOpts.find(option => option.value === status) || null;

  //відкрити, закрити модалку
  const handleOpenBook = book => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const handleDeleteBook = bookId => {
    dispatch(removeFromMyLibrary(bookId));
  };

  //фільтрація списку згідно селекту
  const filteredBooks =
    status === 'all_books' || !status
      ? books
      : books.filter(book => book.status === status);

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

      {!isLoading && !error && (
        <>
          {filteredBooks.length === 0 ? (
            <div className={css.emptyState}>
              <div className={css.iconWrapper}>
                <img className={css.book} src="/books.svg" alt="Books" />
              </div>
              <p className={css.text}>
                To start reading, add{' '}
                <span className={css.part}>some of your books</span> or from the
                recommended ones
              </p>
            </div>
          ) : (
            <ul className={css.list}>
              {filteredBooks.map(book => (
                <MyLibraryBookCard
                  key={book.id}
                  book={book}
                  onOpen={handleOpenBook}
                  onDelete={handleDeleteBook}
                />
              ))}
            </ul>
          )}
        </>
      )}

      {/*модальне вікно*/}
      {isModalOpen && selectedBook && (
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
            <img
              src={selectedBook.imageUrl || '/placeholder-book.jpg'}
              alt={selectedBook.title}
              className={css.modalImage}
            />
            <h2 className={css.modalTitle}>{selectedBook.title}</h2>
            <p className={css.modalAuthor}>{selectedBook.author}</p>
            <p className={css.pages}>{selectedBook.totalPages} pages</p>

            <NavLink className={css.link} to="/reading">
              Start reading
            </NavLink>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyLibraryBooks;
