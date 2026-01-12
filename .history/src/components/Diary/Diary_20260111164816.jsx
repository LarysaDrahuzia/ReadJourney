import { useSelector } from 'react-redux';
import { selectReadingProgress } from '../../redux/books/selectors.js';
import css from './Diary.module.css';

const Diary = () => {
  const progress = useSelector(selectReadingProgress);

  if (!progress.lenght) {
    return null;
  }

  return <div></div>;
};

export default Diary;
