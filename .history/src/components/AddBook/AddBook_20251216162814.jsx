import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import css from './FiltersBooks.module.css';
import { selectMyLibraryBooks } from '../../redux/books/selectors.js';

const schema = yup.object({
  title: yup
    .string()
    .trim()
    .min(3, 'Name must contain at least 3 symbols')
    .max(40, 'Maximum 40 symbols')
    .matches(
      /^[\p{L}\s'’-]+$/u,
      'Only letters, spaces, apostrophes, and hyphens'
    )
    .required('Enter a name'),
  author: yup
    .string()
    .trim()
    .min(3, 'Name must contain at least 3 symbols')
    .max(40, 'Maximum 20 symbols')
    .matches(
      /^[\p{L}\s'’-]+$/u,
      'Only letters, spaces, apostrophes, and hyphens'
    )
    .required('Enter email'),
  pages: yup
    .string()
    .min(7, 'Password must contain at least 7 symbols')
    .matches(/[A-ZА-ЯЇІЄҐ]/, 'At least one capital letter')
    .matches(/[a-zа-яїієґ]/, 'At least one lowercase letter')
    .matches(/[0-9]/, 'At least one digit')
    .required('Enter password'),
});

const AddBook = ({ fields, onFilter }) => {
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
          <Button className={css.submit} type="submit" variant="secondary">
            Add book
          </Button>
        </form>
      </div>
    </div>
  );
};
export default AddBook;
