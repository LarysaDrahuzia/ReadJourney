import css from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className={css.container}>
      <Link to={'/catalog'} className={css.logo}>
        <span className={css.logoBold}>Rental</span>
        <span className={css.logoColored}>Car</span>
      </Link>
    </div>
  );
}
