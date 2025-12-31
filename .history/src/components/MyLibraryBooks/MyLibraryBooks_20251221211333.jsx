import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import { selectFilterStatus } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import { IconBooks } from '../Icons/Icons.jsx';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [
  { value: 'all_books', label: 'All books' },
  { value: 'unread', label: 'Unread' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
];

const MyLibraryBooks = ({ statusOptions = statusReadingBook }) => {
  const dispatch = useDispatch();

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
          isClearable
        />
      </div>
      <div className={css.emptyState}>
        <div className={css.iconWrapper}>
          {/* <img src="/public/books.svg" alt="Books" /> */}
          <IconBooks className={css.icon} />
        </div>
        <p className={css.text}>
          To start reading, add{' '}
          <span className={css.part}>some of your books</span> or from the
          recommended ones
        </p>
      </div>
    </div>
  );
};

export default MyLibraryBooks;
