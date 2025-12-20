import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button/Button.jsx';
import { addBook } from '../../redux/books/operations.js';
import SuccessModal from '../SuccessModal/SuccessModal.jsx';
import css from './FiltersBooks.module.css';
import { selectAddBookError, selectAddBookLoading } from '../../redux/books/selectors.js';
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const isLoading = useSelector(selectAddBookLoading);
  const error = useSelector(selectAddBookError)

  const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' })
  
  const onSubmit = data => {
    dispatch(addBook(data)).unwrap().then(() => {
      setIsModalOpen(true); 
      reset();
    })
    .catch(()=>{})
  }
  
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error])

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
