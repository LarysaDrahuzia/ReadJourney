import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarById } from '../redux/cars/operations.js';
import { selectSelectedCar, selectIsLoading } from '../redux/cars/selectors.js';
import CarBookingForm from '../components/CarBookingForm/CarBookingForm.jsx';
import CarDescriptions from '../components/CarDescriptions/CarDescriptions.jsx';
import CarGeneralInfo from '../components/CarGeneralInfo/CarGeneralInfo.jsx';
import Loader from '../components/Loader/Loader.jsx';
import css from './DetailsCar.module.css';

const DetailsCar = () => {
  const { id: routeId } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarById(routeId));
  }, [dispatch, routeId]);

  if (isLoading || !car) {
    return <Loader />;
  }
  return (
    <section className={css.details}>
      <div className={css.carWrapper}>
        <div className={css.imageWrapper}>
          <img
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            className={css.image}
          />
        </div>
        <div className={css.infoWrapper}>
          <CarGeneralInfo
            id={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            address={car.address}
            price={car.rentalPrice}
            mileage={car.mileage}
            description={car.description}
          />
          <CarDescriptions
            rentalConditions={car.rentalConditions}
            year={car.year}
            type={car.type}
            fuelConsumption={car.fuelConsumption}
            engineSize={car.engineSize}
            accessories={car.accessories}
            functionalities={car.functionalities}
          />
        </div>
        <CarBookingForm />
      </div>
    </section>
  );
};

export default DetailsCar;
