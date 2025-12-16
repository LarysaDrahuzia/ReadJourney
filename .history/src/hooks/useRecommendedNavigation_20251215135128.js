import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  nextRecommendedPage,
  prevRecommendedPage,
} from '../redux/books/slice.js';

export const useRecommendedNavigation = {
  books,
  page,
  totalPages,
};
