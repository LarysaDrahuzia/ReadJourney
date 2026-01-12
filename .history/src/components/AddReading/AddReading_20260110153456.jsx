import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import {
  myBookReadingStart,
  myBookReadingFinish,
} from '../../redux/books/operations.js';
import { clearReadingError } from '../../redux/books/slice.js';
import toast from 'react-hot-toast';
import css from './AddReading.module.css';
import {
  selectCurrentBookId,
  selectIsReadingBook,
  selectReadingBookError,
  selectReadingBookLoading,
} from '../../redux/books/selectors.js';

const schema = yup.object({
  page: yup
    .number()
    .typeError('Pages must be a number')
    .positive('Pages must be greater than 0')
    .integer('Pages must be an integer')
    .required('Pages are required'),
});

const AddReading = () => {
  const dispatch = useDispatch();

  const isReading = useSelector(selectIsReadingBook);
  const isLoading = useSelector(selectReadingBookLoading);
  const error = useSelector(selectReadingBookError);
  const bookId = useSelector(selectCurrentBookId);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmit = data => {
    if (isReading) {
      dispatch(myBookReadingFinish({ bookId, page: data.page }));
    } else {
      dispatch(myBookReadingStart({ bookId, page: data.page }));
    }
  };

  useEffect(() => {
    if (!error) return;
    toast.error(error);
    dispatch(clearReadingError());
  }, [error, dispatch]);

  const buttonText = isLoading
    ? 'Processing...'
    : isReading
    ? 'To stop'
    : 'To start';

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={css.title}>Start page:</h3>
        <div className={css.formList}>
          <div className={css.fieldWrapper}>
            <div className={css.field}>
              <label htmlFor="page" className={css.label}>
                Page number:
              </label>
              <input
                {...register('page', { valueAsNumber: true })}
                id="page"
                type="number"
                placeholder="0"
                className={`${css.input} ${errors.page ? css.inputError : ''}`}
                disabled={isReading}
                aria-invalid={!!errors.page}
                aria-describedby={errors.page ? 'page-error' : undefined}
                autoComplete="off"
              />
            </div>

            {errors.page && (
              <span id="page-error" className={css.errorText}>
                {errors.page.message}
              </span>
            )}
          </div>

          <Button
            className={css.submit}
            type="submit"
            variant="secondary"
            disabled={isLoading}
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddReading;
