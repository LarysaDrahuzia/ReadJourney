import css from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className={css.container}>
      <Link to={'/'} className={css.logo}>
        <span className={css.logoText}>Rental</span>
      </Link>
    </div>
  );
}
