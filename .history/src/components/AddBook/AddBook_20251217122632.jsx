import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import { addBook } from '../../redux/books/operations.js';
import SuccessModal from '../SuccessModal/SuccessModal.jsx';
import css from './FiltersBooks.module.css';
import {
  selectAddBookError,
  selectAddBookLoading,
} from '../../redux/books/selectors.js';
import toast from 'react-hot-toast';

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
    .matches(
      /^[\p{L}\s'’-]+$/u,
      'Only letters, spaces, apostrophes, and hyphens'
    )
    .required('Author is required'),
  pages: yup
    .number()
    .typeError('Pages must be a number')
    .positive('Pages must be greater than 0')
    .integer('Pages must be an integer')
    .required('Pages are required'),
});

const AddBook = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoading = useSelector(selectAddBookLoading);
  const error = useSelector(selectAddBookError);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmit = data => {
    dispatch(addBook(data))
      .unwrap()
      .then(() => {
        setIsModalOpen(true);
        reset();
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={css.title}>Filters:</h3>
        <div className={css.formList}>
          {/* Name */}
          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <label htmlFor="name" className={css.label}>
                Name:
              </label>
              <input
                {...rhfRegister('name')}
                id="name"
                type="text"
                placeholder="Ilona Ratushniak"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`${css.input} ${errors.name ? css.inputError : ''}`}
              />
            </div>
            {errors.name && (
              <span id="name-error" className={css.errorText}>
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Email */}
          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <label htmlFor="email" className={css.label}>
                Mail:
              </label>
              <input
                {...rhfRegister('email')}
                id="email"
                type="email"
                placeholder="Your@email.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${css.input} ${errors.email ? css.inputError : ''}`}
              />
            </div>
            {errors.email && (
              <span id="email-error" className={css.errorText}>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className={css.fieldWrapper}>
            <div
              className={`${css.field} ${
                errors.password
                  ? css.fieldError
                  : isValid
                  ? css.fieldCorrect
                  : ''
              }`}
            >
              <label htmlFor="password" className={css.label}>
                Password:
              </label>
              <input
                {...rhfRegister('password')}
                id="password"
                type={showPwd ? 'text' : 'password'}
                placeholder="Yourpasswordhere"
                className={css.input}
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? 'password-error' : undefined
                }
                autoComplete="new-password"
                onChange={e => setPwdValue(e.target.value)}
              />
            </div>
          </div>
          <Button className={css.submit} type="submit" variant="secondary">
            Add book
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
