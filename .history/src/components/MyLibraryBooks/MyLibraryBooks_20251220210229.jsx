import Select from 'react-select';
import { customStyles } from '../CustomSelect/selectConfig.js';
import css from './MyLibraryBooks.module.css';

const statusReadingBook = [unread, In progress, Done, All books];

const MyLibraryBooks = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.selectFilter}>
        <h1 className={css.title}>My library</h1>
      </div>
    </div>
  );
};

export default MyLibraryBooks;
