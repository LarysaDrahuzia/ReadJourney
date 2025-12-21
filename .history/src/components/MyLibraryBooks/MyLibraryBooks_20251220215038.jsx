import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import { selectFilterStatus } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [
  { value: 'unread', label: 'Unread' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
  { value: 'all_books', label: 'All books' },
];

const MyLibraryBooks = ({ onFilter, statusOptions: statusReadingBook }) => {
  const dispatch = useDispatch();

  const status = useSelector(selectFilterStatus);

  const statusOpts =
    Array.isArray(statusReadingBook) && typeof statusReadingBook[0] === 'object'
      ? statusReadingBook
      : statusReadingBook.map(v => ({ label: v, value: v }));

  const statusValue = statusOpts.filter(o => status.includes(o.value));

  return (
    <div className={css.wrapper}>
      <div className={css.selectFilter}>
        <h1 className={css.title}>My library</h1>
        <Select
          options={statusOpts}
          value={statusValue}
          onChange={opt => dispatch(setFilters({ status: opt?.value || '' }))}
          placeholder="All books"
          isSearchable
          getOptionValue={o => String(o.value)}
          getOptionLabel={o => String(o.label)}
          styles={customStyles}
          classNamePrefix="custom-select"
          isClearable
        />
      </div>
      <div className={css.listBooks}>
        <button className={css.btnRead}>
          <img src="/books.jpg" alt="Books" />
        </button>
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
