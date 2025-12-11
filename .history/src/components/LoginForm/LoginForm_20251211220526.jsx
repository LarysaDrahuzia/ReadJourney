import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import { Eye, EyeCrossed, InputCorrect, InputError } from '../Icons/Icons.jsx';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginUser } from '../../redux/auth/operations.js';
import css from './LoginForm.module.css';

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Incorrect email')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please enter a valid email')
    .required('Enter email'),
  password: yup
    .string()
    .min(7, 'Password must contain at least 7 symbols')
    .matches(/[A-ZА-ЯЇІЄҐ]/, 'At least one capital letter')
    .matches(/[a-zа-яїієґ]/, 'At least one lowercase letter')
    .matches(/[0-9]/, 'At least one digit')
    .required('Enter password'),
});

const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [pwdValue, setPwdValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register: rhfRegister,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async values => {
    try {
      const res = await dispatch(loginUser(values)).unwrap();
      console.log('loginUser result:', res);
      toast.success('Log in successful!');
      reset();
      navigate('/recommended');
    } catch (error) {
      const msg =
        typeof error === 'string' ? error : error?.message || 'Log in failed';
      setError('email', { type: 'server', message: msg });
      toast.error(msg);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className={css.title}>
        Expand your mind, reading
        <span className={css.part}> a book</span>
      </h1>
      <div className={css.formList}>
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
              errors.password ? css.fieldError : isValid ? css.fieldCorrect : ''
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
              aria-describedby={errors.password ? 'password-error' : undefined}
              autoComplete="new-password"
              onChange={e => setPwdValue(e.target.value)}
            />
            {!errors.password && !isValid && (
              <button
                type="button"
                onClick={() => setShowPwd(prev => !prev)}
                className={css.eyeBtn}
              >
                {pwdValue.length === 0 ? (
                  <Eye />
                ) : showPwd ? (
                  <Eye />
                ) : (
                  <EyeCrossed />
                )}
              </button>
            )}
            {errors.password && (
              <>
                <span id="password-error" className={css.icon}>
                  <InputError />
                </span>
              </>
            )}
            {!errors.password && isValid && (
              <>
                <span id="password-correct" className={css.icon}>
                  <InputCorrect />
                </span>
              </>
            )}
          </div>
          {errors.password ? (
            <p className={css.errorText}>Enter a valid Password*</p>
          ) : isValid ? (
            <p className={css.correctText}>Password is secure</p>
          ) : null}
        </div>
      </div>
      <div className={css.login}>
        <Button
          className={css.submit}
          type="submit"
          variant="primary"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Signin...' : 'Log in'}
        </Button>
        <Link to="/register" className={css.link}>
          Don’t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
