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
              <label htmlFor="startPage" className={css.label}>
                Page number:
              </label>
              <input
                {...rhfRegister('startPage', { valueAsNumber: true })}
                id="startPage"
                type="number"
                placeholder="0"
                className={`${css.input} ${
                  errors.startPage ? css.inputError : ''
                }`}
                aria-invalid={!!errors.startPage}
                aria-describedby={
                  errors.startPage ? 'startPage-error' : undefined
                }
                autoComplete="startPage"
              />
            </div>
            {errors.startPage && (
              <span id="startPage-error" className={css.errorText}>
                {errors.startPage.message}
              </span>
            )}
          </div>
          <Button
            className={css.submit}
            type="submit"
            variant="secondary"
            disabled={isLoading}
          >
            {isLoading ? 'Started...' : 'To start'}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddReading;
