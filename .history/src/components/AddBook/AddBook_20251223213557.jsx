import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import { addBook } from '../../redux/books/operations.js';
import SuccessModal from '../SuccessModal/SuccessModal.jsx';
import css from './AddBook.module.css';
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
  totalPages: yup
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
    register: rhfRegister,
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
          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <label htmlFor="title" className={css.label}>
                Book title:
              </label>
              <input
                {...rhfRegister('title')}
                id="title"
                type="text"
                placeholder="Enter text"
                autoComplete="title"
                aria-invalid={!!errors.title}
                aria-describedby={errors.title ? 'title-error' : undefined}
                className={`${css.input} ${errors.title ? css.inputError : ''}`}
              />
            </div>
            {errors.title && (
              <span id="title-error" className={css.errorText}>
                {errors.title.message}
              </span>
            )}
          </div>

          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <label htmlFor="author" className={css.label}>
                The author:
              </label>
              <input
                {...rhfRegister('author')}
                id="author"
                type="text"
                placeholder="Enter text"
                autoComplete="author"
                aria-invalid={!!errors.author}
                aria-describedby={errors.author ? 'author-error' : undefined}
                className={`${css.input} ${
                  errors.author ? css.inputError : ''
                }`}
              />
            </div>
            {errors.author && (
              <span id="author-error" className={css.errorText}>
                {errors.author.message}
              </span>
            )}
          </div>
          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <label htmlFor="totalPages" className={css.label}>
                Number of pages:
              </label>
              <input
                {...rhfRegister('totalPages', { valueAsNumber: true })}
                id="totalPages"
                type="number"
                placeholder="0"
                className={css.input}
                aria-invalid={!!errors.pages}
                aria-describedby={errors.pages ? 'totalPages-error' : undefined}
                autoComplete="totalPages"
              />
            </div>
            {errors.pages && (
              <span id="totalPages-error" className={css.errorText}>
                {errors.pages.message}
              </span>
            )}
          </div>
          <Button
            className={css.submit}
            type="submit"
            variant="secondary"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add book'}
          </Button>
        </div>
      </form>
      {isModalOpen && (
        <SuccessModal
          title="Good job"
          text="Your book is now in the library! The joy knows no bounds and now you can start your training"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
export default AddBook;
