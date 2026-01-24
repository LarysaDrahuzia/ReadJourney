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
import {
  selectCurrentBookId,
  selectCurrentBookStatus,
  selectIsReadingNow,
  selectReadingError,
  selectReadingLoading,
} from '../../redux/books/selectors.js';
import css from './AddReading.module.css';

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

  const bookId = useSelector(selectCurrentBookId);
  const status = useSelector(selectCurrentBookStatus);
  const isLoading = useSelector(selectReadingLoading);
  const error = useSelector(selectReadingError);
  const isReadingNow = useSelector(selectIsReadingNow);

  // const isReading = status === 'in-progress';

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmit = ({ page }) => {
    if (isReadingNow) {
      dispatch(
        myBookReadingFinish({
          bookId,
          endPage: page,
        })
      );
    } else {
      dispatch(
        myBookReadingStart({
          bookId,
          startPage: page,
        })
      );
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
        <h3 className={css.title}>
          {isReading ? 'Stop page:' : 'Start page:'}
        </h3>
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
                aria-invalid={!!errors.page}
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
            disabled={isLoading || !bookId}
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddReading;
