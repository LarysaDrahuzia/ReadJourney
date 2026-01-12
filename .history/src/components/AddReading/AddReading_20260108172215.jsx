import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import {
  myBookReadingStart,
  myBookReadingFinish,
} from '../../redux/books/operations.js';

import css from './AddReading.module.css';
// import {
//   selectAddBookError,
//   selectAddBookLoading,
// } from '../../redux/books/selectors.js';
import toast from 'react-hot-toast';

const schema = yup.object({
  startPage: yup
    .number()
    .typeError('Pages must be a number')
    .positive('Pages must be greater than 0')
    .integer('Pages must be an integer')
    .required('Pages are required'),
});

const AddReading = () => {
  const dispatch = useDispatch();

  const {
    register: rhfRegister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmit = data => {
    dispatch(myBookReadingStart(data))
      .unwrap()
      .then(() => {
        dispatch(fetchMyLibrary());
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
        <h3 className={css.title}>Start page:</h3>
        <div className={css.formList}>
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
                className={`${css.input} ${
                  errors.totalPages ? css.inputError : ''
                }`}
                aria-invalid={!!errors.totalPages}
                aria-describedby={
                  errors.totalPages ? 'totalPages-error' : undefined
                }
                autoComplete="totalPages"
              />
            </div>
            {errors.totalPages && (
              <span id="totalPages-error" className={css.errorText}>
                {errors.totalPages.message}
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
    </div>
  );
};
export default AddReading;
