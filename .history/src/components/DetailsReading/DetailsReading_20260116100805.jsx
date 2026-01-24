import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectReadingStatus } from '../../redux/books/selectors.js';
import Diary from '../Diary/Diary.jsx';
import EmptyProgress from '../EmptyProgress/EmptyProgress.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import { HourglassIcon, PieChartIcon } from '../Icons/Icons.jsx';
// import css from './DetailsReading.module.css';

const DetailsReading = () => {
  const status = useSelector(selectReadingStatus);

  if (status === 'unread') {
    return <EmptyProgress />;
  }

  if (status === 'in-progress') {
    return <Diary />;
  }

  if (status === 'done') {
    return <Statistics />;
  }
};

export default DetailsReading;
