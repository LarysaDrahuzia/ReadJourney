import { useSelector } from 'react-redux';
import { selectReadingStatus } from '../../redux/books/selectors.js';
import Diary from '../Diary/Diary.jsx';
import EmptyProgress from '../EmptyProgress/EmptyProgress.jsx';
// import css from './DetailsReading.module.css';

const DetailsReading = () => {
  const status = useSelector(selectReadingStatus);

  if (status === 'unread') {
    return <EmptyProgress />;
  }

  if (status === 'in-progress') {
    return <Diary />;
  }
  return null;
};

export default DetailsReading;
