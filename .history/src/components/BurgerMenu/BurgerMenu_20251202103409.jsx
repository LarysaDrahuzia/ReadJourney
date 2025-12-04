import { NavLink } from 'react-router-dom';
import { Close } from '../Icons/Icons.jsx';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div className={css.menu}>
      <button type="button" className={css.close}>
        <Close />
      </button>
      <div>
        <NavLink
          to="/recommended"
          className={(css.link, isActive && css.active)}
        >
          Home
        </NavLink>
        <NavLink to="/library" className={(css.link, isActive && css.active)>My library</NavLink>
      </div>
    </div>
  );
};

export default BurgerMenu;
