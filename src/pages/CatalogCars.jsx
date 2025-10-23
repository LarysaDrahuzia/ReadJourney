import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cars from '../sections/Cars/Cars.jsx';
import Error from '../components/Error/Error.jsx';
import Loader from '../components/Loader/Loader.jsx';
import {
  selectIsLoading,
  selectError,
  selectPage,
} from '../redux/cars/selectors.js';
import { fetchCars, fetchBrands } from '../redux/cars/operations.js';

const CatalogCars = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const page = useSelector(selectPage);

  // Завантаження брендів (одноразово)
  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  // Завантаження машин
  useEffect(() => {
    const fetch = async () => {
      try {
        await dispatch(fetchCars({ page })).unwrap();
      } catch (error) {
        console.error('Error is:', error.message);
      }
    };

    fetch();
  }, [dispatch, page]);

  return (
    <>
      <Cars />
      {isLoading && <Loader />}
      {isError && <Error>Something went wrong. Please try again.</Error>}
    </>
  );
};

export default CatalogCars;
