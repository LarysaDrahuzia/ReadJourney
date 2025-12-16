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
    .required('Title is required'),
  author: yup
    .string()
    .trim()
    .min(3, 'Name must contain at least 3 symbols')
    .max(40, 'Maximum 20 symbols')
    .matches(
      /^[\p{L}\s'’-]+$/u,
      'Only letters, spaces, apostrophes, and hyphens'
    )
    .required('Author is required'),
  pages: yup
    .number()
    .min(1, 'The number of pages must contain at least 1 digit.')
    .required('Enter password'),
});

const AddBook = ({ fields }) => {
  const library = useSelector(selectMyLibraryBooks);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 className={css.title}>Filters:</h3>
        {fields.map(({ name, placeholder, label, type = 'text' }) => (
          <div key={name} className={css.field}>
            <label className={css.label}>{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={}
              className={css.input}
            />
          </div>
        ))}
        <Button className={css.submit} type="submit" variant="secondary">
          Add book
        </Button>
      </form>
    </div>
  );
};
export default AddBook;
