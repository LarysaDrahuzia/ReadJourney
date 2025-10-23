import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList.jsx';
import CarsFilters from '../../components/CarsFilters/CarsFilters.jsx';
import Button from '../../components/Button/Button.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import {
  selectCars,
  selectIsLoading,
  selectPage,
  selectHasMore,
} from '../../redux/cars/selectors.js';
import { fetchCars } from '../../redux/cars/operations.js';
import { resetCars } from '../../redux/cars/slice.js';

import css from './Cars.module.css';

const Cars = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  const handleFilter = filters => {
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, ...filters }));
  };

  const handleLoadMore = () => {
    dispatch(fetchCars({ page: page + 1 }));
  };

  return (
    <section className={css.cars}>
      <div className={css.box}>
        <CarsFilters onFilter={handleFilter} />
        {isLoading && <Loader />}
        {cars.length > 0 && <CarsList cars={cars} />}
        {hasMore && (
          <Button
            className={css.button}
            type="button"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            Load More
          </Button>
        )}
      </div>
    </section>
  );
};

export default Cars;
