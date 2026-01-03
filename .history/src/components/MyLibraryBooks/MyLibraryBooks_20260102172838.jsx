import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import { selectFilterStatus } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import MyLibraryBooksList from '../MyLibraryBookList/MyLibraryBookList.jsx';
import css from './MyLibraryBooks.module.css';
import { selectMyLibraryBooks } from '../../redux/books/selectors.js';

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

  const statusOpts =
    Array.isArray(statusOptions) && typeof statusOptions[0] === 'object'
      ? statusOptions
      : statusOptions.map(v => ({ label: v, value: v }));

  const statusValue =
    statusOpts.find(option => option.value === status) || null;

  return (
    <div className={css.wrapper}>
      <div className={css.selectFilter}>
        <h1 className={css.title}>My library</h1>
        <Select
          options={statusOpts}
          value={statusValue}
          onChange={option =>
            dispatch(setFilters({ status: option ? option.value : null }))
          }
          placeholder="All books"
          isSearchable={false}
          styles={customStyles}
          classNamePrefix="custom-select"
        />
      </div>
      {books.length === 0 ? (<div className={css.emptyState}>
        <div className={css.iconWrapper}>
          <img src="/books.svg" alt="Books" />
        </div>
        <p className={css.text}>
          To start reading, add{' '}
          <span className={css.part}>some of your books</span> or from the
          recommended ones
        </p>
      </div>) : ()
      
      <MyLibraryBooksList books={books} />
    </div>
  );
};

export default MyLibraryBooks;
