import css from './CarDescriptions.module.css';
import { Calendar, Gear, CheckCircle, Car, FuelPump } from '../Icons/Icons.jsx';

const CarDescriptions = ({
  rentalConditions = [],
  year,
  type,
  fuelConsumption,
  engineSize,
  accessories = [],
  functionalities = [],
}) => {
  return (
    <div className={css.description}>
      {/* Rental Conditions */}
      <div className={css.blok}>
        <h3 className={css.title}>Rental Conditions:</h3>
        <ul className={css.list}>
          {rentalConditions.map((cond, idx) => (
            <li key={idx} className={css.listItem}>
              <CheckCircle className={css.icon} />
              {cond}
            </li>
          ))}
        </ul>
      </div>

      {/* Car Specifications */}
      <div className={css.blok}>
        <h3 className={css.title}>Car Specifications:</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <Calendar className={css.icon} />
            Year: {year}
          </li>
          <li className={css.listItem}>
            <Car className={css.icon} />
            Type: {type}
          </li>
          <li className={css.listItem}>
            <FuelPump className={css.icon} />
            Fuel Consumption: {fuelConsumption}
          </li>
          <li className={css.listItem}>
            <Gear className={css.icon} />
            Engine Size: {engineSize}
          </li>
        </ul>
      </div>

      {/* Accessories and Functionalities */}
      <div className={css.blok}>
        <h3 className={css.title}>Accessories and Functionalities:</h3>
        <ul className={css.list}>
          {accessories.map((item, idx) => (
            <li key={`acc-${idx}`} className={css.listItem}>
              <CheckCircle className={css.icon} />
              {item}
            </li>
          ))}
          {functionalities.map((item, idx) => (
            <li key={`func-${idx}`} className={css.listItem}>
              <CheckCircle className={css.icon} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDescriptions;
