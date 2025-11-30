import { useDispatch, useSelector } from 'react-redux';
import { Heart } from '../Icons/Icons.jsx';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../../redux/cars/selectors.js';
import toast, { Toaster } from 'react-hot-toast';
import css from './CarCard.module.css';
import { addToFavorites, removeFromFavorites } from '../../redux/cars/slice.js';
import Button from '../Button/Button.jsx';

const CarCard = ({
  id,
  img,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const dispatch = useDispatch();

  const city = address?.split(',')[1]?.trim();
  const country = address?.split(',')[2]?.trim();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some(car => car.id === id);

  const handleToggleFavorite = () => {
    const carData = {
      id,
      img,
      brand,
      model,
      year,
      rentalPrice,
      address,
      rentalCompany,
      type,
      mileage,
    };

    if (!isFavorite) {
      dispatch(addToFavorites(carData));
      toast.success('Added to favorites!');
    } else {
      dispatch(removeFromFavorites(id));
      toast.success('Removed from favorites!');
    }
  };

  return (
    <div className={css.card}>
      <h2 className="visually-hidden">Rental car info</h2>
      <div className={css.thumb}>
        <img
          src={img}
          alt={`${brand} ${model}, ${year}`}
          className={css.image}
        />
        <Button
          type="button"
          variant="icon"
          className={css.favoriteBtn}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}
        >
          <Heart
            filled={isFavorite}
            color={isFavorite ? '#3470ff' : '#ffffff'}
          />
        </Button>
      </div>

      <div className={css.titleRow}>
        <h2 className={css.title}>
          {brand} <span className={css.model}>{model}</span>, {year}
        </h2>
        <p className={css.price}>${rentalPrice}</p>
      </div>

      <ul className={css.infoList}>
        <li>{city} |</li>
        <li>{country} |</li>
        <li>{rentalCompany} |</li>
      </ul>

      <ul className={css.infoList}>
        <li>{type} |</li>
        <li>{Number(mileage).toLocaleString()} km</li>
      </ul>

      <Link to={`/catalog/${id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
