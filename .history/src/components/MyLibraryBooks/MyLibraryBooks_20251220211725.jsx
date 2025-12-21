import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [unread, inprogress, done]
  { value: 'unread', label: 'Unread' },
  { value: 'inprogress', label: 'In progress' },
  { value: 'done', label: 'Done' },
  { value: 'B2', label: 'B2 Upper-Intermediate' },;

const MyLibraryBooks = ({ onFilter, statusReadingBook }) => {
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
