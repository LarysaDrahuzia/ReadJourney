import { Location } from '../Icons/Icons.jsx';
import css from './CarGeneralInfo.module.css';

const CarGeneralInfo = ({
  id,
  brand,
  model,
  year,
  address,
  price,
  mileage,
  description,
}) => {
  const city = address?.split(',')[1]?.trim();
  const country = address?.split(',')[2]?.trim();

  return (
    <div className={css.info}>
      <div className={css.car}>
        <h2 className={css.title}>
          {brand} {model}, {year} <span className={css.id}>id: {id}</span>
        </h2>
      </div>
      <div className={css.addressInfo}>
        <Location stroke="#000" />
        <p className={css.text}>
          {city}, {country} Mileage: {Number(mileage).toLocaleString()} km
        </p>
      </div>
      <p className={css.price}>${price}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CarGeneralInfo;
