import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectReadingStatus,
  selectReadingProgress,
} from '../../redux/books/selectors.js';
import { setReadingStatus } from '../../redux/books/slice.js';
import Diary from '../Diary/Diary.jsx';
import EmptyProgress from '../EmptyProgress/EmptyProgress.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import { HourglassIcon, PieChartIcon } from '../Icons/Icons.jsx';
// import css from './DetailsReading.module.css';

const DetailsReading = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectReadingStatus);
  const progress = useSelector(selectReadingProgress);

  console.log('READING STATUS:', status);

  useEffect(() => {
    if (status === 'unread') {
      dispatch(setReadingStatus('in_progress'));
    }
  }, [status, progress.length, dispatch]);

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
