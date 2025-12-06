import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/filters/slice.js';

import {
  selectFilterAuthor,
  selectFilterTitle,
} from '../../redux/filters/selectors.js';
import { clearCurrentBook } from '../../redux/books/slice.js';
import { resetFilters } from '../../redux/filters/slice.js';
import Button from '../Button/Button.jsx';
import css from './FiltersBooks.module.css';

const FiltersBooks = ({ fields }) => {
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.form}>
        <form className={css.filters}>
          <h3 className={css.title}>Filters:</h3>
          {fields.map(({ name, placeholder, label, type = 'text' }) => (
            <div key={name} className={css.field}>
              <label className={css.label}>{label}</label>
              <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={filters[name] || ''}
                onChange={handleChange}
                className={css.input}
              />
            </div>
          ))}
        </form>
        <Button className={css.submit} type="submit" variant="secondary">
          To apply
        </Button>
      </div>
    </div>
  );
};
export default FiltersBooks;
