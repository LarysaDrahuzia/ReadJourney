import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import { selectFilterStatus } from '../../redux/filters/selectors.js';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [
  { value: 'unread', label: 'Unread' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
  { value: 'all_books', label: 'All books' },
];

const MyLibraryBooks = ({ onFilter, statusReadingBook }) => {
  const dispatch = useDispatch()

const

  return (
    <div className={css.wrapper}>
      <div className={css.selectFilter}>
        <h1 className={css.title}>My library</h1>
        <Select
          options={levelOpts}
          value={levelValue}
          onChange={opt => dispatch(setFilters({ levels: opt?.value || '' }))}
          placeholder="Choose a level"
          isSearchable
          getOptionValue={o => String(o.value)}
          getOptionLabel={o => String(o.label)}
          styles={customStyles}
          classNamePrefix="custom-select"
          isClearable
        />
      </div>
    </div>
  );
};

export default MyLibraryBooks;
