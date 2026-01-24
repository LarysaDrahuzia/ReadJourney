import { useSelector } from 'react-redux';
import {
  selectCurrentBookStatus,
  selectReadingProgress,
} from '../../redux/books/selectors.js';

import Diary from '../Diary/Diary.jsx';
import EmptyProgress from '../EmptyProgress/EmptyProgress.jsx';
import Statistics from '../Statistics/Statistics.jsx';

// import css from './DetailsReading.module.css';

const DetailsReading = () => {
  const status = useSelector(selectReadingStatus);
  const progress = useSelector(selectReadingProgress);

  console.log('READING STATUS:', status);

  if (status === 'unread') {
    return <EmptyProgress />;
  }

  if (status === 'in-progress') {
    return <Diary />;
  }

  if (status === 'done') {
    return <Statistics />;
  }
  return null;
};

export default DetailsReading;
