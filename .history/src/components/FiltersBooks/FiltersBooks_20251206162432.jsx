import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/filters/slice.js';

import Button from '../Button/Button.jsx';
import css from './FiltersBooks.module.css';
import { selectFilters } from '../../redux/filters/selectors.js';

const FiltersBooks = ({ fields, onFilter }) => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.form}>
        <form className={css.filters} onSubmit={handleSubmit}>
          <h3 className={css.title}>Filters:</h3>
          {fields.map(({ name, placeholder, label, type = 'text' }) => (
            <div key={name} className={css.field}>
              <label className={css.label}>{label}</label>
              <input
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
